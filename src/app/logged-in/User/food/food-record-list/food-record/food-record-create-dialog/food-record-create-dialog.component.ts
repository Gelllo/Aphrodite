import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Observable, Subject, debounceTime, distinctUntilChanged, filter, finalize, map, switchMap, tap } from 'rxjs';
import { FoodService } from 'src/app/services/Food/food.service';
import { FoodDTO } from '../../../food-dto';
import { MealDTO } from '../../../meal-dto';
import { Nutrient } from '../../../nutrient';

@Component({
  selector: 'app-food-record-create-dialog',
  templateUrl: './food-record-create-dialog.component.html',
  styleUrls: ['./food-record-create-dialog.component.css']
})
export class FoodRecordCreateDialogComponent implements OnInit{
  public productsFormControl = new FormControl();
  public recipesFormControl = new FormControl();

  public recipeSearch:string;
  public productSearch:string;

  public recipes:any[];
  public products:any[];

  public requestData:any[];

  public meal : MealDTO = new MealDTO();

  public selectedProduct: FoodDTO;

  public isLoading = false;
  public foodList : FoodDTO[] = [];
  public userSelectedFood = false;
  public foodType = "Recipe";
  private nutrientsTarget = ["Calories", "Fat", "Protein", "Fiber"];

  constructor(
    public dialogRef: MatDialogRef<FoodRecordCreateDialogComponent>,
    private foodService:FoodService
  ) {
  }
  ngOnInit(): void {
      this.productsFormControl.valueChanges.pipe(
        filter((res:string) => {
          return res !== null && res?.length >= 3
        }),
        distinctUntilChanged(),
        debounceTime(1000),
        tap(()=>{
          this.isLoading=true;
          this.foodType = 'Grocery Product';
        }),
        switchMap((val: string) => {
          console.log(val);
          return this.foodService.GetGroceryProductsFromSpoonecular(val).pipe(
            map(x=>x.products),
            finalize(()=>{
              this.isLoading=false
            }));})
        ).subscribe((data:any)=>{
          console.log(data);
          this.requestData = data;
        });

        this.recipesFormControl.valueChanges.pipe(
          distinctUntilChanged(),
          debounceTime(1000),
          tap(()=>{
            console.log("here");
            this.isLoading=true;
            this.foodType = 'Recipe';
          }),
          switchMap((val: string) => {
            console.log(val);
            return this.foodService.GetRecipesFromSpoonecular(val).pipe(
              map(x=>x.results),
              finalize(()=>{
                this.isLoading=false
              }));})
          ).subscribe((data:any)=>{
            console.log(data);
            this.requestData = data;
          });
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  displayObj(){
    console.log(this.foodList);
  }

  ChangeFoodType(foodType:string){
    this.foodType = foodType;
    console.log(this.foodType);
  }

  removeMeal(index:number){
    this.meal.foods?.splice(index,1)
  }

  AddFoodToMeal(id:number){
    let extractedFood = this.requestData.find(x=>x.id === id);
    console.log(extractedFood);
    let nutrients = extractedFood.nutrition.nutrients
      .filter((x:any)=>this.nutrientsTarget.includes(x.name))
      .map((x:any)=>
        new Nutrient(x.name, x.amount, x.unit)
      );
    console.log(nutrients);
    let foodDtoToAdd = new FoodDTO(extractedFood.title, extractedFood.image, this.foodType, 1, nutrients)
    this.foodList.push(
      foodDtoToAdd
    )

    this.meal.foods = this.foodList;
  }

  RegisterMeal(){

  }

}

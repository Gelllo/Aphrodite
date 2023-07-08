import { DatePipe } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { FoodService } from 'src/app/services/Food/food.service';
import { MealDTO } from '../../meal-dto';
import { FoodRecordDeleteDialogComponent } from './food-record-delete-dialog/food-record-delete-dialog.component';
import { FormControl } from '@angular/forms';
import { FoodDTO } from '../../food-dto';
import { Nutrient } from '../../nutrient';
import { debounceTime, distinctUntilChanged, filter, finalize, map, switchMap, tap } from 'rxjs';

@Component({
  selector: 'app-food-record',
  templateUrl: './food-record.component.html',
  styleUrls: ['./food-record.component.css']
})
export class FoodRecordComponent implements OnInit{
  @Input() meal : MealDTO;
  @Input() index: number;
  @Output() deleteEvent = new EventEmitter<number>();
  public editMode = false;
  public mealDate:Date;
  public productsFormControl = new FormControl();
  public recipesFormControl = new FormControl();

  public recipeSearch:string;
  public productSearch:string;
  public requestData:any[];
  public isLoading = false;
  public foodList : FoodDTO[] = [];
  public userSelectedFood = false;
  public foodType = "Recipe";
  private nutrientsTarget = ["Calories", "Fat", "Protein", "Fiber"];

  constructor(private foodService:FoodService, private datepipe: DatePipe,  public dialog: MatDialog){
  }

  ngOnInit(): void {
    this.mealDate = new Date(this.meal.dateRegistered as string);
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

  SaveMeal(){
    console.log(this.meal);
    this.foodService.UpdateMealRecord(this.meal).subscribe(
      (x:any)=>{
        console.log(x);
        this.editMode=false;
        this.foodService.savedRecord.next(true);
      },
      (error:any)=>{
        console.log(error);
      }
    )
  }

  editMealMode(){
    this.editMode = !this.editMode;
  }

  deleteRecord(){
    this.openDeleteDialog(this.meal);
  }

  openDeleteDialog(user:any): void {

    const dialogRef = this.dialog.open(FoodRecordDeleteDialogComponent, {
      data: user
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
      if(result!=null)
      {
        this.foodService.DeleteMeal(result.id).subscribe(
          (x:any)=>{
            this.deleteEvent.emit(this.index);
          },
          (error:any)=>{
            console.log(error);
          }
        )
      }
    });
  }

  removeMeal(index:number){
    this.meal.foods?.splice(index,1)
  }

  ChangeFoodType(foodType:string){
    this.foodType = foodType;
    console.log(this.foodType);
  }

  AddFoodToMeal(id:number){
    let extractedFood = this.requestData.find(x=>x.id === id);
    console.log(extractedFood);
    let nutrients = extractedFood.nutrition.nutrients
      .filter((x:any)=>this.nutrientsTarget.includes(x.name))
      .map((x:any)=>
        new Nutrient(x.name, x.amount, x.unit)
      );
    let foodDtoToAdd = new FoodDTO(extractedFood.title, extractedFood.image, this.foodType, 1, nutrients)
    if(this.meal.foods)
    {
      this.meal.foods.push(foodDtoToAdd)
    }
  }


}

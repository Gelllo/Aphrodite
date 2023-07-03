import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { FoodService } from 'src/app/services/Food/food.service';

@Component({
  selector: 'app-food-record-list',
  templateUrl: './food-record-list.component.html',
  styleUrls: ['./food-record-list.component.css']
})
export class FoodRecordListComponent {
  mealsRecords: [];
  targetDate: string;

  constructor(private foodService: FoodService, private router:Router, private route:ActivatedRoute, public dialog: MatDialog){
  };

  ngOnInit():void{
    this.route.params.subscribe(params=>{
      this.targetDate = params["date"];
      this.PopulateRecordsForDate();
    })
  }

 PopulateRecordsForDate(){
    this.foodService.GetMealsRecordsByDate(this.targetDate).subscribe(
      (x:any)=>{
        console.log(x);
        this.mealsRecords = x.mealsRecords;
      },
      (error:any)=>{

      }
    )
  }

  deleteRecord(index:any){
    console.log(event);
    this.mealsRecords.splice(index, 1);
  }
  ngOnDestroy(): void {
  }
}

import { Component } from '@angular/core';
import { FoodService } from 'src/app/services/Food/food.service';

interface RegisteredDay{
  date:Date;
  recordsCountPerDay: number;
}

@Component({
  selector: 'app-food-days',
  templateUrl: './food-days.component.html',
  styleUrls: ['./food-days.component.css']
})
export class FoodDaysComponent {
  public registeredDays : RegisteredDay[];
  public username: string;

  constructor(private _foodService:FoodService){
    this.username = localStorage.getItem("FirstName") as string;
  }

  ngOnInit(): void {
    this._foodService.savedRecord.subscribe(x=>{
      this.populateRecordDaysComponent();
    })
  }

  populateRecordDaysComponent(){
    this._foodService.GetMealsRecordsRegisteredDays().subscribe(
      (x:any)=>{
        console.log(x);
        this.registeredDays = x.registeredDays;
      },
      (error:any)=>{

      }
    )
  }
}

import { Component, OnInit } from '@angular/core';
import { GlucoseService } from 'src/app/services/Glucose/glucose.service';

interface RegisteredDay{
  date:Date;
  recordsCountPerDay: number;
}

@Component({
  selector: 'app-glucose-days',
  templateUrl: './glucose-days.component.html',
  styleUrls: ['./glucose-days.component.css']
})
export class GlucoseDaysComponent implements OnInit{

  public registeredDays : RegisteredDay[];
  public username: string;

  constructor(private _glucoseService:GlucoseService){
    this.username = localStorage.getItem("FirstName") as string;
  }

  ngOnInit(): void {
    this._glucoseService.savedRecord.subscribe(x=>{
      this.populateRecordDaysComponent();
    })
  }

  populateRecordDaysComponent(){
    this._glucoseService.GetGlucoseRecordsRegisteredDays().subscribe(
      (x:any)=>{
        console.log(x);
        this.registeredDays = x.registeredDays;
      },
      (error:any)=>{

      }
    )
  }
}

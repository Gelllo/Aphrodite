import { Component } from '@angular/core';
import { tap } from 'rxjs';
import { FoodService } from 'src/app/services/Food/food.service';
import { GlucoseService } from 'src/app/services/Glucose/glucose.service';
import { ReportsService } from 'src/app/services/Reports/reports.service';
import { DateService } from 'src/app/shared/Date/date.service';

@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.css']
})
export class ReportsComponent {

  public fromTargetDate = new Date();
  public glucoseLoading = false;
  public foodLoading = false;
  constructor(private _reportsService:ReportsService, private _glucoseService:GlucoseService, private _foodService:FoodService, private _dateService:DateService) {

  }

  GenerateGlucoseReport(){
    this._glucoseService.GetGlucoseRecordsFromTheSpecifiedDateUntilNow(this.fromTargetDate)
    .pipe(
      tap(x=>{this.glucoseLoading = true})
      ).subscribe(
      (x:any)=>{
        console.log(x);
        this._reportsService.GenerateGlucoseReport(x).subscribe((fileData: Blob) => {
          // Create a blob URL for the downloaded file
          console.log(fileData);
          const blob = new Blob([fileData], { type: fileData.type });
          const url = window.URL.createObjectURL(blob);

          // Create a link element and simulate a click to trigger the download
          this.glucoseLoading = false;
          const link = document.createElement('a');
          link.href = url;
          link.download = `${localStorage.getItem('UserID')}_${this._dateService.convertDateToFormat(new Date())}_Glucose_Report.pdf`; // Replace with the desired filename and extension
          link.click();

          // Clean up the created URL
          window.URL.revokeObjectURL(url);
        });;
      },
      (error:any)=>{
        console.log(error);
        this.glucoseLoading = false;
      }
    )
  }

  GenerateFoodReport(){
    this._foodService.GetMealsRecordsFromTheSpecifiedDateUntilNow(this.fromTargetDate)
    .pipe(
      tap(x=>{this.foodLoading = true})
      ).subscribe(
      (x:any)=>{
        console.log(x);
        this._reportsService.GenerateFoodReport(x).subscribe((fileData: Blob) => {
          // Create a blob URL for the downloaded file
          console.log(fileData);
          const blob = new Blob([fileData], { type: fileData.type });
          const url = window.URL.createObjectURL(blob);

          // Create a link element and simulate a click to trigger the download
          this.foodLoading = false;
          const link = document.createElement('a');
          link.href = url;
          link.download = `${localStorage.getItem('UserID')}_${this._dateService.convertDateToFormat(new Date())}_Food_Report.pdf`; // Replace with the desired filename and extension
          link.click();

          // Clean up the created URL
          window.URL.revokeObjectURL(url);
        });;
      },
      (error:any)=>{
        console.log(error);
        this.foodLoading = false;
      }
    )
  }
}

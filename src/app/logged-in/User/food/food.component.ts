import { Component } from '@angular/core';
import { FoodRecordCreateDialogComponent } from './food-record-list/food-record/food-record-create-dialog/food-record-create-dialog.component';
import { FoodService } from 'src/app/services/Food/food.service';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-food',
  templateUrl: './food.component.html',
  styleUrls: ['./food.component.css']
})
export class FoodComponent {

  constructor(private _foodService:FoodService, private dialog:MatDialog){

  }

  addRecord(){
    this.openCreateDialog()
  }

  openCreateDialog(): void {

    const dialogRef = this.dialog.open(FoodRecordCreateDialogComponent, {

    });

    dialogRef.afterClosed().subscribe(result => {
      if(result !=  null){
        this._foodService.AddMealRecord(result).subscribe(
          (x:any)=>{
            console.log(x);
            this._foodService.savedRecord.next(true);
          },
          (error:any)=>{
            console.log(error);
          }
        )

      }
    });
  }

}

import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Glucose } from '../../glucose';
import { DatePipe, Location } from '@angular/common';
import { GlucoseService } from 'src/app/services/Glucose/glucose.service';
import { MatDialog } from '@angular/material/dialog';
import { GlucoseRecordUpdateDialogComponent } from './glucose-record-update-dialog/glucose-record-update-dialog.component';
import { GlucoseRecordDeleteDialogComponent } from './glucose-record-delete-dialog/glucose-record-delete-dialog.component';

@Component({
  selector: 'app-glucose-record',
  templateUrl: './glucose-record.component.html',
  styleUrls: ['./glucose-record.component.css']
})
export class GlucoseRecordComponent implements OnInit{
  @Input() glucoseRecord:Glucose;
  @Input() index: number;
  @Output() deleteEvent = new EventEmitter<number>();

  color:string;

  constructor(private glucoseService:GlucoseService,private location: Location, private datepipe: DatePipe,  public dialog: MatDialog){
  }

  ngOnInit(): void {
    if(this.glucoseRecord.glucoseLevel<=60)
    {
      this.color = 'warn';
    }
    else if(this.glucoseRecord.glucoseLevel <=80){
      this.color = 'accent';
    }
    else if(this.glucoseRecord.glucoseLevel <=140){
      this.color = 'primary';
    }
    else if(this.glucoseRecord.glucoseLevel <=160){
      this.color = 'accent';
    }
    else if(this.glucoseRecord.glucoseLevel <=180){
      this.color = 'warn'
    }
  }

  updateRecord(){
    this.openUpdateDialog(this.glucoseRecord);
  }

  deleteRecord(){
    this.openDeleteDialog(this.glucoseRecord);
  }

  openUpdateDialog(record:any): void {
    console.log(record);
    const dialogRef = this.dialog.open(GlucoseRecordUpdateDialogComponent, {
      data: record
    });

    dialogRef.afterClosed().subscribe(result => {
      if(result != null){
        this.glucoseService.updateGlucoseRecord(result).subscribe(
          (x:any)=>{
            console.log(x);
            this.glucoseRecord = result;
            this.glucoseService.savedRecord.next(true);
          },
          (error:any)=>{
            console.log(error);
          }
        )
      }
    });
  }

  openDeleteDialog(user:any): void {

    const dialogRef = this.dialog.open(GlucoseRecordDeleteDialogComponent, {
      data: user
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
      if(result!=null)
      {
        this.glucoseService.deleteGlucose(result.id).subscribe(
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


}

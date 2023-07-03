import { Component, EventEmitter } from '@angular/core';
import { Glucose } from '../glucose';
import { Subject, Subscription } from 'rxjs';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { GlucoseService } from '../../../../services/Glucose/glucose.service';
import { GlucoseRecordCreateDialogComponent } from './glucose-record/glucose-record-create-dialog/glucose-record-create-dialog.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-glucose-record-list',
  templateUrl: './glucose-record-list.component.html',
  styleUrls: ['./glucose-record-list.component.css']
})

export class GlucoseRecordListComponent {
  glucoseRecords: Glucose[];
  targetDate: string;

  constructor(private glucoseService: GlucoseService, private router:Router, private route:ActivatedRoute, public dialog: MatDialog){
  };

  ngOnInit():void{
    this.route.params.subscribe(params=>{
      this.targetDate = params["date"];
      this.PopulateRecordsForDate();
    })
  }

 PopulateRecordsForDate(){
    this.glucoseService.GetGlucoseRecordsByDate(this.targetDate).subscribe(
      (x:any)=>{
        this.glucoseRecords = x.glucoseRecords;
      },
      (error:any)=>{

      }
    )
  }

  deleteRecord(index:any){
    console.log(event);
    this.glucoseRecords.splice(index, 1);
  }
  ngOnDestroy(): void {
  }
}

import { Component, EventEmitter } from '@angular/core';
import { Glucose } from '../glucose';
import { Subject, Subscription } from 'rxjs';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { GlucoseService } from '../glucose.service';

@Component({
  selector: 'app-glucose-record-list',
  templateUrl: './glucose-record-list.component.html',
  styleUrls: ['./glucose-record-list.component.css']
})

export class GlucoseRecordListComponent {
  glucoseRecords: Glucose[];
  subscription: Subscription;
  targetDate: Date;

  constructor(private glucoseService: GlucoseService, private router:Router, private route:ActivatedRoute){
  };

  ngOnInit():void{
    this.subscription = this.glucoseService.glucoseRecordsChanged.subscribe(
      (glucoseRecords:Glucose[]) =>{
       this.glucoseRecords = glucoseRecords
      }
    )

    this.route.params.subscribe((params: Params) =>{
      this.targetDate = new Date(params["date"]);
      this.glucoseRecords = this.glucoseService.getGlucoseRecordsByDate(this.targetDate)
    })

    this.glucoseRecords = this.glucoseService.getGlucoseRecordsByDate(this.targetDate);
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  onNewRecord(){
    this.router.navigate(['new'], {relativeTo:this.route})
  }
}

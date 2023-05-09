import { EventEmitter, Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Glucose } from './glucose';

@Injectable({
  providedIn: 'root'
})
export class GlucoseService {

  constructor() { }

  glucoseRecordsChanged = new Subject<Glucose[]>();

  private glucoseRecords: Glucose[] = [
    new Glucose(100, new Date(2000, 3, 3), 'green'),
    new Glucose(150, new Date(2000, 3, 3), 'yellow'),
    new Glucose(120, new Date(2000, 3, 4), 'green'),
    new Glucose(180, new Date(2000, 3, 4), 'red'),
    new Glucose(200, new Date(2000, 3, 5), 'red')
  ]

  getGlucoseRecords(){
    return this.glucoseRecords.slice();
  }

  getGlucoseRecordsByDate(targetDate: Date){
    //console.log(targetDate);
    return this.glucoseRecords.filter(function(glucose){
      return glucose.dateRecorded.toDateString() === targetDate.toDateString();
    }
    ).slice();
  }

  getGlucoseRecord(index: number){
    return this.glucoseRecords[index];
  }

  addGlucoseRecord(glucose: Glucose){
    this.glucoseRecords.push(glucose);
    this.glucoseRecordsChanged.next(this.glucoseRecords.slice());
  }

  updateGlucoseRecord(index: number, newGlucoseRecord: Glucose){
    this.glucoseRecords[index] = newGlucoseRecord;
    this.glucoseRecordsChanged.next(this.glucoseRecords.slice());
  }

  deleteGlucose(index: number){
    this.glucoseRecords.splice(index, 1);
    this.glucoseRecordsChanged.next(this.glucoseRecords.slice());
  }

}

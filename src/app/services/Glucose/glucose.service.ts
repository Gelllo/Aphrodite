import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, ReplaySubject} from 'rxjs';
import { Glucose } from '../../logged-in/User/glucose/glucose';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { UpdateGlucoseRequest } from 'src/app/logged-in/User/glucose/update-glucose-request';
import { CreateGlucoseRecordRequest } from 'src/app/logged-in/User/glucose/create-glucose-record-request';
import { DateService } from 'src/app/shared/Date/date.service';

@Injectable({
  providedIn: 'root'
})
export class GlucoseService {
  private header = new HttpHeaders().set('Content-type', 'application/json');
  private path = 'https://localhost:7164/glucoserecords/'
  public savedRecord = new BehaviorSubject<boolean>(true);

  constructor(private httpClient:HttpClient, private _dateService:DateService) { }

  GetGlucoseRecordsForCharts():Observable<any>{
    return this.httpClient.get(this.path + `charts/${localStorage.getItem("UserID")}`, {headers: this.header, withCredentials:true});
  }

  GetGlucoseRecordsFromTheSpecifiedDateUntilNow(date: Date):Observable<any>{
    return this.httpClient.get(this.path + `fromDateUntilNow/${localStorage.getItem("UserID")}/${this._dateService.convertDateToFormat(date)}`, {headers: this.header, withCredentials:true});
  }

  GetGlucoseRecordsRegisteredDays():Observable<any>{
    return this.httpClient.get(this.path + `registereddays/${localStorage.getItem("UserID")}`, {headers: this.header, withCredentials:true});
  }

  GetGlucoseRecordsByDate(targetDate: string){
    return this.httpClient.get(this.path + `${localStorage.getItem("UserID")}/${targetDate}`, {headers: this.header, withCredentials:true});
  }

  getGlucoseRecord(id: number){
    return this.httpClient.get(this.path + `${id}`, {headers: this.header, withCredentials:true});
  }

  addGlucoseRecord(glucoseRecord: Glucose){
    let createReq = new CreateGlucoseRecordRequest(glucoseRecord.glucoseLevel, this._dateService.convertDateToFormat(new Date(glucoseRecord.dateRegistered)), glucoseRecord.userId, glucoseRecord.registeredAfter)
    return this.httpClient.post(this.path , JSON.stringify(createReq), {headers: this.header, withCredentials:true});
  }

  updateGlucoseRecord(newGlucoseRecord: Glucose){
    console.log(newGlucoseRecord);
    let req = new UpdateGlucoseRequest(
      newGlucoseRecord.id,
       newGlucoseRecord.glucoseLevel,
        this._dateService.convertDateToFormat(new Date(newGlucoseRecord.dateRegistered)),
         newGlucoseRecord.userId, newGlucoseRecord.registeredAfter);
      console.log(req);
    return this.httpClient.put(this.path + newGlucoseRecord.id, JSON.stringify(req), {headers: this.header, withCredentials:true});
  }

  deleteGlucose(id: number){
    return this.httpClient.delete(this.path + id, {headers: this.header, withCredentials:true});
  }
}

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

  private path = 'https://localhost:7164/glucoserecords/'
  public savedRecord = new BehaviorSubject<boolean>(true);

  constructor(private httpClient:HttpClient, private _dateService:DateService) { }

  GetGlucoseRecordsForCharts():Observable<any>{
    const header = new HttpHeaders().set('Content-type', 'application/json');
    return this.httpClient.get(this.path + `charts/${localStorage.getItem("UserID")}`, {headers: header, withCredentials:true});
  }

  GetGlucoseRecordsFromTheSpecifiedDateUntilNow(date: Date):Observable<any>{
    const header = new HttpHeaders().set('Content-type', 'application/json');
    return this.httpClient.get(this.path + `fromDateUntilNow/${localStorage.getItem("UserID")}/${this._dateService.convertDateToFormat(date)}`, {headers: header, withCredentials:true});
  }

  GetGlucoseRecordsRegisteredDays():Observable<any>{
    const header = new HttpHeaders().set('Content-type', 'application/json');
    return this.httpClient.get(this.path + `registereddays/${localStorage.getItem("UserID")}`, {headers: header, withCredentials:true});
  }

  GetGlucoseRecordsByDate(targetDate: string){
    const header = new HttpHeaders().set('Content-type', 'application/json');
    return this.httpClient.get(this.path + `${localStorage.getItem("UserID")}/${targetDate}`, {headers: header, withCredentials:true});
  }

  getGlucoseRecord(id: number){
    const header = new HttpHeaders().set('Content-type', 'application/json');
    return this.httpClient.get(this.path + `${id}`, {headers: header, withCredentials:true});
  }

  addGlucoseRecord(glucoseRecord: Glucose){
    let createReq = new CreateGlucoseRecordRequest(glucoseRecord.glucoseLevel, this._dateService.convertDateToFormat(new Date(glucoseRecord.dateRegistered)), glucoseRecord.userId, glucoseRecord.registeredAfter)
    const header = new HttpHeaders().set('Content-type', 'application/json');
    return this.httpClient.post(this.path , JSON.stringify(createReq), {headers: header, withCredentials:true});
  }

  updateGlucoseRecord(newGlucoseRecord: Glucose){
    console.log(newGlucoseRecord);
    let req = new UpdateGlucoseRequest(
      newGlucoseRecord.id,
       newGlucoseRecord.glucoseLevel,
        this._dateService.convertDateToFormat(new Date(newGlucoseRecord.dateRegistered)),
         newGlucoseRecord.userId, newGlucoseRecord.registeredAfter);
      console.log(req);
         const header = new HttpHeaders().set('Content-type', 'application/json');
    return this.httpClient.put(this.path + newGlucoseRecord.id, JSON.stringify(req), {headers: header, withCredentials:true});
  }

  deleteGlucose(id: number){
    const header = new HttpHeaders().set('Content-type', 'application/json');
    return this.httpClient.delete(this.path + id, {headers: header, withCredentials:true});
  }
}

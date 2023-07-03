import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReportsService {

  private path = 'https://localhost:7186/reports/';
  private header = new HttpHeaders().set('Content-type', 'application/json');

  constructor(private httpClient:HttpClient) { }

  GenerateGlucoseReport(data:any):Observable<any>{
    data.firstName = localStorage.getItem('FirstName');
    data.lastName = localStorage.getItem('LastName');
    return this.httpClient.post(this.path + `glucose/${localStorage.getItem("UserID")}`, JSON.stringify(data), {headers: this.header, withCredentials:true, responseType:'blob'});
  }

  GenerateFoodReport(data:any):Observable<any>{
    data.firstName = localStorage.getItem('FirstName');
    data.lastName = localStorage.getItem('LastName');
    return this.httpClient.post(this.path + `food/${localStorage.getItem("UserID")}`, JSON.stringify(data), {headers: this.header, withCredentials:true, responseType:'blob'});
  }
}

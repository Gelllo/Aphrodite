import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SortDirection } from '@angular/material/sort';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private path = "https://localhost:7076/users/";
  public userInfoChanged = new BehaviorSubject(true);

  constructor(private httpClient: HttpClient) {
  }

  GetUser(UserId: string | null): Observable<any>{
    const header = new HttpHeaders().set('Content-type', 'application/json');
    return this.httpClient.get(this.path + `${UserId}`,{headers: header, withCredentials:true});
  }

  GetUsers(sort: string, order:SortDirection, page:number): Observable<any>{
    const header = new HttpHeaders().set('Content-type', 'application/json');
    return this.httpClient.get(this.path + `?sort=${sort}&order=${order}&page=${page}`, {headers: header, withCredentials:true});
  }

  GetMyPatients(): Observable<any>{
    const header = new HttpHeaders().set('Content-type', 'application/json');
    return this.httpClient.get(this.path + 'mypatients/' + localStorage.getItem("UserID"), {headers: header, withCredentials:true});
  }

  AddPatient = (patientEmail: any) =>{
    let req = {PatientEmail: patientEmail, MedicUsername: ''}
    const header = new HttpHeaders().set('Content-type', 'application/json');
    return this.httpClient.put(this.path + `mypatients/${localStorage.getItem("UserID")}`, JSON.stringify(req), {headers: header, withCredentials:true});
  }

  DeletePatient(patientUsername:string):Observable<any>{
    const header = new HttpHeaders().set('Content-type', 'application/json');
    return this.httpClient.delete(this.path + `mypatients/${localStorage.getItem("UserID")}/${patientUsername}` ,{headers: header, withCredentials:true});
  }

  AddUser = (userModel: any) =>{
    const header = new HttpHeaders().set('Content-type', 'application/json');
    return this.httpClient.post(this.path, JSON.stringify(userModel), {headers: header, withCredentials:true});
  }

  UpdateMyProfile = (userModel: any) =>{
    const header = new HttpHeaders().set('Content-type', 'application/json');
    return this.httpClient.put(this.path + localStorage.getItem("UserID"), JSON.stringify(userModel), {headers: header, withCredentials:true});
  }

  UpdateUser = (userModel: any) =>{
    const header = new HttpHeaders().set('Content-type', 'application/json');
    return this.httpClient.put(this.path, JSON.stringify(userModel), {headers: header, withCredentials:true});
  }

  DeleteUser = (Id: number | null) =>{
    console.log("HERE");
    const header = new HttpHeaders().set('Content-type', 'application/json');
    return this.httpClient.delete(this.path + `${Id}`,{headers: header, withCredentials:true});
  }
}

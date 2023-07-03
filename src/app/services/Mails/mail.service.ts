import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { MailRequest } from 'src/app/logged-in/User/mails/mail-request';

@Injectable({
  providedIn: 'root'
})
export class MailService {

  private path = 'https://localhost:7078/'
  public savedRecord = new BehaviorSubject<boolean>(true);

  constructor(private httpClient:HttpClient) { }

  AddMailTemplate(mailTemplate:any):Observable<any>{
    const header = new HttpHeaders().set('Content-type', 'application/json');
    return this.httpClient.post(this.path + `mailtemplates/${localStorage.getItem("UserID")}`,JSON.stringify({mailTemplate : mailTemplate}), {headers: header, withCredentials:true});
  }

  DeleteMailTemplate(mailId:number):Observable<any>{
    const header = new HttpHeaders().set('Content-type', 'application/json');
    return this.httpClient.delete(this.path + `mailtemplates/${mailId}`, {headers: header, withCredentials:true});
  }

  UpdateMailTemplate(mailTemplate:any):Observable<any>{
    const header = new HttpHeaders().set('Content-type', 'application/json');
    return this.httpClient.put(this.path + `mailtemplates/${localStorage.getItem("UserID")}`, JSON.stringify({mailTemplate:mailTemplate}), {headers: header, withCredentials:true});
  }

  GetMailTemplates():Observable<any>{
    const header = new HttpHeaders().set('Content-type', 'application/json');
    return this.httpClient.get(this.path + `mailtemplates/${localStorage.getItem("UserID")}`, {headers: header, withCredentials:true});
  }

  AddMailRequest(mailRequest:MailRequest):Observable<any>{
    const header = new HttpHeaders().set('Content-type', 'application/json');
    return this.httpClient.post(this.path + `mailrequests`, JSON.stringify({mailRequest:mailRequest}),{headers: header, withCredentials:true});
  }

  DeleteMailRequest(mailId:number):Observable<any>{
    const header = new HttpHeaders().set('Content-type', 'application/json');
    return this.httpClient.delete(this.path + `mailrequests/${mailId}`,{headers: header, withCredentials:true});
  }

  UpdateMailRequest(mailRequest:any):Observable<any>{
    const header = new HttpHeaders().set('Content-type', 'application/json');
    return this.httpClient.put(this.path + `mailrequests/${localStorage.getItem("UserID")}`, JSON.stringify({mailRequest:mailRequest}), {headers: header, withCredentials:true});
  }

  GetMailRequestsForPatient():Observable<any>{
    const header = new HttpHeaders().set('Content-type', 'application/json');
    return this.httpClient.get(this.path + `mailrequests/patient/${localStorage.getItem("UserID")}`, {headers: header, withCredentials:true});
  }

  GetMailRequestsForMedic():Observable<any>{
    const header = new HttpHeaders().set('Content-type', 'application/json');
    return this.httpClient.get(this.path + `mailrequests/medic/${localStorage.getItem("UserID")}`, {headers: header, withCredentials:true});
  }

  SendMail(formData:FormData):Observable<any>{
    console.log(formData);
    return this.httpClient.post(this.path + `sendmail/${localStorage.getItem("UserID")}`, formData ,{withCredentials:true});
  }

  SendResetPasswordMail(email:string, token:string){
    const header = new HttpHeaders().set('Content-type', 'application/json');
    return this.httpClient.post(this.path + `passwordreset`,JSON.stringify({email:email, token:token}),{headers:header, withCredentials:true});
  }


}

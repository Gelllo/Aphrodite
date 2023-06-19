import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private path = "https://localhost:7164/";

  constructor(private httpClient: HttpClient) { }

  public signOutExternal = () =>{
    localStorage.removeItem("token");
    console.log("token deleted");
  }

  LoginWithGoogle(credentials: string): Observable<any> {
    const header = new HttpHeaders().set('Content-type', 'application/json');
    return this.httpClient.post(this.path + "LoginWithGoogle", JSON.stringify(credentials), {headers: header});
  }

  LoginWithFacebook(credentials: string): Observable<any> {
    const header = new HttpHeaders().set('Content-type', 'application/json');
    return this.httpClient.post(this.path + "LoginWithFacebook", JSON.stringify(credentials), { headers: header, withCredentials: true });
  }
}

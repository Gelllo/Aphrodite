import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, ReplaySubject, retry } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { InternalLoginRequest } from '../presentation/login/internal-login-request';
import { InternalRegisterRequest } from '../presentation/register/internal-register-request';
import { SpinnerService } from './spinner.service';
import { Route, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private path = "https://localhost:7076/";
  public registeredSuccessful = false;
  public authenticationState = new ReplaySubject();
  public localStorageChanged = new ReplaySubject();

  constructor(private httpClient: HttpClient, public spinnerService:SpinnerService, private router:Router) {

    this.authenticationState.subscribe((state)=>{
        if(state != null){

        }
        if(state)
        {
          this.router.navigate(['/logged-in'])
          this.RefreshToken();
          setInterval(() =>{
            this.RefreshToken();
          },840000)
        }
        else{
          this.router.navigate(['/presentation/login'])
        }
      }
    )
  }

  DeleteUserInfo(){
    localStorage.removeItem("UserID");
    localStorage.removeItem("FirstName");
    localStorage.removeItem("LastName");
    localStorage.removeItem("Email");
    localStorage.removeItem("Role");
}

  SetUserInfo(data: any){
    console.log(data);
    localStorage.setItem("UserID", data.userID);
    localStorage.setItem("FirstName", data.firstName);
    localStorage.setItem("LastName", data.lastName);
    localStorage.setItem("Email", data.email);
    localStorage.setItem("Role", data.role);
  }

  SignOut = () =>{
    let req = {UserID: localStorage.getItem("UserID")}
    const header = new HttpHeaders().set('Content-type', 'application/json');
    return this.httpClient.post(this.path + "authentication/Logout",JSON.stringify(req), {headers: header, withCredentials:true});
  }

  RefreshToken = async () => {
    let req = {};
    const header = new HttpHeaders().set('Content-type', 'application/json');
    await this.httpClient.post(this.path + "authentication/refreshToken", req, {headers: header, withCredentials:true}).toPromise();
  }

  LoginWithGoogle(credentials: string, userExists:boolean): Observable<any> {
    let req = {Credentials: credentials, UserIsRegistered: userExists};
    const header = new HttpHeaders().set('Content-type', 'application/json');
    return this.httpClient.post(this.path + "authentication/GoogleLogin", req, {headers: header, withCredentials:true});
  }

  LoginWithFacebook(credentials: string, userExists: boolean): Observable<any> {
    let req = {Credentials : credentials, UserIsRegistered: userExists}
    const header = new HttpHeaders().set('Content-type', 'application/json');
    return this.httpClient.post(this.path + "authentication/FacebookLogin", JSON.stringify(req), { headers: header, withCredentials: true });
  }

  Login(loginModel: InternalLoginRequest):Observable<any>{
    const header = new HttpHeaders().set('Content-type', 'application/json');
    return this.httpClient.post(this.path + 'authentication/login', JSON.stringify(loginModel),{headers:header, withCredentials:true});
  }

  Register(registerModel:InternalRegisterRequest): Observable<any>{
    const header = new HttpHeaders().set('Content-type', 'application/json');
    return this.httpClient.post(this.path + 'authentication/register', JSON.stringify(registerModel), {headers:header, withCredentials:true});
  }

  ForgotPassword(email:string):Observable<any>{
    const header = new HttpHeaders().set('Content-type', 'application/json');
    return this.httpClient.post(this.path + 'authentication/forgotpassword', JSON.stringify({email:email}), {headers:header, withCredentials:true});
  }

  ResetPassword(resetReq:any):Observable<any>{
    const header = new HttpHeaders().set('Content-type', 'application/json');
    return this.httpClient.post(this.path + 'authentication/resetpassword', JSON.stringify(resetReq), {headers:header, withCredentials:true});
  }
}

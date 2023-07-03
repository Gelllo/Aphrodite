import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { ActivatedRoute, Router } from '@angular/router';
import { InternalRegisterRequest } from './internal-register-request';
import { CredentialResponse } from 'google-one-tap';
import { SpinnerService } from 'src/app/services/spinner.service';

declare const FB:any;

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit{

  @ViewChild('googleButton') gbutton: ElementRef = new ElementRef({});

  public Roles: string[] = ['USER', 'MEDIC'];
  hide1 = true;
  hide2 = true;
  public loginValid = true;
  public loginForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    email: new FormControl(''),
    username: new FormControl(''),
    password: new FormControl(''),
    confirmPassword: new FormControl(''),
    role: new FormControl('')
  });

  constructor(private _authService: AuthService, private router:Router, private route:ActivatedRoute, public spinnerService:SpinnerService){}

  ngOnInit(): void {
    //@ts-ignore
      // @ts-ignore

      google.accounts.id.initialize({
        client_id: '795323273546-d3a7d3sfth0lpf5aqt6ih96s1t5b8o16.apps.googleusercontent.com',
        callback: this.handleGoogleCredentialResponse.bind(this),
        auto_select: false,
        cancel_on_tap_outside:true
      })

      //@ts-ignore
      window.google.accounts.id.renderButton(
        // @ts-ignore
        document.getElementById("googleButton"),
        {
          type: "icon",
          theme: "filled_blue",
          size: "large",
          text: "",
          shape: "pill"
        }
      )
      // @ts-ignore
      google.accounts.id.prompt((notification: PromptMomentNotification) => {})

}

async handleGoogleCredentialResponse(response: CredentialResponse){
  await this._authService.LoginWithGoogle(response.credential, false).subscribe(
    (x:any)=>{
      localStorage.setItem("token", x.token);
      this._authService.registeredSuccessful = true;
      this.router.navigate(['../login'],{relativeTo: this.route});
    },
    (error:any)=>{
      console.log(error);
    }
  )
}

async facebookRegister(){
  FB.login(async (result:any) => {
    console.log(result);
    await this._authService.LoginWithFacebook(result.authResponse.accessToken, false).subscribe(
      (x:any) =>{
        this._authService.registeredSuccessful = true;
        this.router.navigate(['../login'],{relativeTo: this.route});
      },
      (error:any) => {
        console.log(error);
      }
    );
  }, {scope: 'public_profile,email'})
};

  async InternalRegister(){
    const registerRequest = new InternalRegisterRequest(
      this.loginForm.value['firstName'] as string,
      this.loginForm.value['lastName'] as string,
      this.loginForm.value['email'] as string,
      this.loginForm.value['username'] as string,
      this.loginForm.value['password'] as string,
      this.loginForm.value['confirmPassword'] as string,
      this.loginForm.value['role'] as string,
    );

      await this._authService.Register(registerRequest).subscribe(
        (x:any)=>{
          this._authService.registeredSuccessful = true;
          this.router.navigate(['../login'],{relativeTo: this.route});
        },
        (error:any)=>{
          console.log(error);
        }
        )
      }
}

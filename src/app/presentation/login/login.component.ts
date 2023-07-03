import { Component, OnDestroy, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { CredentialResponse, PromptMomentNotification } from 'google-one-tap';
import { FormControl, FormGroup } from '@angular/forms';
import { InternalLoginRequest } from './internal-login-request';
import { Subscription, delay } from 'rxjs';
import { SpinnerService } from 'src/app/services/spinner.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { HttpResponse } from '@angular/common/http';
import { MatDialog } from '@angular/material/dialog';
import { ForgotPasswordDialogComponent } from './forgot-password-dialog/forgot-password-dialog.component';
import { MailService } from 'src/app/services/Mails/mail.service';

declare const FB: any;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit{

  hide = true;
  public loginValid = true;
  public loginForm = new FormGroup({
    username: new FormControl(''),
    password: new FormControl('')
  });

  constructor(private _authService: AuthService,
     private router:Router,
      public spinnerService:SpinnerService,
       private snackBar:MatSnackBar,
        private dialog:MatDialog,
         private _mailService:MailService){}

  ngOnInit(): void {

      // @ts-ignore
        if(this._authService.registeredSuccessful)
        {
          this.snackBar.open("You have been registered successfully", "Ok");
          this._authService.registeredSuccessful = false;
        }

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
    this._authService.LoginWithGoogle(response.credential, true).subscribe(
      (x:any)=>{
        this._authService.SetUserInfo(x);
        this._authService.authenticationState.next(true);
      },
      (error:any)=>{
        this.loginValid = false;
        console.log(error);
      }
    )
  }

  async facebookLogin(){
    FB.login(async (result:any) => {
      console.log(result);
      this._authService.LoginWithFacebook(result.authResponse.accessToken, true).subscribe(
        (x:any) =>{
          this._authService.SetUserInfo(x);
          this._authService.authenticationState.next(true);
        },
        (error:any) => {
          this.loginValid = false;
          console.log(error);
        }
      );
    }, {scope: 'public_profile,email'})
  };

  async internalLogin(){

    const loginRequest = new InternalLoginRequest(
      this.loginForm.value['username'] as string,
      this.loginForm.value['password'] as string
    );

    this._authService.Login(loginRequest).subscribe(
      (x:any)=>{
        this._authService.SetUserInfo(x);
        this._authService.authenticationState.next(true);
      },
      (error: any)=>{
        this.loginValid = false;
        console.log(error);
      });
  }

  OpenForgotPasswordDialog(){
    this.openForgotPassowrdDialog();
  }

  openForgotPassowrdDialog(): void {

    const dialogRef = this.dialog.open(ForgotPasswordDialogComponent, {
      data: ''
    });

    dialogRef.afterClosed().subscribe(result => {
      if(result != null){
        this._authService.ForgotPassword(result).subscribe(
          (x:any)=>{
            console.log(x);
            this._mailService.SendResetPasswordMail(x.email, x.token).subscribe(
              (x:any)=>{
                console.log(x);
              },
              (error:any)=>{
                console.log(error);
              }
            );
          },
          (error:any)=>{
            console.log(error);
          }
        )

      }
    });
  }
}


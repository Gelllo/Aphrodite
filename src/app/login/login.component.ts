import { Component, OnDestroy, OnInit } from '@angular/core';
import { AuthService } from './auth.service';
import { ActivatedRoute, Router } from '@angular/router';
import { CredentialResponse, PromptMomentNotification } from 'google-one-tap';

declare const FB: any;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{

  public loginValid = true;
  public username = '';
  public password = '';
  private readonly returnUrl: string;

  constructor(private _authService: AuthService, private router:Router){}

  ngOnInit(): void {
    // @ts-ignore
    window.onGoogleLibraryLoad = () =>{
      // @ts-ignore
      google.accounts.id.initialize({
        client_id: '',
        callback: this.handleCredentialResponse.bind(this),
        auto_select: false,
        cancel_on_tap_outside:true
      })

      //@ts-ignore
      google.accounts.id.renderButton(
        // @ts-ignore
        document.getElementById("buttonDiv"),
        {theme: "outline", size: "large", width:"100%"}
      )
      // @ts-ignore
      google.accounts.id.prompt((notification: PromptMomentNotification) => {})
    }
  }

  async handleCredentialResponse(response: CredentialResponse){
    await this._authService.LoginWithGoogle(response.credential).subscribe(
      (x:any)=>{
        localStorage.setItem("token", x.token);
        //this.router.navigate(['/loggedin'])
      },
      (error:any)=>{
        console.log(error);
      }
    )
  }

  async facebookLogin(){
    FB.login(async (result:any) => {
      console.log(result);
      await this._authService.LoginWithFacebook(result.authResponse.accessToken).subscribe(
        (x:any) =>{
          console.log(x);
        },
        (error:any) => {
          console.log(error);
        }
      );
    }, {scope: 'public_profile,email'})
  };

  async internalLogin(){

  }
}


import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent {
  hide1 = true;
  hide2 = true;
  private token:string;
  public loginValid = true;
  public loginForm = new FormGroup({
    password: new FormControl(''),
    confirmPassword: new FormControl(''),
  });

  constructor(private _authService:AuthService, private acRoute:ActivatedRoute, private route:Router){
    this.acRoute.queryParams.subscribe(params=>{
      this.token = params['token'];
    })
  }

  ResetPassword(){
    const resetRequest = {
      password: this.loginForm.value['password'] as string,
      confirmPassword: this.loginForm.value['confirmPassword'] as string,
      token: this.token
    }

    console.log(resetRequest);

    this._authService.ResetPassword(resetRequest).subscribe(
      (x:any)=>{
        console.log(x);
        this.route.navigate(['../login'],{relativeTo: this.acRoute});
      },
      (error:any)=>{
        console.log(error);
      }
    )
  }
}

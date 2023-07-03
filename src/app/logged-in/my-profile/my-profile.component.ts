import { AfterViewInit, Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { UsersService } from 'src/app/services/Users/users.service';
import { UpdateUserProfileRequest } from './update-user-profile-request';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-my-profile',
  templateUrl: './my-profile.component.html',
  styleUrls: ['./my-profile.component.css']
})
export class MyProfileComponent implements AfterViewInit{

  public Roles: string[] = ['ADMIN', 'USER', 'MEDIC'];
  public editEnabled = false;
  public myProfileValid = true;
  public myProfileForm = new FormGroup({
    firstName: new FormControl({value:'', disabled:true}),
    lastName: new FormControl({value: '', disabled:true}),
    email: new FormControl({value: '', disabled:true}),
    username: new FormControl({value: '', disabled:true}),
    role: new FormControl({value: '', disabled:true})
  });

  constructor(private _userService:UsersService, private _snackBar:MatSnackBar){}

  ngAfterViewInit(): void {
    this._userService.GetUser(localStorage.getItem("UserID")).subscribe(data=>{
      this.myProfileForm.patchValue({
        firstName:data.user.firstName,
        lastName:data.user.lastName,
        email:data.user.email,
        username:data.user.userID,
        role:data.user.role
      })
    });
  }

  editProfile(){
    if(!this.editEnabled){
      this.myProfileForm.controls.email.enable();
      this.myProfileForm.controls.firstName.enable();
      this.myProfileForm.controls.lastName.enable();

      this.editEnabled = true;
    }
    else{
      this.myProfileForm.controls.email.disable();
      this.myProfileForm.controls.firstName.disable();
      this.myProfileForm.controls.lastName.disable();

      this.editEnabled = false;
    }
  }

  saveProfile(){
    let req = new UpdateUserProfileRequest(
      localStorage.getItem("UserID") as string,
      this.myProfileForm.controls.lastName.value as string,
      this.myProfileForm.controls.firstName.value as string,
      this.myProfileForm.controls.email.value as string
      )
    this._userService.UpdateMyProfile(req).subscribe(
      (x:any)=>{
        console.log(x);
        localStorage.setItem("FirstName", req.FirstName);
        localStorage.setItem("LastName", req.LastName);
        localStorage.setItem("Email", req.Email);
        this._userService.userInfoChanged.next(true);
        this.openSnackBar();
      }
      ,(error:any)=>{

      })
  }

  openSnackBar(){
    this._snackBar.open("Your user profile has been updated", "Ok");
  }
}

import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/services/Users/users.service';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit{
  public firstName: string;
  public lastName: string;
  public role : string;

  constructor(private _authService: AuthService, private _userService:UsersService){}

  ngOnInit(): void {
    this._userService.userInfoChanged.subscribe(x=>{
      this.firstName = localStorage.getItem("FirstName") as string;
      this.lastName = localStorage.getItem("LastName") as string;
      this.role = localStorage.getItem("Role") as string;
    })
  }

  async signOut(){
    this._authService.SignOut().subscribe(
      (x:any)=>{
        this._authService.DeleteUserInfo();
        this._authService.authenticationState.next(false);
      },
      (error:any)=>{
        console.log(error);
      }
    )
  }


}

export class InternalLoginRequest {
  UserName: string;
  Password: string;

  constructor(Username:string, Password:string){
    this.UserName = Username;
    this.Password = Password;
  }
}

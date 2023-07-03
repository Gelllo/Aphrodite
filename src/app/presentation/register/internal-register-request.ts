export class InternalRegisterRequest {
  FirstName: string;
  LastName: string;
  Email: string;
  UserID: string;
  Password: string;
  ConfirmPassword: string;
  Role: string;

  constructor(FirstName:string, LastName:string, Email:string, Username:string, Password:string, ConfirmPassword: string, Role:string){
    this.FirstName = FirstName;
    this.LastName = LastName;
    this.Email = Email;
    this.UserID = Username;
    this.Password = Password;
    this.ConfirmPassword = ConfirmPassword;
    this.Role = Role;
  }
}

export class UpdateUserProfileRequest {
  UserID:string | null;
  LastName:string;
  FirstName:string;
  Email:string;

  constructor(userID:string | null, lastName:string, firstName:string, email:string){
    this.UserID = userID;
    this.LastName = lastName;
    this.FirstName = firstName;
    this.Email = email;
  }
}

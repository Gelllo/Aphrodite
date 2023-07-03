import { Component, EventEmitter, Input, Output } from '@angular/core';
import { User } from '../../../Admin/users/users.component';
import { UsersService } from 'src/app/services/Users/users.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MailRequest } from 'src/app/logged-in/User/mails/mail-request';
import { DateService } from 'src/app/shared/Date/date.service';
import { MailService } from 'src/app/services/Mails/mail.service';

@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.css']
})
export class PatientComponent {

  @Input() patient:User;
  @Input() index: number;
  @Output() deleteEvent = new EventEmitter<number>();

  constructor(private _userService:UsersService, private _dateService:DateService, private _mailService:MailService, private snackBar:MatSnackBar){

  }

  DeletePatientFromList(){
    this._userService.DeletePatient(this.patient.userID).subscribe(
      (x:any)=>{
        console.log(x);
        this.deleteEvent.emit(this.index);
        this.snackBar.open("Patient has been deleted from the list", "Ok")
      },
      (error:any)=>{
        console.log(error);
      }
    )
  }

  RequestReport(reportRequested: string){
    let req =  new MailRequest(
      0,
      localStorage.getItem("UserID") as string,
      this.patient.userID,
      this._dateService.convertDateToFormat(new Date()),
      'PENDING',
      reportRequested);

    this._mailService.AddMailRequest(req).subscribe(
      (x:any)=>{
        console.log(x);
        this.snackBar.open("Report requested to the patient", "Ok")
      },
      (error:any)=>{

      }
    )
  }
}

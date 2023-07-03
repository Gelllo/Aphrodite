import { Component, OnInit } from '@angular/core';
import { MailRequest } from '../User/mails/mail-request';
import { MailService } from 'src/app/services/Mails/mail.service';

@Component({
  selector: 'app-report-notifications',
  templateUrl: './report-notifications.component.html',
  styleUrls: ['./report-notifications.component.css']
})
export class ReportNotificationsComponent implements OnInit{
  public mailRequests: MailRequest[];
  public userRole:string;

  constructor(private _mailService:MailService){
    this.mailRequests = [];
    this.userRole = localStorage.getItem('Role') as string;
  }
  ngOnInit(): void {

    if(this.userRole === "MEDIC"){
      this._mailService.GetMailRequestsForMedic().subscribe(
        (x:any)=>{
          console.log(x);
          this.mailRequests = x.mailRequests;
        },
        (error:any)=>{
          console.log(error);
        }
      )
    }
    else if(this.userRole === "USER"){
      this._mailService.GetMailRequestsForPatient().subscribe(
        (x:any)=>{
          this.mailRequests = x.mailRequests;
        },
        (error:any)=>{
          console.log(error);
        }
      )
    }
    else{
      this.mailRequests = [];
    }

    console.log(this.mailRequests);
  }

  DeleteMailRequest(request:MailRequest, index:number){
    this._mailService.DeleteMailRequest(request.id).subscribe(
      (x:any)=>{
        console.log(x);
        this.mailRequests.splice(index, 1);
      },
      (error:any)=>{
        console.log(error);
      }
    )
  }

  UpdateMailRequest(request: MailRequest, index:number){
    request.status = "SENT";
    this._mailService.UpdateMailRequest(request).subscribe(
      (x:any)=>{
        console.log(x);
      },
      (error:any)=>{
        console.log(error);
      }
    )
  }
}

import { Component, Input } from '@angular/core';
import { MailTemplateDTO } from '../../mail-template-dto';
import { MailService } from 'src/app/services/Mails/mail.service';

@Component({
  selector: 'app-mail',
  templateUrl: './mail.component.html',
  styleUrls: ['./mail.component.css']
})
export class MailComponent {
  @Input() template:MailTemplateDTO;
  @Input() index: number;
  public fileToUpload: File;

  /**
   *
   */
  constructor(private _mailService:MailService) {
  }

  SendMail(){
    let formData:FormData = new FormData();
    formData.append('userName', `${localStorage.getItem("FirstName")} ${localStorage.getItem("LastName")}`);
    formData.append('mailSubject', this.template.mailSubject);
    formData.append('targetMail', this.template.targetEmail);
    formData.append('mailBody', this.template.mailBody);
    formData.append('formFiles', this.fileToUpload);

    this._mailService.SendMail(formData).subscribe(
      (x:any)=>{
        console.log(x);
      },
      (error:any)=>{
        console.log(error);
      }
    )
  }

  handleFileInput(event:Event) {
    const target = event.target as HTMLInputElement;
    const files = target.files;
    if(files)
    {
      this.fileToUpload = files[0];

    }
  }
}

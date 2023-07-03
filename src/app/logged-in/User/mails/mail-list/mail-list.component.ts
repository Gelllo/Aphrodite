import { Component, OnInit } from '@angular/core';
import { MailTemplateDTO } from '../mail-template-dto';
import { MailService } from 'src/app/services/Mails/mail.service';
import { MailCreateDialogComponent } from './mail/mail-create-dialog/mail-create-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { MailDeleteDialogComponent } from './mail/mail-delete-dialog/mail-delete-dialog.component';
import { MailUpdateDialogComponent } from './mail/mail-update-dialog/mail-update-dialog.component';

@Component({
  selector: 'app-mail-list',
  templateUrl: './mail-list.component.html',
  styleUrls: ['./mail-list.component.css']
})
export class MailListComponent implements OnInit{
  public mailTemplates: MailTemplateDTO[];
  public targetTemplate: MailTemplateDTO;
  public targetIndex = 0;
  public isInitialized = false;

  constructor(private _mailService:MailService, private dialog:MatDialog){

  }
  ngOnInit(): void {
    this.PopulateMailTemplate();
  }

  ChangeTargetTemplate(index:number){
    this.targetTemplate = this.mailTemplates.at(index) as MailTemplateDTO;
    this.targetIndex = index;
  }

  PopulateMailTemplate(){
    this._mailService.GetMailTemplates().subscribe(
      (x:any)=>{
        this.mailTemplates = x.mailTemplates;
        if(this.mailTemplates.length>0)
        {
          this.targetTemplate = this.mailTemplates.at(this.targetIndex) as MailTemplateDTO;
          this.isInitialized = true;
        }
      },
      (error:any)=>{
        console.log(error);
      }
    )
  }

  AddMailTemplate(){
    this.OpenCreateDialog()
  }

  OpenCreateDialog(): void {
    const dialogRef = this.dialog.open(MailCreateDialogComponent, {

    });

    dialogRef.afterClosed().subscribe(result => {
      if(result !=  null){
        this._mailService.AddMailTemplate(result).subscribe(
          (x:any)=>{
            console.log(x);
            this.mailTemplates.push(result);
          },
          (error:any)=>{

          }
        )

      }
    });
  }

  DeleteMailTemplate(index:number){
    this.OpenDeleteDialog(index);
  }

  OpenDeleteDialog(index:number):void{
    const dialogRef = this.dialog.open(MailDeleteDialogComponent, {
      data: this.mailTemplates.at(index)
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
      if(result!=null)
      {
        this._mailService.DeleteMailTemplate(result.id).subscribe(
          (x:any)=>{
            this.mailTemplates.splice(index, 1);
          },
          (error:any)=>{
            console.log(error);
          }
        )
      }
    });
  }

  UpdateMailTemplate(index:number){
    this.OpenUpdateDialog(index);
  }

  OpenUpdateDialog(index:number){
    const dialogRef = this.dialog.open(MailUpdateDialogComponent, {
      data: this.mailTemplates.map(x=>{ return {...x}}).at(index)
    });

    dialogRef.afterClosed().subscribe(result => {
      if(result != null){
        this._mailService.UpdateMailTemplate(result).subscribe(
          (x:any)=>{
            console.log(x);
            this.mailTemplates[index] = result
          },
          (error:any)=>{
            console.log(error);
          }
        )
      }
    });
  }


}

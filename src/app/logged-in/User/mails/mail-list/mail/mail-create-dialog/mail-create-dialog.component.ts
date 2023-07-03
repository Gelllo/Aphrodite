import { Component } from '@angular/core';
import { MailTemplateDTO } from '../../../mail-template-dto';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-mail-create-dialog',
  templateUrl: './mail-create-dialog.component.html',
  styleUrls: ['./mail-create-dialog.component.css']
})
export class MailCreateDialogComponent {
  userName: string;
  data:MailTemplateDTO;

  constructor(
    public dialogRef: MatDialogRef<MailCreateDialogComponent>
  ) {
    this.userName = localStorage.getItem("FirstName") as string;
    this.data = new MailTemplateDTO(0, '', '', '', '', localStorage.getItem("UserID") as string);
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}

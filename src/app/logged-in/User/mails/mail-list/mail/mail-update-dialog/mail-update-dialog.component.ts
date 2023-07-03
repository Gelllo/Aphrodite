import { Component, Inject} from '@angular/core';
import { MailCreateDialogComponent } from '../mail-create-dialog/mail-create-dialog.component';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MailTemplateDTO } from '../../../mail-template-dto';

@Component({
  selector: 'app-mail-update-dialog',
  templateUrl: './mail-update-dialog.component.html',
  styleUrls: ['./mail-update-dialog.component.css']
})
export class MailUpdateDialogComponent {
  userName: string;

  constructor(
    public dialogRef: MatDialogRef<MailCreateDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: MailTemplateDTO
  ) {
    this.userName = localStorage.getItem("FirstName") as string;
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}

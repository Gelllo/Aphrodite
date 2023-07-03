import { Component, Inject} from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-mail-delete-dialog',
  templateUrl: './mail-delete-dialog.component.html',
  styleUrls: ['./mail-delete-dialog.component.css']
})
export class MailDeleteDialogComponent {
  userName: string;

  constructor(
    public dialogRef: MatDialogRef<MailDeleteDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) {
    this.userName = localStorage.getItem("FirstName") as string;
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}

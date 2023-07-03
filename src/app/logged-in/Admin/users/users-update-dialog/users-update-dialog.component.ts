import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-users-update-dialog',
  templateUrl: './users-update-dialog.component.html',
  styleUrls: ['./users-update-dialog.component.css']
})
export class UsersUpdateDialogComponent {
  public adminName:string;

  constructor(
    public dialogRef: MatDialogRef<UsersUpdateDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) {
    this.adminName = localStorage.getItem("FirstName") as string;
    data.role = (data.role as string).toUpperCase();
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}

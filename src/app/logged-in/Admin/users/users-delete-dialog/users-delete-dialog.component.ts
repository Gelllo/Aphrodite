import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-users-delete-dialog',
  templateUrl: './users-delete-dialog.component.html',
  styleUrls: ['./users-delete-dialog.component.css']
})
export class UsersDeleteDialogComponent {

  adminName: string;

  constructor(
    public dialogRef: MatDialogRef<UsersDeleteDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) {
    this.adminName = localStorage.getItem("FirstName") as string;
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}

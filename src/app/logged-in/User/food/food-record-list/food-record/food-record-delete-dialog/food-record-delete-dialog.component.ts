import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-food-record-delete-dialog',
  templateUrl: './food-record-delete-dialog.component.html',
  styleUrls: ['./food-record-delete-dialog.component.css']
})
export class FoodRecordDeleteDialogComponent {
  userName: string;

  constructor(
    public dialogRef: MatDialogRef<FoodRecordDeleteDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) {
    this.userName = localStorage.getItem("FirstName") as string;
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}

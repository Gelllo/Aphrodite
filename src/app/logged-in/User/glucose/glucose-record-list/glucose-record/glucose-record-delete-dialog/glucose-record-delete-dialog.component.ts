import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-glucose-record-delete-dialog',
  templateUrl: './glucose-record-delete-dialog.component.html',
  styleUrls: ['./glucose-record-delete-dialog.component.css']
})
export class GlucoseRecordDeleteDialogComponent {
  userName: string;

  constructor(
    public dialogRef: MatDialogRef<GlucoseRecordDeleteDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) {
    this.userName = localStorage.getItem("FirstName") as string;
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}

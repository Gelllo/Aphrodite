import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
@Component({
  selector: 'app-glucose-record-update-dialog',
  templateUrl: './glucose-record-update-dialog.component.html',
  styleUrls: ['./glucose-record-update-dialog.component.css']
})
export class GlucoseRecordUpdateDialogComponent {
  userName: string;

  constructor(
    public dialogRef: MatDialogRef<GlucoseRecordUpdateDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) {
    this.userName = localStorage.getItem("FirstName") as string;
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}

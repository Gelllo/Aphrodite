import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Glucose } from '../../../glucose';
@Component({
  selector: 'app-glucose-record-create-dialog',
  templateUrl: './glucose-record-create-dialog.component.html',
  styleUrls: ['./glucose-record-create-dialog.component.css']
})
export class GlucoseRecordCreateDialogComponent {
  userName: string;
  data:Glucose;

  constructor(
    public dialogRef: MatDialogRef<GlucoseRecordCreateDialogComponent>
  ) {
    this.userName = localStorage.getItem("FirstName") as string;
    this.data = new Glucose(0, 0, new Date(), localStorage.getItem("UserID") as string, "SNACK");
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}

import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { GlucoseService } from 'src/app/services/Glucose/glucose.service';
import { GlucoseRecordCreateDialogComponent } from './glucose-record-list/glucose-record/glucose-record-create-dialog/glucose-record-create-dialog.component';

@Component({
  selector: 'app-glucose',
  templateUrl: './glucose.component.html',
  styleUrls: ['./glucose.component.css']
})
export class GlucoseComponent {

  constructor(private glucoseService:GlucoseService, private dialog:MatDialog){}

  addRecord(){
    this.openCreateDialog()
  }

  openCreateDialog(): void {


    const dialogRef = this.dialog.open(GlucoseRecordCreateDialogComponent, {

    });

    dialogRef.afterClosed().subscribe(result => {
      if(result !=  null){
        this.glucoseService.addGlucoseRecord(result).subscribe(
          (x:any)=>{
            console.log(x);
            this.glucoseService.savedRecord.next(true);
          },
          (error:any)=>{

          }
        )

      }
    });
  }

}

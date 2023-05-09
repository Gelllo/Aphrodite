import { Component, Input } from '@angular/core';
import { Glucose } from '../../glucose';
import { DatePipe, Location } from '@angular/common';

@Component({
  selector: 'app-glucose-record',
  templateUrl: './glucose-record.component.html',
  styleUrls: ['./glucose-record.component.css']
})
export class GlucoseRecordComponent {
  @Input() glucoseRecord:Glucose;
  @Input() index: number;

  constructor(private location: Location, private datepipe: DatePipe){

  }
  playSound(){
    let audio = new Audio();
    audio.src = "../../../assets/audio/notification_high-intensity.ogg";
    audio.load();
    audio.play();
  }

  assignRoute(){
    this.location.go("/glucose/"+ this.datepipe.transform(this.glucoseRecord.dateRecorded, "MM-dd-yyyy") + "/" + this.index.toString());
  }
}

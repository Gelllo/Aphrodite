import { Component, OnInit } from '@angular/core';
import { GlucoseModalService } from '../glucose-modal.service';

@Component({
  selector: 'app-glucose-days',
  templateUrl: './glucose-days.component.html',
  styleUrls: ['./glucose-days.component.css']
})
export class GlucoseDaysComponent implements OnInit{

  public registeredDays: Date[] = [
    new Date(2000, 3, 4),
    new Date(2000, 3, 5),
    new Date(2000, 3, 6),
    new Date(2000, 3, 7),
  ];

  constructor(public modalService: GlucoseModalService){

  }

  ngOnInit(): void {
  }

  getRegisteredDays(){
    return this.registeredDays.slice();
  }

  playAudio(){
    let audio = new Audio();
    audio.src = "../../assets/audio/03_principle_honest-03.mp4";
    audio.load();
    audio.play();
  }

}

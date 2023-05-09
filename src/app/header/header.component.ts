import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
playSound: any;

  playAudio(){
    let audio = new Audio();
    audio.src = "../assets/audio/sound-design-01.mp4";
    audio.load();
    audio.play();
  }

}

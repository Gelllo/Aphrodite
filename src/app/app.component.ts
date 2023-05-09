import { AfterViewInit, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit{

  title = 'Aphrodite';

  ngAfterViewInit(): void {
    console.log("HELLO")
    let audio = new Audio();
    audio.src = "assets/audio/music-01.mp4";
    audio.load();
    audio.play();
    audio.loop = true;
  }
}

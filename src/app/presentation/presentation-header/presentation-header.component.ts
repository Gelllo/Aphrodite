import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';

@Component({
  selector: 'app-presentation-header',
  templateUrl: './presentation-header.component.html',
  styleUrls: ['./presentation-header.component.css'],
})
export class PresentationHeaderComponent {
  showFiller=false;
}

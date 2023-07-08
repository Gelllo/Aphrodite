import { AfterViewInit, Component, OnInit } from '@angular/core';
import { ThemeService } from './services/theme.service';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, AfterViewInit{

  title = 'DiaBilly';

  constructor(private themeService: ThemeService, private authService: AuthService){}

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
  }

  toggleTheme() {
    // Toggle between two predefined themes (you can customize this logic)
    const currentTheme = this.themeService.overlayContainer.getContainerElement().classList[0];
    const themeClassName = currentTheme === 'my-light-theme' ? 'my-dark-theme' : 'my-light-theme';
    this.themeService.switchTheme(themeClassName);
  }
}

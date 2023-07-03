import { Injectable } from '@angular/core';
import { OverlayContainer } from '@angular/cdk/overlay';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  constructor(public overlayContainer: OverlayContainer) { }

  // Switch the theme based on the theme class name
  switchTheme(themeClassName: string) {
    const overlayContainerClasses = this.overlayContainer.getContainerElement().classList;
    const themeClassesToRemove = Array.from(overlayContainerClasses).filter((item: string) =>
      item.includes('-theme')
    );
    overlayContainerClasses.remove(...themeClassesToRemove);
    overlayContainerClasses.add(themeClassName);
  }
}

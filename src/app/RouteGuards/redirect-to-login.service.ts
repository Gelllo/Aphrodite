import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';


@Injectable()
export class RedirectToLoginService implements CanActivate {

    constructor( public router: Router) { }

    canActivate(): boolean {
      console.log(localStorage.getItem('UserID'));
        if (localStorage.getItem('UserID') != null) {
            this.router.navigate(['/logged-in']);
            return false;
        }
        return true;
    }
}

import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpResponse } from '@angular/common/http';
import { HttpRequest } from '@angular/common/http';
import { HttpHandler } from '@angular/common/http';
import { HttpEvent } from '@angular/common/http';
import { filter, tap } from 'rxjs/operators';
import { SpinnerService } from '../services/spinner.service';
import { AuthService } from '../services/auth.service';

@Injectable()
export class CustomHttpInterceptor implements HttpInterceptor {

  constructor(private spinnerService: SpinnerService, private _authService:AuthService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

      this.spinnerService.show();

      return next.handle(req)
           .pipe(tap((event: HttpEvent<any>) => {
                  if (event instanceof HttpResponse) {
                      this.spinnerService.hide();
                  }
              }, (error) => {
                  this.spinnerService.hide();
                  if(error.status == 401)
                  {
                    console.log("HERE");
                    this._authService.authenticationState.next(false);
                    this._authService.DeleteUserInfo();
                  }
              }));
  }
}

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SortDirection } from '@angular/material/sort';
import { Observable } from 'rxjs';
import { GetExceptionsResponse } from 'src/app/logged-in/Admin/my-app/my-app.component';

@Injectable({
  providedIn: 'root'
})
export class MyAppExceptionsService {

  private path = "https://localhost:7076/";

  constructor(private httpClient: HttpClient) { }

  GetExceptions(sort: string, order:SortDirection, page:number): Observable<any> {
    const header = new HttpHeaders().set('Content-type', 'application/json');
    return this.httpClient.get<GetExceptionsResponse>(this.path + `exceptions?sort=${sort}&order=${order}&page=${page}`,{headers: header, withCredentials:true});
  }
}

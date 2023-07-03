import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DateService {

  constructor() { }

  convertDateToFormat(date:Date){
    var month = ('0' + (date.getMonth() + 1)).slice(-2); // Adding leading zero if necessary
    var day = ('0' + date.getDate()).slice(-2); // Adding leading zero if necessary
    var year = date.getFullYear();

    var formattedDate = month + '-' + day + '-' + year;
    return formattedDate;
  }

}

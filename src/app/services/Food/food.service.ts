import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { MealDTO } from 'src/app/logged-in/User/food/meal-dto';

@Injectable({
  providedIn: 'root'
})
export class FoodService {
  private path = 'https://localhost:7080/meals/';
  private spoonecularPath = 'https://api.spoonacular.com/';
  private spoonecularKey = '8385d877d333406a8d35b9769fb66793'
  public savedRecord = new BehaviorSubject<boolean>(true);

  constructor(private httpClient:HttpClient) { }

  GetRecipesFromSpoonecular(searchString: string):Observable<any>{
    const header = new HttpHeaders().set('Content-type', 'application/json');
    return this.httpClient.get(this.spoonecularPath + `recipes/complexSearch?query=${searchString}&number=2&addRecipeNutrition=true&addRecipeInformation=false&` + `apiKey=${this.spoonecularKey}`, {headers: header});
  }

  GetMealsRecordsFromTheSpecifiedDateUntilNow(date: Date):Observable<any>{
    const header = new HttpHeaders().set('Content-type', 'application/json');
    return this.httpClient.get(this.path + `fromDateUntilNow/${localStorage.getItem("UserID")}/${this.convertDateToFormat(date)}`, {headers: header, withCredentials:true});
  }

  GetGroceryProductsFromSpoonecular(searchString: string):Observable<any>{
    const header = new HttpHeaders().set('Content-type', 'application/json');
    header.set('x-api-key', this.spoonecularKey);
    return this.httpClient.get(this.spoonecularPath + `food/products/search?query=${searchString}&number=2&addProductInformation=true&` + `apiKey=${this.spoonecularKey}`, {headers: header});
  }

  GetMealsRecordsRegisteredDays():Observable<any>{
    const header = new HttpHeaders().set('Content-type', 'application/json');
    return this.httpClient.get(this.path + `days/${localStorage.getItem("UserID")}`, {headers: header, withCredentials:true});
  }

  GetMealsRecordsByDate(targetDate: string){
    const header = new HttpHeaders().set('Content-type', 'application/json');
    return this.httpClient.get(this.path + `${localStorage.getItem("UserID")}/${targetDate}`, {headers: header, withCredentials:true});
  }

  GetMealRecord(id: number){
    const header = new HttpHeaders().set('Content-type', 'application/json');
    return this.httpClient.get(this.path + `${id}`, {headers: header, withCredentials:true});
  }

  AddMealRecord(mealRecord: MealDTO){
    const header = new HttpHeaders().set('Content-type', 'application/json');
    console.log(mealRecord);
    return this.httpClient.post(this.path + `${localStorage.getItem("UserID")}`, JSON.stringify({meal:mealRecord}), {headers: header, withCredentials:true});
  }

  UpdateMealRecord(mealRecord: MealDTO){
    const header = new HttpHeaders().set('Content-type', 'application/json');
    return this.httpClient.put(this.path + `${localStorage.getItem("UserID")}/` + mealRecord.id, JSON.stringify({meal:mealRecord}), {headers: header, withCredentials:true});
  }

  DeleteMeal(id: number){
    const header = new HttpHeaders().set('Content-type', 'application/json');
    return this.httpClient.delete(this.path + id, {headers: header, withCredentials:true});
  }

  convertDateToFormat(date:Date){
    var month = ('0' + (date.getMonth() + 1)).slice(-2); // Adding leading zero if necessary
    var day = ('0' + date.getDate()).slice(-2); // Adding leading zero if necessary
    var year = date.getFullYear();

    var formattedDate = month + '-' + day + '-' + year;

    console.log(formattedDate);

    return formattedDate;
  }
}

import { FoodDTO } from "./food-dto";

export class MealDTO {
  public id?: number;
  public dateRegistered?: string;
  public mealType?: string;
  public userId?: string;
  public foods?: FoodDTO[];

  constructor(id?:number, dateRegistered?:string, mealType?:string, userId?:string, foods?:FoodDTO[]){
    this.id = id;
    this.dateRegistered = dateRegistered;
    this.mealType = mealType;
    this.userId = userId;
    this.foods = foods;
  }
}

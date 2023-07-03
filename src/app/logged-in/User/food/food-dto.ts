import { Nutrient } from "./nutrient";

export class FoodDTO {
  public title?:string;
  public image?:string;
  public foodType?: string;
  public nrOfPortions?:number;
  public nutrients?: Nutrient[];

  constructor(title?:string, image?:string, foodType?:string, nrOfPortions?:number, nutrients?:Nutrient[]){
    this.title = title;
    this.image = image;
    this.foodType = foodType;
    this.nrOfPortions = nrOfPortions;
    this.nutrients = nutrients;
  }
}

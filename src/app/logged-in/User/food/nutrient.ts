export class Nutrient {
  public name:string;
  public amount:number;
  public unit: string;

  constructor(name:string, amont:number, unit:string){
    this.name = name;
    this.amount = amont;
    this.unit = unit;
  }
}

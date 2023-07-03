export class GlucoseRecordsForBarChart {
  public date: string;
  public avgGlucoseLevels:number;

  constructor(date:string, avgGlucoseLevels:number){
    this.date = date;
    this.avgGlucoseLevels = avgGlucoseLevels;
  }
}

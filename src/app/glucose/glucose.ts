export class Glucose {
    public glucoseLevel: number;
    public dateRecorded: Date;
    public color: string;

    constructor(glucoseLevel:number, dateRecorded: Date, color: string){
        this.glucoseLevel = glucoseLevel;
        this.dateRecorded = dateRecorded;
        this.color  = color;
    }
}

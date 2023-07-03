export class Glucose {
    public id:number
    public glucoseLevel: number;
    public dateRegistered: Date;
    public userId: string
    public registeredAfter: string;

    constructor(id:number, glucoseLevel:number, dateRegistered: Date, userId:string, registeredAfter:string){
        this.id = id;
        this.glucoseLevel = glucoseLevel;
        this.dateRegistered = dateRegistered;
        this.userId = userId;
        this.registeredAfter = registeredAfter;
    }
}

export class GlucoseDTO {
    public glucoseLevel: number;
    public dateRegistered: string;
    public userId: string
    public registeredAfter: string;

    constructor(glucoseLevel:number, dateRegistered: string, userId:string, registeredAfter:string){
        this.glucoseLevel = glucoseLevel;
        this.dateRegistered = dateRegistered;
        this.userId = userId;
        this.registeredAfter = registeredAfter;
    }
}

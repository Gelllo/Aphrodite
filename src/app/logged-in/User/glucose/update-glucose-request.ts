import { GlucoseDTO } from "./glucose-dto";

export class UpdateGlucoseRequest {
    public id:number;
    public glucoseRecordDTO: GlucoseDTO;

    constructor(id:number, glucoseLevel:number, dateRegistered: string, userId:string, registeredAfter:string){
        this.id = id;
        this.glucoseRecordDTO = new GlucoseDTO(glucoseLevel, dateRegistered, userId, registeredAfter);
    }
}

import { GlucoseDTO } from "./glucose-dto";

export class CreateGlucoseRecordRequest {
  public glucoseRecordDTO: GlucoseDTO;

    constructor(glucoseLevel:number, dateRegistered: string, userId:string, registeredAfter:string){
        this.glucoseRecordDTO = new GlucoseDTO(glucoseLevel, dateRegistered, userId, registeredAfter);
    }
}

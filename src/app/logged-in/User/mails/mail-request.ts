export class MailRequest {
  public id:number;
  public doctorUsername: string;
  public patientUsername: string;
  public dateRequested: string;
  public status : string;
  public reportRequested: string;

  constructor(id:number, doctorUsername: string, patientUsername:string, dateRequested:string, status:string, reportRequested: string){
    this.id = id;
    this.doctorUsername = doctorUsername;
    this.patientUsername = patientUsername;
    this.dateRequested = dateRequested;
    this.status = status;
    this.reportRequested = reportRequested;
  }
}

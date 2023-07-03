export class MailTemplateDTO {
  public id:number;
  public name:string;
  public senderEmail:string;
  public targetEmail:string;
  public mailSubject:string;
  public mailBody:string;
  public userID:string;

  constructor(id:number, name:string, senderEmail:string, mailSubject: string, mailBody:string, userID:string) {
    this.id = id;
    this.name = name;
    this.senderEmail = senderEmail;
    this.mailSubject = mailSubject;
    this.mailBody = mailBody;
    this.userID = userID;
  }
}

import { Subject } from 'rxjs';

export class AlertMessageService {

  public AlertStatusChnagedSubject = new Subject<any>(); 
  public AlertObj =   {
    IsDialogOpen : false,
    AlertType : 0 ,
    Message : "" 
  }

    OpenDialog(dialogObj : any) {
        this.AlertObj = dialogObj;
        this.AlertStatusChnagedSubject.next(this.AlertObj);
    }
}

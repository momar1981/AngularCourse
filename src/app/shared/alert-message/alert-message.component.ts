import { Component, OnInit, OnDestroy } from '@angular/core';
import { AlertMessageService } from '../alert-message.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-alert-message',
  templateUrl: './alert-message.component.html',
  styleUrls: ['./alert-message.component.css']
})
export class AlertMessageComponent implements OnInit,OnDestroy {
  alertObj =  {
    IsDialogOpen : false,
    AlertType : 0 ,
    Message : "" 
  }
  alertStatusChnagedSubscription : Subscription;

  constructor(private alertMessageSRV : AlertMessageService) { }

    ngOnInit(): void {

    this.alertStatusChnagedSubscription = this.alertMessageSRV.AlertStatusChnagedSubject.subscribe((alertObj : any)=>{
      this.alertObj = alertObj;
    });

  }

    
  closeDialog()
  {
    this.alertObj.AlertType = 0;
    this.alertObj.Message = "";
    this.alertObj.IsDialogOpen = false;
    //this.alertStatusChnagedSubscription.unsubscribe();
  }

  ngOnDestroy(){
    this.alertStatusChnagedSubscription.unsubscribe();
  }
}

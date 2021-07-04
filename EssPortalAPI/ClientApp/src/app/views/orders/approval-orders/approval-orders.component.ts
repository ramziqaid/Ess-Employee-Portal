import { RequestService } from './../Services/Request.service';
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import * as enums from 'app/shared/enum.enum'; 
import { EssPortalService, AlertifyService, AuthService } from '../../../core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { AppLoaderService } from 'app/shared/services/app-loader/app-loader.service'; 
import { MatSnackBar } from '@angular/material/snack-bar';
import { OrderStagePopupComponent } from '../popup/orderStage/orderStage.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-approval-orders',
  templateUrl: './approval-orders.component.html',
  styleUrls: ['./approval-orders.component.scss']
})
export class ApprovalOrdersComponent implements OnInit {
 
  public items: any[];
  requestStatusCode:string;
  constructor(
    private requestService: RequestService,
    private alertify: AlertifyService,
    private dialog: MatDialog,
    private loader: AppLoaderService,
    private snack: MatSnackBar,
    private router: Router,
    private authService: AuthService) { 
  }

  ngOnInit() {
    this.loadRequest(); 
  }

  loadRequest() {
    var vm:any={
      requestID:-1,
      requsetPrivateNumber:null,
      employeeID:-1, 
      managerId:this.authService.logginEmployeeId(), 
      requestTypeID:-1,
      statusCode:null ,
      showMyEmployee:false
    };
      this.requestService.getRequestList(vm).subscribe(
      result => {  
        this.items = result 
      },
      error => { this.alertify.error(error); }
      );  
  }

  openPopUp(data: any = {}) { 
    
    let dialogRef: MatDialogRef<any> = this.dialog.open(OrderStagePopupComponent, {
      width: '920px',
      disableClose: true,
      data: { RequestID: data.RequestID,
          currentLang:this.authService.currentLang
        }
    })
    dialogRef.afterClosed()
      .subscribe(res => {
        if(!res) {
          // If user press cancel
          return;
        }
        this.loader.open();
        this.items = data;
        this.loader.close();
        this.snack.open('Member Added!', 'OK', { duration: 4000 })
         
      })
  }

  approval(row){  
    var stage:any={
      RequestID:row.RequestID,
      StageTypeID:row.NextStageTypeID,
      UserID:this.authService.logginUserID(),
      ActionCode:enums.RequestAction.Approved,
      Justification:null
    };
    this.alertify.confirm('DO_YOU_WANT_APPROVAL_ORDER', () => {
      this.requestService.approvalRequest(stage).subscribe(
        result => {  
          this.loadRequest();
        },
        error => { this.alertify.error(error); }
        ); 
    });
    
  }

  reject(row){  
    var stage:any={
      RequestID:row.RequestID,
      StageTypeID:row.NextStageTypeID,
      UserID:this.authService.logginUserID(),
      ActionCode:enums.RequestAction.Rejected,
      Justification:row.reason
    };
   
    if(row.reason==undefined || row.reason.length==0){
      this.alertify.error("MSG_REASON_REJECTION_MUST_ENTERED");
      return;
    }
    this.alertify.confirm('DO_YOU_WANT_APPROVAL_ORDER', () => {
      this.requestService.approvalRequest(stage).subscribe(
        result => {  
          this.loadRequest();
        },
        error => { this.alertify.error(error); }
        ); 
    });
     
  } 
  btnRout= function (RequestType:number,RequestID :number) {
     
    let path:string="/Orders/NewOrders/"; 
    switch(RequestType){
      case 5:
        path=`${path}Amendment/`;    
        break;
      case 15:
         path=`${path}ChangeHousing/`;    
          break;
      case 51:
          path=`${path}Loan/`;    
          break;
    }
    this.router.navigate([path, RequestID])
};
 
}

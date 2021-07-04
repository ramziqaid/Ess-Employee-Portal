import { RemoteWorkComponent } from './neworders/remoteWork/remoteWork.component';
import { ClearanceComponent } from './neworders/clearance/clearance.component';

import { LoanComponent } from './neworders/loan/loan.component';  
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { MyOrdersComponent } from './my-orders/my-orders.component';
import { ApprovalOrdersComponent } from './approval-orders/approval-orders.component';
import { AmendmentComponent } from './neworders/amendment/amendment.component';
import { OrderDashBoardComponent } from './orderDashBoard/orderDashBoard.component';
import { ChangeHousingComponent } from './neworders/changeHousing/changeHousing.component';
import { LeaveComponent } from './neworders/leave/leave.component';
import { EosComponent } from './neworders/EOS/eos.component';
import { ExitReEntryVisaComponent } from './neworders/exitReEntryVisa/exitReEntryVisa.component';
import { ComplaintComponent } from './neworders/complaint/complaint.component';

const routes: Routes = [ 
  {
    path: '',    
    data: {title: 'My Orders'  , breadcrumb: 'MY_ORDERS',OperationCode :'HTC02'},
     children: 
     [
      {
        path: 'MyOrders', 
        component: MyOrdersComponent,
        data: { title: 'My Orders'  , breadcrumb: 'MY_ORDERS' ,OperationCode :'HTC06'} 
      },
      {
        path: 'ApprovalOrders', 
        component: ApprovalOrdersComponent,
        data: { title: 'Approval of Orders'  , breadcrumb: 'APPROVAL_ORDERS' ,OperationCode :'HTC07' } 
      }
     ]
  },
 
  {
    path: 'NewOrders',
    component: OrderDashBoardComponent,
    data: {
      title: 'OrderDashBoardComponent', breadcrumb: 'NEW_ORDER' ,OperationCode :'HTC08'
    }
  },
  {
    path: 'NewOrders',
    data: {
      title: 'NewOrders ', breadcrumb: 'NEW_ORDER' ,OperationCode :'HTC08'
    },
    children: [
      {
        path: 'Amendment', 
        data: { title: 'Amendment', breadcrumb: 'AMENDMENT'  ,OperationCode :'HTC09'} ,
        // canActivate: [AuthGuard],
        children: [
          {
            path: '', component: AmendmentComponent, 
          },
          { path: ':RequestID', component: AmendmentComponent }
        ]
      },
      {
        path: 'ChangeHousing', 
        data: { title: 'ChangeHousing', breadcrumb: 'CHANGE_HOUSING'  ,OperationCode :'HTC10'} , 
        children: [
          {
            path: '', component: ChangeHousingComponent, 
          },
          { path: ':RequestID', component: ChangeHousingComponent }
        ]
      },
      {
        path: 'Leave', 
        data: { title: 'Leave', breadcrumb: 'LEAVE'  ,OperationCode :'HTC11'} , 
        children: [
          {
            path: '', component: LeaveComponent, 
          },
          { path: ':RequestID', component: LeaveComponent }
        ]
      },
      {
        path: 'Loan', 
        data: { title: 'Loan', breadcrumb: 'LOAN'  ,OperationCode :'HTC12'} , 
        children: [
          {
            path: '', component: LoanComponent, 
          },
          { path: ':RequestID', component: LoanComponent }
        ]
      },
      {
        path: 'EOS', 
        data: { title: 'END_OF_SERVICE', breadcrumb: 'END_OF_SERVICE'  ,OperationCode :'HTC13'} , 
        children: [
          {
            path: '', component: EosComponent, 
          },
          { path: ':RequestID', component: EosComponent }
        ]
      },
      {
        path: 'ExitReEntryVisa', 
        data: { title: 'EXIT_REENTRY_VISA', breadcrumb: 'EXIT_REENTRY_VISA'  ,OperationCode :'HTC14'} , 
        children: [
          {
            path: '', component: ExitReEntryVisaComponent, 
          },
          { path: ':RequestID', component: ExitReEntryVisaComponent }
        ]
      },
      {
        path: 'Clearance', 
        data: { title: 'EMPLOYEE_CLEARANCE', breadcrumb: 'EMPLOYEE_CLEARANCE'  ,OperationCode :'HTC15'} , 
        children: [
          {
            path: '', component: ClearanceComponent, 
          },
          { path: ':RequestID', component: ClearanceComponent }
        ]
      },
      {
        path: 'Complaint', 
        data: { title: 'COMPLAINT', breadcrumb: 'COMPLAINT'  ,OperationCode :'HTC17'} , 
        children: [
          {
            path: '', component: ComplaintComponent, 
          },
          { path: ':RequestID', component: ClearanceComponent }
        ]
      },
      {
        path: 'RemoteWork', 
        data: { title: 'REMOTE_WORK', breadcrumb: 'REMOTE_WORK'  ,OperationCode :'HTC28'} , 
        children: [
          {
            path: '', component: RemoteWorkComponent, 
          },
          { path: ':RequestID', component: RemoteWorkComponent }
        ]
      },
      
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class OrdersRoutesModule { }
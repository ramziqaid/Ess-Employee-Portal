var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { LoanComponent } from './neworders/loan/loan.component';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { MyOrdersComponent } from './my-orders/my-orders.component';
import { ApprovalOrdersComponent } from './approval-orders/approval-orders.component';
import { AmendmentComponent } from './neworders/amendment/amendment.component';
import { OrderDashBoardComponent } from './orderDashBoard/orderDashBoard.component';
import { ChangeHousingComponent } from './neworders/changeHousing/changeHousing.component';
import { LeaveComponent } from './neworders/leave/leave.component';
// import { HousingComponent } from './neworders/housing/housing.component';
// import { VacationsComponent } from './neworders/vacations/vacations.component';
// import { ClearanceComponent } from './neworders/clearance/clearance.component';
// import { ExitReEnterVisaComponent } from './neworders/exitReEnterVisa/exitReEnterVisa.component';
// import { BusinessTripComponent } from './neworders/BusinessTrip/BusinessTrip.component';
// import { EndOfServiceComponent } from './neworders/endOfService/endOfService.component';
const routes = [
    {
        path: '',
        data: { title: 'My Orders', breadcrumb: 'MY_ORDERS', OperationCode: 'HTC02' },
        children: [
            {
                path: 'MyOrders',
                component: MyOrdersComponent,
                data: { title: 'My Orders', breadcrumb: 'MY_ORDERS', OperationCode: 'HTC06' }
            },
            {
                path: 'ApprovalOrders',
                component: ApprovalOrdersComponent,
                data: { title: 'Approval of Orders', breadcrumb: 'APPROVAL_ORDERS', OperationCode: 'HTC07' }
            }
        ]
    },
    {
        path: 'NewOrders',
        component: OrderDashBoardComponent,
        data: {
            title: 'OrderDashBoardComponent', breadcrumb: 'NEW_ORDER', OperationCode: 'HTC08'
        }
    },
    {
        path: 'NewOrders',
        data: {
            title: 'NewOrders ', breadcrumb: 'NEW_ORDER', OperationCode: 'HTC08'
        },
        children: [
            {
                path: 'Amendment',
                data: { title: 'Amendment', breadcrumb: 'AMENDMENT', OperationCode: 'HTC09' },
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
                data: { title: 'ChangeHousing', breadcrumb: 'CHANGE_HOUSING', OperationCode: 'HTC10' },
                children: [
                    {
                        path: '', component: ChangeHousingComponent,
                    },
                    { path: ':RequestID', component: ChangeHousingComponent }
                ]
            },
            {
                path: 'Leave',
                data: { title: 'Leave', breadcrumb: 'LEAVE', OperationCode: 'HTC11' },
                children: [
                    {
                        path: '', component: LeaveComponent,
                    },
                    { path: ':RequestID', component: LeaveComponent }
                ]
            },
            {
                path: 'Loan',
                data: { title: 'Loan', breadcrumb: 'LOAN', OperationCode: 'HTC12' },
                children: [
                    {
                        path: '', component: LoanComponent,
                    },
                    { path: ':RequestID', component: LoanComponent }
                ]
            },
        ]
    }
];
let OrdersRoutesModule = class OrdersRoutesModule {
};
OrdersRoutesModule = __decorate([
    NgModule({
        imports: [RouterModule.forChild(routes)],
        exports: [RouterModule]
    })
], OrdersRoutesModule);
export { OrdersRoutesModule };
//# sourceMappingURL=orders.routing.module.js.map
import { EndOfServiceComponent } from './neworders/endOfService/endOfService.component';

import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { MyOrdersComponent } from './my-orders/my-orders.component';
import { ApprovalOrdersComponent } from './approval-orders/approval-orders.component';
import { AmendmentComponent } from './neworders/amendment/amendment.component';
import { OrderDashBoardComponent } from './orderDashBoard/orderDashBoard.component';
import { HousingComponent } from './neworders/housing/housing.component';
import { VacationsComponent } from './neworders/vacations/vacations.component';
import { ClearanceComponent } from './neworders/clearance/clearance.component';
import { ExitReEnterVisaComponent } from './neworders/exitReEnterVisa/exitReEnterVisa.component';
import { BusinessTripComponent } from './neworders/BusinessTrip/BusinessTrip.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'MyOrders'
  },
  {
    path: 'MyOrders',
    component: MyOrdersComponent,
    data: {
      title: 'My Orders'
    }
  },
  {
    path: 'ApprovalOrders',
    component: ApprovalOrdersComponent,
    data: {
      title: 'Approval of Orders'
    }
  },
  {
    path: 'NewOrders',
    component: OrderDashBoardComponent,
    data: {
      title: 'OrderDashBoardComponent'
    }
  },
  {
    path: 'NewOrders',
    data: {
      title: 'NewOrders '
    },
    children: [
      {
        path: 'Amendment',
        data: {
          title: 'NewOrders / Amendment '
        },
        // canActivate: [AuthGuard],
        children: [
          {
            path: '', component: AmendmentComponent,
            data: {
              title: 'NewOrders / Amendment '
            }
          },
          { path: ':RequestID', component: AmendmentComponent }
        ]
      },
      {
        path: 'Housing',
        data: {
          title: 'NewOrders / Housing '
        },
        // canActivate: [AuthGuard],
        children: [
          {
            path: '', component: HousingComponent,
            data: { title: 'NewOrders / Housing ' }
          },
          { path: ':RequestID', component: HousingComponent }
        ]
      },
      {
        path: 'BusinessTrip',
        data: { title: 'NewOrders / BusinessTrip ' },
        // canActivate: [AuthGuard],
        children: [
          {
            path: '', component: BusinessTripComponent,
            data: { title: 'NewOrders / BusinessTrip ' }
          },
          { path: ':RequestID', component: BusinessTripComponent }
        ]
      },
      {
        path: 'ExitReEnterVisa',
        data: { title: 'NewOrders / ExitReEnterVisa ' },
        // canActivate: [AuthGuard],
        children: [
          {
            path: '', component: ExitReEnterVisaComponent,
            data: { title: 'NewOrders / Exit ReEnterVisa ' }
          },
          { path: ':RequestID', component: ExitReEnterVisaComponent }
        ]
      },
      {
        path: 'Clearance',
        data: { title: 'NewOrders / Clearance ' },
        // canActivate: [AuthGuard],
        children: [
          {
            path: '', component: ClearanceComponent,
            data: { title: 'NewOrders / Clearance ' }
          },
          { path: ':RequestID', component: ClearanceComponent }
        ]
      },
      {
        path: 'Vacations',
        data: { title: 'NewOrders / Vacations ' },
        // canActivate: [AuthGuard],
        children: [
          {
            path: '', component: VacationsComponent,
            data: { title: 'NewOrders / Vacations ' }
          },
          { path: ':RequestID', component: VacationsComponent }
        ]
      },
      {
        path: 'EndOfService',
        data: { title: 'NewOrders / EndOfService ' },
        // canActivate: [AuthGuard],
        children: [
          {
            path: '', component: EndOfServiceComponent,
            data: { title: 'NewOrders / EndOfService ' }
          },
          { path: ':RequestID', component: EndOfServiceComponent }
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
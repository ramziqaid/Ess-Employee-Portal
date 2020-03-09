import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { MyOrdersComponent } from './my-orders/my-orders.component';
import { ApprovalOrdersComponent } from './approval-orders/approval-orders.component';
import { DefaultLayoutComponent } from '../../containers';
import { AmendmentComponent } from './neworders/amendment/amendment.component';

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
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class OrdersRoutesModule { }
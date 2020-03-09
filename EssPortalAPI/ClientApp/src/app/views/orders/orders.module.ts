import { TimepickerModule } from 'ngx-bootstrap/timepicker';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { ProgressbarModule } from 'ngx-bootstrap/progressbar';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyOrdersComponent } from './my-orders/my-orders.component';
import { ApprovalOrdersComponent } from './approval-orders/approval-orders.component';
import { AmendmentComponent } from './neworders/amendment/amendment.component';
import { OrdersRoutesModule } from './orders.routing.module';
import { FormsModule } from '@angular/forms';

import { DataTablesModule } from 'angular-datatables';
import { ActionBarModule } from '../actionBar/actionBar.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    OrdersRoutesModule,
    BsDatepickerModule.forRoot(),
    TimepickerModule.forRoot(),
    ProgressbarModule.forRoot(),
    DataTablesModule,
    ActionBarModule
  ],
  declarations:
    [
      MyOrdersComponent,
      ApprovalOrdersComponent,
      AmendmentComponent,
    ],
  exports: []
})
export class OrdersModule { }

import { VacationsComponent } from './neworders/vacations/vacations.component';
import { ExitReEnterVisaComponent } from './neworders/exitReEnterVisa/exitReEnterVisa.component';
import { BusinessTripComponent } from './neworders/BusinessTrip/BusinessTrip.component';
import { SharedModule } from './../../Shared/shared.module';
import { TimepickerModule } from 'ngx-bootstrap/timepicker';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { ProgressbarModule } from 'ngx-bootstrap/progressbar';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyOrdersComponent } from './my-orders/my-orders.component';
import { ApprovalOrdersComponent } from './approval-orders/approval-orders.component';
import { AmendmentComponent } from './neworders/amendment/amendment.component';
import { OrdersRoutesModule } from './orders.routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { DataTablesModule } from 'angular-datatables';
import { ActionBarModule } from '../actionBar/actionBar.module';
import { RequestService } from './Services/Request.service';
import { MatRadioModule } from '@angular/material/radio';
import { OrderDashBoardComponent } from './orderDashBoard/orderDashBoard.component';
import { MatTabsModule } from '@angular/material/tabs';
import { MatTableModule } from '@angular/material/table';
import { HousingComponent } from './neworders/housing/housing.component';
import { ClearanceComponent } from './neworders/clearance/clearance.component';
import { EndOfServiceComponent } from './neworders/endOfService/endOfService.component';
import { MatCardModule } from '@angular/material/card';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    OrdersRoutesModule,
    SharedModule,
    BsDatepickerModule.forRoot(),
    TimepickerModule.forRoot(),
    ProgressbarModule.forRoot(),
    DataTablesModule,
    ActionBarModule,
    MatRadioModule,
    MatTabsModule,
    MatTableModule,
    MatCardModule
  ],
  declarations:
    [
      MyOrdersComponent,
      ApprovalOrdersComponent,
      AmendmentComponent,
      OrderDashBoardComponent,
      HousingComponent,
      BusinessTripComponent,
      ExitReEnterVisaComponent,
      VacationsComponent,
      ClearanceComponent,
      EndOfServiceComponent,
    ],
  exports: [],
  providers: [RequestService],
})
export class OrdersModule { }

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { LoanComponent } from './neworders/loan/loan.component';
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
import { RequestService } from './Services/Request.service';
import { MatRadioModule } from '@angular/material/radio';
import { OrderDashBoardComponent } from './orderDashBoard/orderDashBoard.component';
import { MatStepperModule } from '@angular/material/stepper';
import { MatInputModule } from '@angular/material/input';
import { MatTabsModule } from '@angular/material/tabs';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { NgxMaterialTimepickerModule } from 'ngx-material-timepicker';
import { UIModule } from 'app/shared/UI/UI.module';
import { MAT_DATE_LOCALE } from '@angular/material/core';
import { MatChipsModule } from '@angular/material/chips';
import { SharedModule } from 'app/shared/shared.module';
import { OrderStagePopupComponent } from './popup/orderStage/orderStage.component';
import { ChangeHousingComponent } from './neworders/changeHousing/changeHousing.component';
import { LeaveComponent } from './neworders/leave/leave.component';
let OrdersModule = class OrdersModule {
};
OrdersModule = __decorate([
    NgModule({
        imports: [
            CommonModule,
            FormsModule,
            ReactiveFormsModule,
            OrdersRoutesModule,
            BsDatepickerModule.forRoot(),
            TimepickerModule.forRoot(),
            ProgressbarModule.forRoot(),
            MatRadioModule,
            MatTabsModule,
            DataTablesModule,
            MatStepperModule,
            MatPaginatorModule,
            MatSortModule,
            MatTableModule,
            NgxDatatableModule,
            MatInputModule,
            MatCheckboxModule,
            MatButtonModule,
            MatCardModule,
            MatIconModule,
            MatDividerModule,
            FlexLayoutModule,
            TranslateModule,
            SharedModule,
            MatCardModule,
            MatFormFieldModule,
            MatDatepickerModule,
            MatSelectModule,
            NgxMaterialTimepickerModule,
            MatChipsModule,
            UIModule,
        ],
        declarations: [
            MyOrdersComponent,
            OrderStagePopupComponent,
            AmendmentComponent,
            OrderDashBoardComponent,
            ApprovalOrdersComponent,
            ChangeHousingComponent,
            LoanComponent,
            LeaveComponent,
        ],
        exports: [],
        providers: [
            RequestService,
            TranslateService,
            { provide: MAT_DATE_LOCALE, useValue: 'en-GB' }
        ],
    })
], OrdersModule);
export { OrdersModule };
//# sourceMappingURL=Orders.module.js.map
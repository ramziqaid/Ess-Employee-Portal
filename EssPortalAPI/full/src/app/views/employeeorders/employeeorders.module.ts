
import { UiModule } from './../ui/ui.module';
import { SharedModule } from './../../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MyOrdersComponent } from './my-orders/my-orders.component';
import { ApprovalOrdersComponent } from './approval-orders/approval-orders.component';
import { OrderDashBoardComponent } from './order-dash-board/order-dash-board.component';
import { EmployeeordersRoutes } from './employeeorders.routing';
import { RequestService } from './Services/Request.service';
import { TranslateModule } from '@ngx-translate/core';
import { MatRadioModule } from '@angular/material/radio';
import { MatTabsModule } from '@angular/material/tabs';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { AmendmentComponent } from './neworders/amendment/amendment.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatAutocompleteModule } from '@angular/material/autocomplete';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    EmployeeordersRoutes,
    SharedModule,
    TranslateModule,
    MatRadioModule,
    MatTabsModule,
    MatTableModule,
    FlexLayoutModule,
    NgxDatatableModule,
    MatInputModule,
    MatIconModule,
    MatCardModule,
    MatMenuModule,
    MatButtonModule,
    MatChipsModule,
    MatListModule,
    MatTooltipModule,
    MatDialogModule,
    MatSnackBarModule,
    MatSlideToggleModule,
    MatSelectModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatAutocompleteModule,
    UiModule,
  ],
  declarations: [
    MyOrdersComponent,
    ApprovalOrdersComponent,
    OrderDashBoardComponent,
    AmendmentComponent
  ],
  providers: [RequestService],
})
export class EmployeeordersModule { }


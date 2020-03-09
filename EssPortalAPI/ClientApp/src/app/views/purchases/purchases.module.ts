
import { SharedModule } from './../../Shared/shared.module';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { BsModalService } from 'ngx-bootstrap/modal';
import { ActionBarModule } from './../actionBar/actionBar.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PurchasesRoutesModule } from './purchases.routing';
import { RequsetPurchasesComponent } from './requset/Requset.component';
import { ListPurchasesComponent } from './list/list.component';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { DataTablesModule } from 'angular-datatables';
import { PrintInvoiceComponent } from './printInvoice/invoice.component';
import { MatStepperModule } from '@angular/material/stepper';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTabsModule } from '@angular/material/tabs';
import { MatTableModule } from '@angular/material/table';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { DxReportViewerModule, DxReportDesignerModule } from 'devexpress-reporting-angular';
import { ReportViewerComponent } from './reportviewer/report-viewer';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material';
import { MatButtonModule } from '@angular/material/button';
import { PurchasesService } from './Services/Purchases.service';
import { PurchaseOfferComponent } from './offers/Offer.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    PurchasesRoutesModule,
    BsDatepickerModule.forRoot(),
    ActionBarModule,
    DataTablesModule,
    BsDropdownModule.forRoot(),
    TabsModule,
    SharedModule,
    MatStepperModule,
    MatDialogModule,
    MatToolbarModule,
    MatIconModule,
    MatTabsModule,
    MatTableModule,
    MatCheckboxModule,
    DxReportViewerModule,
    DxReportDesignerModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
  ],
  declarations:
    [
      RequsetPurchasesComponent,
      ListPurchasesComponent,
      PrintInvoiceComponent,
      ReportViewerComponent,
      PurchaseOfferComponent
    ],
  providers: [PurchasesService],
  exports: [],

})
export class PurchasesModule { }



import { RequestService } from './../Services/Request.service';
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import * as XLSX from 'xlsx';
import { AppLoaderService } from '@app/shared/services/app-loader/app-loader.service';
import { AlertifyService } from '@app/shared/services/alertify.service';


@Component({
  selector: 'app-approval-orders',
  templateUrl: './approval-orders.component.html',
  styleUrls: ['./approval-orders.component.scss']
})
export class ApprovalOrdersComponent implements OnInit {


  data: any;
  constructor(private requestService: RequestService,
    private alertify: AlertifyService, private loader: AppLoaderService) {

  }

  ngOnInit() {
    this.loadRequest();
  }

  loadRequest() {
    this.loader.open('{{"LOADING" | translate }}');
    this.requestService.getRequestForManager(-1).subscribe(
      result => {
        this.data = result;
        this.loader.close();
      },
      error => { this.alertify.error(error); }
    );
  }

  @ViewChild('TABLE', { static: false }) table: ElementRef;

  ExportTOExcel() {
    const ws: XLSX.WorkSheet = XLSX.utils.table_to_sheet(this.table.nativeElement);
    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');
    /* save to file */
    XLSX.writeFile(wb, 'MemberRenewalReport.xlsx');
  }


}

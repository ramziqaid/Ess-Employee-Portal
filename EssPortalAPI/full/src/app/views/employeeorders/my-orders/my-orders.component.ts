
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

import { Observable, Subject } from 'rxjs';
import * as XLSX from 'xlsx';
import { AppLoaderService } from '@app/shared/services/app-loader/app-loader.service';
import { RequestService } from '../Services/Request.service';
import { AlertifyService } from '@app/shared/services/alertify.service';

@Component({
  selector: 'app-my-orders',
  templateUrl: './my-orders.component.html',
  styleUrls: ['./my-orders.component.scss']
})

export class MyOrdersComponent implements OnInit {

  // Datatables Properties 

  data: any;
  constructor(private requestService: RequestService,
    private alertify: AlertifyService, private loader: AppLoaderService) {
  }

  ngOnInit() {
    this.loadRequest();
  }

  loadRequest() {
    this.loader.open('{{"LOADING" | translate }}');
    this.requestService.getRequestForEmployee(-1).subscribe(
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

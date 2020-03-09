import { RequestService } from './../Services/Request.service';
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { EssPortalService, AlertifyService, AuthService } from '../../../core';
import { MatTableDataSource } from '@angular/material/table';
import * as m from '../Models/Request';
import { Observable, Subject } from 'rxjs';
import * as XLSX from 'xlsx';

@Component({
  selector: 'app-my-orders',
  templateUrl: './my-orders.component.html',
  styleUrls: ['./my-orders.component.scss']
})

export class MyOrdersComponent implements OnInit {

  // Datatables Properties
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject();

  data: any;
  constructor(private requestService: RequestService,
    private alertify: AlertifyService,
    private authService: AuthService) {

  }

  ngOnInit() {
    this.loadRequest();
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 10,
      autoWidth: true,
      order: [[0, 'desc']]
    };

  }

  loadRequest() {
    //  this.requestService.getRequestForEmployee(this.authService.userEmployeeId).subscribe(
    this.requestService.getRequestForEmployee(-1).subscribe(
      result => {
        this.data = result;
        this.dtTrigger.next();
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

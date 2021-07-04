import { RequestService } from './../Services/Request.service';
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { EssPortalService, AlertifyService, AuthService } from '../../../core';
import { MatTableDataSource } from '@angular/material/table';
import * as m from '../Models/Request';
import { Observable, Subject } from 'rxjs';
import * as enums from 'app/shared/enum.enum';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { SystemCode } from 'app/shared/models/common.model';
import { RequestType } from '../Models/Request';
import { Router } from '@angular/router';

@Component({
  selector: 'app-my-orders',
  templateUrl: './my-orders.component.html',
  styleUrls: ['./my-orders.component.scss']
})

export class MyOrdersComponent implements OnInit {

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  displayedColumns: string[] = ['index', 'RequsetPrivateNumber', 'RequestNameAr', 'EnglishName', 'CreatedDate', 'StatusNameEN', 'action'];
  dataSource: any;
  statusList: SystemCode[];
  requestType: RequestType[];
  General: RequestType[];
  Government: RequestType[];
  Letters: RequestType[];

  myOrder: string;
  requestTypeId: number;
  requestStatusCode: string;

  constructor(
    private requestService: RequestService,
    private alertify: AlertifyService,
    private router: Router,
    private authService: AuthService) {
  }

  ngOnInit() {
    // this.loadRequest(); 
    this.loadRequestStatus();
    this.loadRequestType();
    this.myOrder = "0";
  }



  loadRequestStatus() {
    this.requestService.getSystemCode(enums.SystemCodeType.Code_CSR).subscribe(
      result => {
        this.statusList = result;
        var element = new SystemCode();
        element.systemCode = "-1",
          element.descriptionEn = "All";
        element.descriptionAr = "الكل";
        this.statusList.unshift(element);
        this.requestStatusCode = "-1";
      },
      error => console.log(error)
    );
  }

  loadRequestType() {
    this.requestService.getRequestType().subscribe(
      result => {
        this.requestType = result;

        this.General = this.requestType.filter(p => p.requestGroupID == 1 && p.isActive);
        this.Government = this.requestType.filter(p => p.requestGroupID == 2 && p.isActive);
        this.Letters = this.requestType.filter(p => p.requestGroupID == 3 && p.isActive);

        var element = new RequestType();
        element.requestTypeID = -1,
          element.requestNameEn = "All";
        element.requestNameAr = "الكل";
        this.General.unshift(element);
        this.requestTypeId = -1;
      },
      error => console.log(error)
    );
  }

  onSubmit() {
    var vm: any = {
      requestID: -1,
      requsetPrivateNumber: null,
      employeeID: this.authService.logginEmployeeId(),
      managerId: -1,
      requestTypeID: this.requestTypeId,
      statusCode: (this.requestStatusCode == "-1" ? null : this.requestStatusCode),
      showMyEmployee: (this.myOrder == "1" ? true : false)
    };
    this.requestService.getRequestList(vm).subscribe(
      result => {
        this.dataSource = new MatTableDataSource(result);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      },
      error => { this.alertify.error(error); }
    );
  }

  btnRout = function (RequestType: number, RequestID: number) {

    let path: string = "/Orders/NewOrders/";
    switch (RequestType) {
      case 5:
        path = `${path}Amendment/`;
        break;
      case 15:
        path = `${path}ChangeHousing/`;
        break;
      case 25:
          path = `${path}Clearance/`;
          break;
      case 35:
        path = `${path}Leave/`;
        break;
      case 51:
        path = `${path}Loan/`;
        break;
      case 20:
          path = `${path}ExitReEntryVisa/`;
          break;
      case 40:
          path = `${path}EOS/`;
            break;
      case 65:
          path = `${path}RemoteWork/`;
           break;       
    }
    this.router.navigate([path, RequestID])
  };

}

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { RequestService } from './../Services/Request.service';
import { Component, ViewChild } from '@angular/core';
import { AlertifyService, AuthService } from '../../../core';
import { MatTableDataSource } from '@angular/material/table';
import * as enums from 'app/shared/enum.enum';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { SystemCode } from 'app/shared/models/common.model';
import { RequestType } from '../Models/Request';
import { Router } from '@angular/router';
let MyOrdersComponent = class MyOrdersComponent {
    constructor(requestService, alertify, router, authService) {
        this.requestService = requestService;
        this.alertify = alertify;
        this.router = router;
        this.authService = authService;
        this.displayedColumns = ['index', 'RequestID', 'RequestNameAr', 'EnglishName', 'CreatedDate', 'StatusNameEN', 'action'];
        this.btnRout = function (RequestType, RequestID) {
            let path = "/Orders/NewOrders/";
            switch (RequestType) {
                case 5:
                    path = `${path}Amendment/`;
                    break;
                case 15:
                    path = `${path}ChangeHousing/`;
                    break;
                case 51:
                    path = `${path}Loan/`;
                    break;
            }
            this.router.navigate([path, RequestID]);
        };
    }
    ngOnInit() {
        // this.loadRequest(); 
        this.loadRequestStatus();
        this.loadRequestType();
        this.myOrder = "0";
    }
    loadRequestStatus() {
        this.requestService.getSystemCode(enums.SystemCodeType.Code_CSR).subscribe(result => {
            this.statusList = result;
            var element = new SystemCode();
            element.systemCode = "-1",
                element.descriptionEn = "All";
            element.descriptionAr = "الكل";
            this.statusList.unshift(element);
            this.requestStatusCode = "-1";
        }, error => console.log(error));
    }
    loadRequestType() {
        this.requestService.getRequestType().subscribe(result => {
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
        }, error => console.log(error));
    }
    onSubmit() {
        var vm = {
            requestID: -1,
            requsetPrivateNumber: null,
            employeeID: this.authService.logginEmployeeId(),
            managerId: -1,
            requestTypeID: this.requestTypeId,
            statusCode: (this.requestStatusCode == "-1" ? null : this.requestStatusCode),
            showMyEmployee: (this.myOrder == "1" ? true : false)
        };
        this.requestService.getRequestList(vm).subscribe(result => {
            this.dataSource = new MatTableDataSource(result);
            this.dataSource.paginator = this.paginator;
            this.dataSource.sort = this.sort;
        }, error => { this.alertify.error(error); });
    }
};
__decorate([
    ViewChild(MatPaginator),
    __metadata("design:type", MatPaginator)
], MyOrdersComponent.prototype, "paginator", void 0);
__decorate([
    ViewChild(MatSort),
    __metadata("design:type", MatSort)
], MyOrdersComponent.prototype, "sort", void 0);
MyOrdersComponent = __decorate([
    Component({
        selector: 'app-my-orders',
        templateUrl: './my-orders.component.html',
        styleUrls: ['./my-orders.component.scss']
    }),
    __metadata("design:paramtypes", [RequestService,
        AlertifyService,
        Router,
        AuthService])
], MyOrdersComponent);
export { MyOrdersComponent };
//# sourceMappingURL=my-orders.component.js.map
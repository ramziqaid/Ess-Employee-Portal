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
import { Component } from '@angular/core';
import * as enums from 'app/shared/enum.enum';
import { AlertifyService, AuthService } from '../../../core';
import { MatDialog } from '@angular/material/dialog';
import { AppLoaderService } from 'app/shared/services/app-loader/app-loader.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { OrderStagePopupComponent } from '../popup/orderStage/orderStage.component';
import { Router } from '@angular/router';
let ApprovalOrdersComponent = class ApprovalOrdersComponent {
    constructor(requestService, alertify, dialog, loader, snack, router, authService) {
        this.requestService = requestService;
        this.alertify = alertify;
        this.dialog = dialog;
        this.loader = loader;
        this.snack = snack;
        this.router = router;
        this.authService = authService;
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
        this.loadRequest();
    }
    loadRequest() {
        var vm = {
            requestID: -1,
            requsetPrivateNumber: null,
            employeeID: -1,
            managerId: this.authService.logginEmployeeId(),
            requestTypeID: -1,
            statusCode: null,
            showMyEmployee: false
        };
        this.requestService.getRequestList(vm).subscribe(result => {
            this.items = result;
        }, error => { this.alertify.error(error); });
    }
    openPopUp(data = {}) {
        let dialogRef = this.dialog.open(OrderStagePopupComponent, {
            width: '920px',
            disableClose: true,
            data: { RequestID: data.RequestID,
                currentLang: this.authService.currentLang
            }
        });
        dialogRef.afterClosed()
            .subscribe(res => {
            if (!res) {
                // If user press cancel
                return;
            }
            this.loader.open();
            this.items = data;
            this.loader.close();
            this.snack.open('Member Added!', 'OK', { duration: 4000 });
        });
    }
    approval(row) {
        var stage = {
            RequestID: row.RequestID,
            StageTypeID: row.NextStageTypeID,
            UserID: this.authService.logginUserID(),
            ActionCode: enums.RequestAction.Approved,
            Justification: null
        };
        this.alertify.confirm('DO_YOU_WANT_APPROVAL_ORDER', () => {
            this.requestService.approvalRequest(stage).subscribe(result => {
                this.loadRequest();
            }, error => { this.alertify.error(error); });
        });
    }
    reject(row) {
        var stage = {
            RequestID: row.RequestID,
            StageTypeID: row.NextStageTypeID,
            UserID: this.authService.logginUserID(),
            ActionCode: enums.RequestAction.Rejected,
            Justification: row.reason
        };
        if (row.reason == undefined || row.reason.length == 0) {
            this.alertify.error("MSG_REASON_REJECTION_MUST_ENTERED");
            return;
        }
        this.alertify.confirm('DO_YOU_WANT_APPROVAL_ORDER', () => {
            this.requestService.approvalRequest(stage).subscribe(result => {
                this.loadRequest();
            }, error => { this.alertify.error(error); });
        });
    }
};
ApprovalOrdersComponent = __decorate([
    Component({
        selector: 'app-approval-orders',
        templateUrl: './approval-orders.component.html',
        styleUrls: ['./approval-orders.component.scss']
    }),
    __metadata("design:paramtypes", [RequestService,
        AlertifyService,
        MatDialog,
        AppLoaderService,
        MatSnackBar,
        Router,
        AuthService])
], ApprovalOrdersComponent);
export { ApprovalOrdersComponent };
//# sourceMappingURL=approval-orders.component.js.map
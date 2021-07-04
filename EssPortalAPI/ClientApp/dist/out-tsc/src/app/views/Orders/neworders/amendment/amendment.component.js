var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { DateAdapter } from '@angular/material/core';
import { Component, ViewChild, ElementRef } from '@angular/core';
import * as m from '../../Models/Request';
import { RequestService } from '../../Services/Request.service';
import { EssPortalService, AlertifyService, AuthService } from '../../../../core';
import { ActivatedRoute } from '@angular/router';
import * as shared from 'app/shared/models/common.model';
import * as enums from 'app/shared/enum.enum';
import { ActionBarComponent } from 'app/shared/UI/action-Bar/actionBar.component';
import * as _moment from 'moment';
let AmendmentComponent = class AmendmentComponent {
    constructor(sharedService, requestService, authService, _avRoute, alertify, dateAdapter) {
        this.sharedService = sharedService;
        this.requestService = requestService;
        this.authService = authService;
        this._avRoute = _avRoute;
        this.alertify = alertify;
        this.dateAdapter = dateAdapter;
        this.request = new m.Requests();
        this.bsFromDate = new Date();
        this.attachment = [];
        this.extraFiled = [];
        this.editMode = true;
        this.title = "New";
        this.isAdmin = false;
        this.amendmentReasonCode = "";
        if (this._avRoute.snapshot.params["RequestID"]) {
            this.requestID = this._avRoute.snapshot.params["RequestID"];
        }
        this.dateAdapter.setLocale('en-GB'); //dd/MM/yyyy
    }
    ngOnInit() {
        this.loadEmployees();
        this.loadAmendmentReasons();
        if (this.requestID > 0) {
            this.title = "Edit";
            this.loadRequest(this.requestID);
        }
        this.isAdmin = this.authService.isAdminUser;
    }
    onSubmit() {
    }
    //#region "actionBar"
    newClick() {
        this.employeeID = this.authService.logginEmployeeId();
        this.editMode = false;
        this.newObj = this.getEmptyObject();
        this.getNextPrivateNumber();
        //this.requsetId = -1;
        this.requestID = this.newObj.request.requestID;
    }
    edit() {
        this.editMode = false;
    }
    save() {
        this.findInvalidControls();
        if (this.heroForm.valid) {
            var dateToDB = _moment(this.bsFromDate).format("DD/MM/YYYY");
            if (!this.sharedService.isCheckDateFormat(dateToDB)) {
                this.alertify.error('FORMATE_DATE_ISNOT_CORRECT');
                return;
            }
            this.newObj.request.requestTypeID = enums.RequestTypeId.Amendment;
            this.newObj.request.statusCode = enums.RequestStatus.NewRequest;
            this.authService.currentUserName.subscribe(user => { this.newObj.request.createdBy = user; });
            this.newObj.request.employeeID = this.authService.logginEmployeeId();
            this.newObj.request.requsetPrivateNumber = this.nextPrivateNumber;
            //extraFiled
            this.addUpdateExtraField(1, this.amendmentReasonCode);
            this.addUpdateExtraField(2, this.type);
            this.addUpdateExtraField(3, this.time);
            this.addUpdateExtraField(4, dateToDB);
            this.addUpdateExtraField(5, this.justification);
            // this.newObj.amendments[0].fromDate = dateToDB;// "02/02/2018";
            this.requestService.saveRequest(this.newObj).subscribe((data) => {
                this.alertify.success('SAVED_SUCCESSFULLY');
                this.heroForm.reset();
                this.newObj = data;
                this.requestID = this.newObj.requestID;
                this.loadRequest(this.requestID);
                this.editMode = true;
                this.actionBar.editMode();
            }, error => {
                this.alertify.error(error);
            });
        }
    }
    delete() {
        if (this.requestID > 0) {
            this.alertify.confirm('DO_YOU_WANT_DELETE_ORDER', () => {
                this.requestService.deleteRequest(this.requestID).subscribe(result => {
                    this.alertify.success("DELETED_SUCCESSFULLY");
                    this.reset();
                }, error => { this.alertify.error(error); });
            });
        }
    }
    findInvalidControls() {
        const controls = this.heroForm.controls;
        for (const name in controls) {
            if (controls[name].invalid) {
                this.heroForm.controls[name].markAsTouched({ onlySelf: true });
            }
        }
    }
    reset() {
        this.editMode = true;
        this.heroForm.reset();
    }
    //#endregion
    //#region load
    loadEmployees() {
        this.sharedService.getEmployees().subscribe(result => {
            this.empoyeeList = result;
        }, error => console.log(error));
    }
    loadAmendmentReasons() {
        this.requestService.getSystemCode(enums.SystemCodeType.Code_CAC).subscribe(result => {
            this.emendmentReason = result;
        }, error => console.log(error));
    }
    loadRequest(requsetId) {
        this.newObj = this.getEmptyObject();
        this.requestService.getRequest(requsetId).subscribe((data) => {
            this.bindData(data);
            if (this.actionBar) {
                this.actionBar.editMode();
            }
            ;
        }, error => {
            this.alertify.error(error);
        });
    }
    bindData(data) {
        this.newObj.request = data.request;
        this.newObj.requestStages = data.requestStages;
        this.newObj.requestExtraFields = data.requestExtraFields;
        this.requestID = this.newObj.request.requestID;
        this.nextPrivateNumber = this.newObj.request.requsetPrivateNumber;
        this.employeeID = this.newObj.request.employeeID;
        try {
            this.amendmentReasonCode = this.getExtraFieldValue(1);
            this.type = this.getExtraFieldValue(2);
            this.time = this.getExtraFieldValue(3);
            this.bsFromDate = new Date(this.getExtraFieldValue(4));
            this.justification = this.getExtraFieldValue(5);
        }
        catch (error) {
        }
    }
    getNextPrivateNumber() {
        this.requestService.getNextPrivateNumber().subscribe((data) => {
            this.nextPrivateNumber = data;
        }, error => {
            this.alertify.error(error);
        });
    }
    //#endregion
    getEmptyObject() {
        const obj = {
            request: {
                requestID: this.sharedService.getRandomNumber(),
                requsetPrivateNumber: null,
                employeeID: this.employeeID = this.authService.logginEmployeeId(),
                requestTypeID: null,
                statusCode: null,
                createdBy: null,
            },
            requestExtraFields: [],
            requestStages: []
        };
        this.type = "CheckIn";
        const time = new Date();
        this.bsFromDate = time;
        obj.requestStages[0] = new m.RequestStage();
        obj.requestStages[0].actionCode = enums.RequestAction.NewRequest;
        obj.requestStages[0].stageTypeID = 1;
        obj.requestStages[0].userID = this.authService.logginUserID();
        obj.requestStages[0].justification = undefined;
        return obj;
    }
    ;
    //#region Extra Filed
    addUpdateExtraField(extraFieldTypeID, value) {
        var objIndex = this.newObj.requestExtraFields.findIndex((obj => obj.extraFieldTypeID == extraFieldTypeID));
        if (objIndex == -1) {
            var dtl = new m.RequestExtraField;
            dtl.requestExtraFieldID = -Math.floor(this.newObj.requestExtraFields.length + 1);
            dtl.extraFieldTypeID = extraFieldTypeID;
            dtl.value = value;
            dtl.requestID = this.requestID;
            this.newObj.requestExtraFields.push(dtl);
        }
        else {
            this.newObj.requestExtraFields[objIndex].value = value;
        }
    }
    getExtraFieldValue(extraFieldTypeID) {
        var objIndex = this.newObj.requestExtraFields.findIndex((obj => obj.extraFieldTypeID == extraFieldTypeID));
        if (objIndex != -1) {
            return this.newObj.requestExtraFields[objIndex].value;
        }
        return undefined;
    }
    //#endregion
    employeeSelect(employeeID) {
        this.employeeID = employeeID;
    }
    uploadFinished(attachmentID) {
        if (attachmentID != undefined) {
            var dtl = new shared.Attachment;
            dtl.attachmentID = +attachmentID;
            dtl.referenceID = this.requestID;
            dtl.fileName = "fileName";
            dtl.fileType = "fileType";
            if (this.newObj.attachments === undefined || this.newObj.attachments === null) {
                this.newObj.attachments = this.attachment;
            }
            this.newObj.attachments.push(dtl);
            //console.log(attachmentID);
        }
    }
};
__decorate([
    ViewChild('heroForm', { static: false }),
    __metadata("design:type", Object)
], AmendmentComponent.prototype, "heroForm", void 0);
__decorate([
    ViewChild('time', { static: false }),
    __metadata("design:type", Object)
], AmendmentComponent.prototype, "time2", void 0);
__decorate([
    ViewChild('FromDate', { static: true }),
    __metadata("design:type", ElementRef)
], AmendmentComponent.prototype, "FromDate", void 0);
__decorate([
    ViewChild(ActionBarComponent, { static: false }),
    __metadata("design:type", ActionBarComponent)
], AmendmentComponent.prototype, "actionBar", void 0);
AmendmentComponent = __decorate([
    Component({
        selector: 'app-amendment',
        templateUrl: './amendment.component.html',
        styleUrls: ['./amendment.component.scss']
    }),
    __metadata("design:paramtypes", [EssPortalService,
        RequestService,
        AuthService,
        ActivatedRoute,
        AlertifyService,
        DateAdapter])
], AmendmentComponent);
export { AmendmentComponent };
//# sourceMappingURL=amendment.component.js.map
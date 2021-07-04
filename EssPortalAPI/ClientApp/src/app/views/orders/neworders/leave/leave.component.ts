

import { DateAdapter } from '@angular/material/core';
import { Component, OnInit, SimpleChanges, OnChanges, ViewChild, ElementRef } from '@angular/core';
import * as m from '../../Models/Request';
import { RequestService } from '../../Services/Request.service';
import { EssPortalService, AlertifyService, AuthService, HelpersService } from '../../../../core';
import { Router, ActivatedRoute } from '@angular/router';
import * as shared from 'app/shared/models/common.model';
import * as enums from 'app/shared/enum.enum';
import { ActionBarComponent } from 'app/shared/UI/action-Bar/actionBar.component';
import * as _moment from 'moment';
import { ViewData } from 'app/shared/models/common.model';
import { isNumeric } from 'rxjs/internal-compatibility';
import { MatSelectChange } from '@angular/material/select';

@Component({
  selector: 'app-leave',
  templateUrl: './leave.component.html',
  styleUrls: ['./leave.component.scss']
})
export class LeaveComponent implements OnInit {

  request: m.Requests = new m.Requests();
  minFromDate = new Date();
  maxToDate = new Date().setDate(2);
  bsFromDate = new Date();
  bsToDate = new Date();
  vacationBalance: number = 0;
  empoyeeList: shared.Employee[];
  vacationType: ViewData[];
  attachment: shared.Attachment[] = [];
  extraFiled: m.RequestExtraField[] = [];

  newObj: any;
  editMode: boolean = true;
  title: string = "New";
  isAdmin: boolean = false;
  isReplacementEmp: boolean = false;
  requestID: number; 
  employeeID: number;

  //extraFeild
  leaveTypeID: number;
  leaveTypeCode: string = "";
  fromDate: string;
  toDate: string;
  days: number = 1;
  replacementEmployeeID: number;
  replacementEmployeeName: string = "";
  travelMethodID: string = "0";
  travelMethod: string = "";
  paymentStatusID: string = "0";
  paymentStatus: string = "";
  address:string;
  phone:string;
  justification: string;


  @ViewChild('heroForm', { static: false }) heroForm: any;
  @ViewChild(ActionBarComponent, { static: false }) actionBar: ActionBarComponent;

  constructor(private sharedService: EssPortalService,
    private requestService: RequestService,
    private authService: AuthService,
    private helpersService: HelpersService,
    private _avRoute: ActivatedRoute,
    private alertify: AlertifyService,
    private dateAdapter: DateAdapter<Date>) {

    if (this._avRoute.snapshot.params["RequestID"]) {
      this.requestID = this._avRoute.snapshot.params["RequestID"];
    }
    this.dateAdapter.setLocale('en-GB'); //dd/MM/yyyy
  }


  ngOnInit() {

    this.loadEmployees();
    this.loadVacationType();

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
    this.heroForm.reset();
    this.editMode = false;
    this.employeeID = this.authService.logginEmployeeId();
    this.newObj = this.getEmptyObject();
    this.getNextPrivateNumber();
    this.loadVacationBalace();
    this.days = 1;
    //this.requsetId = -1;
    this.requestID = this.newObj.request.requestID;

    this.newObj.request.requestTypeID = enums.RequestTypeId.LeaveRequestVacations;
    this.newObj.request.statusCode = enums.RequestStatus.NewRequest;
    this.authService.currentUserName.subscribe(user => { this.newObj.request.createdBy = user });
    this.newObj.request.employeeID = this.authService.logginEmployeeId(); 
  }

  edit() {
    this.editMode = false;
  }


  save() {

    this.findInvalidControls();
    if (this.heroForm.valid) {
      var dateFromDB = _moment(this.bsFromDate).format("DD/MM/YYYY");
      if (!this.sharedService.isCheckDateFormat(dateFromDB)) {
        this.alertify.error('FORMATE_DATE_ISNOT_CORRECT');
        return;
      }

      var dateToDB = _moment(this.bsToDate).format("DD/MM/YYYY");
      if (!this.sharedService.isCheckDateFormat(dateToDB)) {
        this.alertify.error('FORMATE_DATE_ISNOT_CORRECT');
        return;
      }

    

      // 23	35	LeaveTypeID	نوع الاجازة
      // 24	35	ReplacementEmployeeID	الموظف البديل
      // 26	35	FromDate	من تاريخ
      // 27	35	ToDate	الى تاريخ
      // 28	35	Days	عدد الايام
      // 29	35	TravelMethod	طريق السفر
      // 30	35	PaymentStatus	حالة السداد
      // 31	35	Justification	ملاحظة
      // 48	35	TravelMethodID	طريق السفر
      // 49	35	PaymentStatusID	حالة السداد
      // 50	35	ReplacementEmployeeName	الموظف البديل
      // 51	35	LeaveTypeCode	نوع الاجازة
      //extraFiled
      debugger
      this.addUpdateExtraField(23, this.leaveTypeID);
      this.addUpdateExtraField(51, this.leaveTypeCode);
      this.addUpdateExtraField(54, this.isReplacementEmp ? 1 : 0);
      if (this.isReplacementEmp) {
        this.addUpdateExtraField(24, this.replacementEmployeeID);
        this.addUpdateExtraField(50, this.replacementEmployeeName);
        if(this.replacementEmployeeID==undefined){
          this.alertify.error('REPLACEMENT_EMPLOYEE_MUST_ENTER');
        return;
        }
      }
      this.addUpdateExtraField(26, dateFromDB);
      this.addUpdateExtraField(27, dateToDB);
      this.addUpdateExtraField(28, this.days);
      this.addUpdateExtraField(29, this.travelMethod);
      this.addUpdateExtraField(48, this.travelMethodID);
      this.addUpdateExtraField(30, this.paymentStatus);
      this.addUpdateExtraField(49, this.paymentStatusID);
      this.addUpdateExtraField(55, this.vacationBalance);
      this.addUpdateExtraField(31, this.justification);
      this.addUpdateExtraField(85, this.address);
      this.addUpdateExtraField(86, this.phone);

      this.requestService.saveRequest(this.newObj).subscribe((data) => {
        this.alertify.success('SAVED_SUCCESSFULLY');
        this.heroForm.reset();
        this.newObj = data;
        this.requestID = this.newObj.requestID;
        this.loadRequest(this.requestID);
        this.editMode = true;
        this.actionBar.editMode();
      },
        error => {
          this.alertify.error(error);
        }
      );
    }
  }

  delete() {
    if (this.requestID > 0) {
      this.alertify.confirm('DO_YOU_WANT_DELETE_ORDER', () => {
        this.requestService.deleteRequest(this.requestID).subscribe(
          result => {
            this.alertify.success("DELETED_SUCCESSFULLY");
            this.reset();
            this.actionBar.queryMode();
          },
          error => { this.alertify.error(error); }
        );
      });
    }
  }

  private findInvalidControls() {
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
    //this.newObj = this.getEmptyObject();
    //this.requestID = -1;
  }
  //#endregion

  //#region load

  private loadEmployees() {
    this.sharedService.getEmployees().subscribe(
      result => {
        this.empoyeeList = result;
      },
      error => console.log(error)
    );
  }

  private loadVacationType() {
    this.sharedService.getVacationTypes().subscribe(
      result => {
        this.vacationType = result;
      },
      error => console.log(error)
    );
  }

  private loadVacationBalace() {
    var vm = {
      employeeID: this.authService.logginEmployeeId(),
      fromDate: this.helpersService.getCurrentDate()
    };

    this.sharedService.getVacationBalanceInfo(vm).subscribe(result => {
      this.vacationBalance = result[0].Balance;
    }, error => console.log(error));
  }

  loadRequest(requsetId: number) {
    this.newObj = this.getEmptyObject();
    this.requestService.getRequest(requsetId).subscribe(
      (data) => {
        this.bindData(data);

        if (this.actionBar) { this.actionBar.editMode() };
      }, error => {
        this.alertify.error(error);
      }
    );
  }

  bindData(data: any) {

    this.newObj.request = data.request;
    this.newObj.requestStages = data.requestStages;
    this.newObj.requestExtraFields = data.requestExtraFields;

    this.requestID = this.newObj.request.requestID; 
    this.employeeID = this.newObj.request.employeeID;

    try {

      this.leaveTypeID = this.getExtraFieldValue(23) != undefined ? Number(this.getExtraFieldValue(23)) : 0;
      this.leaveTypeCode = this.getExtraFieldValue(51);
      this.replacementEmployeeID = this.getExtraFieldValue(24) != undefined ? Number(this.getExtraFieldValue(24)) : 0;
      this.replacementEmployeeName = this.getExtraFieldValue(50);
      this.days = this.getExtraFieldValue(28) != undefined ? Number(this.getExtraFieldValue(28)) : 1;
      this.travelMethod = this.getExtraFieldValue(29);
      this.travelMethodID = this.getExtraFieldValue(48);
      this.paymentStatus = this.getExtraFieldValue(30);
      this.paymentStatusID = this.getExtraFieldValue(49);
      this.isReplacementEmp = Boolean(this.getExtraFieldValue(51) != undefined ? Number(this.getExtraFieldValue(51)) : 0);
      this.justification = this.getExtraFieldValue(31);
      this.address = this.getExtraFieldValue(85);
      this.phone = this.getExtraFieldValue(86);
      this.bsFromDate = this.helpersService.getDate(this.getExtraFieldValue(26));
      this.bsToDate = this.helpersService.getDate(this.getExtraFieldValue(27));
    }
    catch (error) {

    }

  }

  getNextPrivateNumber() {
    this.requestService.getNextPrivateNumber().subscribe(
      (data) => {
        this.newObj.request.requsetPrivateNumber = data;
      }, error => {
        this.alertify.error(error);
      }
    );
  }

  //#endregion

  private getEmptyObject(): any {

    const obj = {
      request: {
        requestID: this.sharedService.getRandomNumber(),
        requsetPrivateNumber: null,
        employeeID: null,
        requestTypeID: null,
        statusCode: null,
        createdBy: null,
      },
      requestExtraFields: [],
      requestStages: []
    };


    const time = new Date();
    this.bsFromDate = time;
    this.bsToDate = time;
    obj.requestStages[0] = new m.RequestStage();
    obj.requestStages[0].actionCode = enums.RequestAction.NewRequest;
    obj.requestStages[0].stageTypeID = 1;
    obj.requestStages[0].userID = this.authService.logginUserID();
    obj.requestStages[0].justification = undefined;

    return obj;
  };

  //#region Extra Filed
  addUpdateExtraField(extraFieldTypeID: number, value: any) {
    var objIndex = this.newObj.requestExtraFields.findIndex((obj => obj.extraFieldTypeID == extraFieldTypeID));
    if (objIndex == -1) {
      var dtl = new m.RequestExtraField;
      dtl.requestExtraFieldID = -Math.floor(this.newObj.requestExtraFields.length + 1);
      dtl.extraFieldTypeID = extraFieldTypeID;
      dtl.value = value;
      dtl.requestID = this.requestID;
      this.newObj.requestExtraFields.push(dtl);
    } else {
      this.newObj.requestExtraFields[objIndex].value = value
    }
  }

  getExtraFieldValue(extraFieldTypeID: number): string {
    var objIndex = this.newObj.requestExtraFields.findIndex((obj => obj.extraFieldTypeID == extraFieldTypeID));
    if (objIndex != -1) {
      return this.newObj.requestExtraFields[objIndex].value;
    }
    return undefined;
  }
  //#endregion

  //#region Events

  employeeSelect(employeeID: any) {
    this.employeeID = employeeID;
  }

  replacementEmployeeSelect(employeeID: any) {
    // debugger
    // this.replacementEmployeeID = employeeID;
  }


  selectedVacation(event: MatSelectChange) {
    if (this.vacationType.filter(p => p.ID == event.value && p.IsNeedReplacementEmp == true).length > 0) {
      this.isReplacementEmp = true;
    } else {
      this.isReplacementEmp = false;
    }
    // debugger
    // this.selectedData = {
    //   value: event.value,
    //   text: event.source.triggerValue
    // };
    this.leaveTypeCode = event.source.triggerValue;
  }

  dateRangeChange(dateRangeStart: HTMLInputElement, dateRangeEnd: HTMLInputElement) {
    this.days = 0;
    if (dateRangeStart.value && dateRangeEnd.value) {
      // console.log(dateRangeStart.value);
      // console.log(dateRangeEnd.value);
      const bsFromDate = _moment(this.bsFromDate).format("DD/MM/YYYY");
      const bsToDate = _moment(this.bsToDate).format("DD/MM/YYYY");
      this.days = this.helpersService.dayDiff(bsFromDate, bsToDate);
    }

  }

  paymentStatusChange(value: string) {
    this.paymentStatus = value;
  }

  travelMethodChange(value: string) {
    this.travelMethod = value;
  }



  //#endregion

  uploadFinished(attachmentID: string) {
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

}

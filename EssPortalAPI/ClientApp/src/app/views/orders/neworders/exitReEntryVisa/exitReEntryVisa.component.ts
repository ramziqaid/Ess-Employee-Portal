

import { DateAdapter } from '@angular/material/core';
import { Component, OnInit, SimpleChanges, OnChanges, ViewChild, ElementRef } from '@angular/core';
import * as m from '../../Models/Request'; 
import { SystemCode } from 'app/shared/models/common.model';
import { RequestService } from '../../Services/Request.service';
import { EssPortalService, AlertifyService, AuthService, HelpersService } from '../../../../core';
import { Router, ActivatedRoute } from '@angular/router';
import * as shared from 'app/shared/models/common.model';
import * as enums from 'app/shared/enum.enum';
import { ActionBarComponent } from 'app/shared/UI/action-Bar/actionBar.component';
import * as _moment from 'moment'; 
import { MatSelectChange } from '@angular/material/select';

@Component({
  selector: 'app-exitReEntryVisa',
  templateUrl: './exitReEntryVisa.component.html',
  styleUrls: ['./exitReEntryVisa.component.scss']
})
export class ExitReEntryVisaComponent implements OnInit {

  request: m.Requests = new m.Requests();
  minFromDate = new Date();
  maxToDate = new Date().setDate(30);
  bsFromDate = new Date();
  bsToDate = new Date();
  empoyeeList: shared.Employee[];
  visaTypeList: SystemCode[];
  reasonTypeList: SystemCode[];
  attachment: shared.Attachment[] = [];
  extraFiled: m.RequestExtraField[] = [];

  newObj: any;
  editMode: boolean = true;
  title: string = "New";
  isAdmin: boolean = false; 
  requestID: number; 
  employeeID: number;

  //extraFeild
  typeVisa: string;
  typeVisaCode: string = "";
  reason: string;
  reasonCode: string = "";
  fromDate: string;
  toDate: string;    
  days: number = 1;
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
    this.loadVisaDLL();
    this.newObj = this.getEmptyObject();
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
    this.requestID = this.newObj.request.requestID;
   
    this.newObj.request.requestTypeID = enums.RequestTypeId.ExitReEnterVisa;
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

 


// 32	20	FromDate	من تاريخ
// 33	20	ToDate	الى تاريخ
// 34	20	TypeVisa	نوع التاشيرة
// 35	20	Reason	السبب
// 36	20	Justification	ملاحظة
// 71	20	TypeVisaCode	نوع التاشيرة
// 72	20	ReasonCode	السبب
      //extraFiled
      this.addUpdateExtraField(32, dateFromDB);
      this.addUpdateExtraField(33, dateToDB);
      this.addUpdateExtraField(34, this.typeVisa);
      this.addUpdateExtraField(71, this.typeVisaCode);
      this.addUpdateExtraField(35, this.reason);
      this.addUpdateExtraField(72, this.reasonCode); 
      this.addUpdateExtraField(74, this.days); 
      this.addUpdateExtraField(36, this.justification); 
       

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

  private loadVisaDLL() {
    this.sharedService.getSystemCodeCategory(enums.SystemCodeType.Code_VSA).subscribe(
      result => {
        this.visaTypeList =  result;
      },
      error => console.log(error)
    ); 
    this.sharedService.getSystemCodeCategory(enums.SystemCodeType.Code_VSR).subscribe(
      result => {
        this.reasonTypeList =  result;
      },
      error => console.log(error)
    ); 
  }

  
  private loadRequest(requsetId: number) {
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

//       ExtraFieldTypeID	RequestTypeID	ExtraFieldName	ExtraFieldNameAr
// 32	20	FromDate	من تاريخ
// 33	20	ToDate	الى تاريخ
// 34	20	TypeVisa	نوع التاشيرة
// 35	20	Reason	السبب
// 36	20	Justification	ملاحظة
// 71	20	TypeVisaCode	نوع التاشيرة
// 72	20	ReasonCode	السبب
   
      this.typeVisa = this.getExtraFieldValue(34);
      this.typeVisaCode = this.getExtraFieldValue(71);
      this.reason = this.getExtraFieldValue(35);
      this.reasonCode = this.getExtraFieldValue(72);
      this.days = this.getExtraFieldValue(74) != undefined ? Number(this.getExtraFieldValue(74)) : 1;
      this.justification = this.getExtraFieldValue(36);
      this.bsFromDate = this.helpersService.getDate(this.getExtraFieldValue(32));
      this.bsToDate = this.helpersService.getDate(this.getExtraFieldValue(33));
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
    //const time = new Date();
    // this.bsFromDate = time;
    // this.bsToDate = time;
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

  VISATypeselectedValue(event: MatSelectChange) {
    this.typeVisa = event.source.triggerValue;;
  }

 
  ReasonselectedValue(event: MatSelectChange) {
    // this.selectedData = {
    //   value: event.value,
    //   text: event.source.triggerValue
    // };
    this.reason = event.source.triggerValue;
    //console.log(event.source.triggerValue);
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



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
import { SystemCode } from 'app/shared/models/common.model';
import { isNumeric } from 'rxjs/internal-compatibility';
import { MatSelectChange } from '@angular/material/select';

@Component({
  selector: 'app-loan',
  templateUrl: './loan.component.html',
  styleUrls: ['./loan.component.scss']
})
export class LoanComponent implements OnInit {

  request: m.Requests = new m.Requests();

  bsFromDate = new Date();
  empoyeeList: shared.Employee[];
  loanType: SystemCode[];
  attachment: shared.Attachment[] = [];
  extraFiled: m.RequestExtraField[] = [];

  newObj: any;
  editMode: boolean = true;
  title: string = "New";
  isAdmin: boolean = false;
  requestID: number; 
  employeeID: number;

  //extraFeild
  loanTypeID: number;
  loanTypeCode: string = "";
  loanAmount: number;
  loanStartDate: string;
  monthlyInstallment: number;
  noOfInstallmen: number;
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
    this.loadLoanType();
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
    //this.requsetId = -1;
    this.requestID = this.newObj.request.requestID;

    this.newObj.request.requestTypeID = enums.RequestTypeId.LoanRequest;
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
      var dateToDB = _moment(this.bsFromDate).format("DD/MM/YYYY");
      if (!this.sharedService.isCheckDateFormat(dateToDB)) {
        this.alertify.error('FORMATE_DATE_ISNOT_CORRECT');
        return;
      }
      if (this.loanAmount == 0 || this.noOfInstallmen == 0) return;
 

      //extraFiled
      this.addUpdateExtraField(8, this.loanTypeID);
      this.addUpdateExtraField(45, this.loanTypeCode);
      this.addUpdateExtraField(9, dateToDB);//LoanStartDate
      this.addUpdateExtraField(10, Number(this.loanAmount));
      this.addUpdateExtraField(13, Number(this.noOfInstallmen));
      this.addUpdateExtraField(15, this.justification);

      let numb = this.loanAmount / this.noOfInstallmen;
      numb = Number(numb.toFixed(2));
      this.monthlyInstallment = numb;
      this.addUpdateExtraField(12, numb);
      // this.newObj.amendments[0].fromDate = dateToDB;// "02/02/2018";

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

  private loadLoanType() {
    this.sharedService.getLoanTypes().subscribe(
      result => {
        this.loanType = result;
      },
      error => console.log(error)
    );
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


      this.loanTypeID = this.getExtraFieldValue(8) != undefined ? Number(this.getExtraFieldValue(8)) : 0;
      this.loanAmount = this.getExtraFieldValue(10) != undefined ? Number(this.getExtraFieldValue(10)) : 0;
      this.monthlyInstallment = this.getExtraFieldValue(12) != undefined ? Number(this.getExtraFieldValue(12)) : 0;
      this.noOfInstallmen = this.getExtraFieldValue(13) != undefined ? Number(this.getExtraFieldValue(13)) : 0;
      this.bsFromDate = this.helpersService.getDate(this.getExtraFieldValue(9));


      this.justification = this.getExtraFieldValue(15);

    }
    catch (error) {

    }

  }

  getNextPrivateNumber() {
    this.requestService.getNextPrivateNumber().subscribe(
      (data) => {
        this.newObj.request.requsetPrivateNumber= data;
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


  employeeSelect(employeeID: any) {
    this.employeeID = employeeID;
  }

  amountChangeFn(value) {
    if (isNumeric(value)) {
      if (isNumeric(this.noOfInstallmen)) {
        let numb = Number(value) / this.noOfInstallmen;
        numb = Number(numb.toFixed(2));
        this.monthlyInstallment = numb;
      }
    } else {
      this.monthlyInstallment = 0;
      this.noOfInstallmen = 0;
    }

  }
  noOfInstallmenChangeFn(value) {
    if (isNumeric(value)) {
      if (isNumeric(this.loanAmount)) {
        let numb = this.loanAmount / Number(value);
        numb = Number(numb.toFixed(2));
        this.monthlyInstallment = numb;

      }

    } else {
      this.loanAmount = 0;
      this.noOfInstallmen = 0;
    }
  }

  selectedValue(event: MatSelectChange) {
    // this.selectedData = {
    //   value: event.value,
    //   text: event.source.triggerValue
    // };
    this.loanTypeCode = event.source.triggerValue;
    //console.log(event.source.triggerValue);
  }


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

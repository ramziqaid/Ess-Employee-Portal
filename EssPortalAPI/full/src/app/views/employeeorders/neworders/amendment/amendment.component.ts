

import { Component, OnInit, SimpleChanges, OnChanges, ViewChild, ElementRef } from '@angular/core';
import * as m from '../../Models/Request';
import { RequestService } from '../../Services/Request.service';
import * as shared from '@app//shared/models/common.model';
import { Router, ActivatedRoute } from '@angular/router';
import { CommonService } from '@app/shared/services/common.service';
import { AuthService } from '@app/shared/services/auth/auth.service';
import { AlertifyService } from '@app/shared/services/alertify.service';
import { RequestTypeId, RequestStatus } from '@app/shared/enums/common.enum';
import { Observable } from 'rxjs';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { startWith, map } from 'rxjs/operators';


@Component({
  selector: 'app-amendment',
  templateUrl: './amendment.component.html',
  styleUrls: ['./amendment.component.scss']
})
export class AmendmentComponent implements OnInit {

  request: m.Requests = new m.Requests();

  bstime = new Date();
  bsFromDate = new Date();
  emendmentReason: m.AmendmentReason[];
  attachment: shared.Attachment[] = [];
  empoyeeList: shared.Employee[];
  filteredEmployee: Observable<shared.Employee[]>;

  newObj: any;
  editMode: boolean = false;
  title: string = "New";
  requsetId: number;
  _dateValue: string = "12/02/2020";

  @ViewChild('basicForm', { static: false }) basicForm: any;
  @ViewChild('time', { static: false }) time: any;
  @ViewChild('FromDate', { static: true }) FromDate: ElementRef;
  //@ViewChild(ActionBarComponent, { static: false }) actionBar: ActionBarComponent;

  constructor(private sharedService: CommonService,
    private requestService: RequestService,
    private authService: AuthService,
    private _avRoute: ActivatedRoute,
    private alertify: AlertifyService) {

    if (this._avRoute.snapshot.params["RequestID"]) {
      this.requsetId = this._avRoute.snapshot.params["RequestID"];
    }
  }

  ngOnInit() {

    this.loadEmployees();
    this.loadAmendmentReasons();
    this.newObj = this.getEmptyObject();

    if (this.requsetId > 0) {
      this.title = "Edit";
      this.loadRequest(this.requsetId);
    }
  }

  onSubmit() {
    this.save();
  }

  //#region "actionBar"

  newClick() {
    this.editMode = false;
    this.newObj = this.getEmptyObject();
    this.requsetId = -1;
  }
  edit() {
    this.editMode = false;
  }

  save() {

    if (this.basicForm.valid) {

      this.newObj.request.requestTypeID = RequestTypeId.Amendment;
      this.newObj.request.statusID = RequestStatus.NewRequest;
      this.authService.currentUserName.subscribe(user => { this.newObj.request.createdBy = user });
      this.newObj.amendments[0].time = `${this.time.hours}:${this.time.minutes}`; // "02:02";// this.meridian;
      this.newObj.amendments[0].fromDate = this.FromDate.nativeElement.value;// "02/02/2018";

      this.requestService.saveRequest(this.newObj).subscribe((data) => {
        this.alertify.success('Save successful');
        this.basicForm.reset();
        this.newObj = data;

        this.requsetId = this.newObj.requestID;

        this.loadRequest(this.requsetId);
        this.editMode = true;
        //this.actionBar.editMode();
      }, error => {
        this.alertify.error(error);
      }
      );
    }
  }

  delete() {
    if (this.requsetId > 0) {
      this.alertify.confirm('Are you sure you want Delete Order?', () => {
        this.requestService.deleteRequest(this.requsetId).subscribe(
          result => {
            this.alertify.success("Done . . .");
            this.reset();
          },
          error => { this.alertify.error(error); }
        );
      });
    }
  }


  reset() {
    this.editMode = true;
    this.basicForm.reset();
    this.requsetId = -1;
  }
  //#endregion

  //#region load

  private _filterStates(value: string): shared.Employee[] {
    const filterValue = value.toLowerCase();
    return this.empoyeeList.filter(state => state.englishName.toLowerCase().indexOf(filterValue) === 0);
  }

  getTitle(bookId: string) {
    return this.empoyeeList.filter(book => book.employeeID.toString() === bookId)[0].englishName;
  }

  private loadEmployees() {
    this.sharedService.getEmployees().subscribe(
      result => {
        this.empoyeeList = result;
      },
      error => console.log(error)
    );
  }

  clearEmployees() {
    this.newObj.request.employeeID = "";
  }

  private loadAmendmentReasons() {
    this.requestService.getAmendmentReasons().subscribe(
      result => {
        this.emendmentReason = result;
      },
      error => console.log(error)
    );
  }

  private getEmptyObject(): any {
    const obj = {
      request: {
        //RequestID: -1,
        employeeID: null,
        requestTypeID: null,
        statusID: null,
        createdBy: null,
      },
      amendments: [],
      requestStages: []
    };
    obj.amendments[0] = new m.Amendments();
    obj.amendments[0].Type = "CheckIn";
    obj.amendments[0].amendmentReasonId = -1;

    const time = new Date();
    this.bstime = time;
    this.bsFromDate = time;

    obj.requestStages[0] = new m.RequestStage();

    return obj;

  };

  loadRequest(requsetId: number) {
    this.requestService.getRequest(requsetId).subscribe(
      (date) => {

        this.newObj.request = date.request;
        this.newObj.amendments = date.amendments;
        this.newObj.requestStages = date.requestStages;

        this.bsFromDate = new Date(this.newObj.amendments[0].fromDate);
        const time = new Date();

        if (this.newObj.amendments[0].time !== 'undefined') {
          const h = this.newObj.amendments[0].time;
          time.setHours(h.substring(0, 2));
          time.setMinutes(h.substring(3, 5));
        }
        this.bstime = time;
        //if (this.actionBar) { this.actionBar.editMode() };
      }, error => {
        this.alertify.error(error);
      }
    );
  }

  employeeSelect(employeeID: any) {
    this.newObj.request.employeeID = employeeID;
  }

  uploadFinished(attachmentID: string) {
    if (attachmentID != undefined) {
      var dtl = new shared.Attachment;
      dtl.attachmentID = +attachmentID;
      dtl.fileName = "fileName";
      dtl.fileType = "fileType";
      if (this.newObj.attachments === undefined || this.newObj.attachments === null) {
        this.newObj.attachments = this.attachment;
      }
      this.newObj.attachments.push(dtl);
      //console.log(attachmentID);
    }
  }
  //#endregion
}

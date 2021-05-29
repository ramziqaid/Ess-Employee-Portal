
import { ActionBarComponent } from './../../../actionBar/actionBar.component';
import { Component, OnInit, SimpleChanges, OnChanges, ViewChild, ElementRef } from '@angular/core';
import * as m from '../../Models/Request';
import { RequestService } from '../../Services/Request.service';
import * as shared from './../../../../Shared/index';
import { EssPortalService, AlertifyService, AuthService } from '../../../../core';
import { Router, ActivatedRoute } from '@angular/router';
import { Attachment } from './../../../../Shared/index';


@Component({
  selector: 'app-exitReEnterVisa',
  templateUrl: './exitReEnterVisa.component.html',
  styleUrls: ['./exitReEnterVisa.component.scss']
})
export class ExitReEnterVisaComponent implements OnInit {

  request: m.Requests = new m.Requests();

  bstime = new Date();
  bsFromDate = new Date();
  attachment: Attachment[] = [];
  vactionTypes: any[];

  newObj: any;
  editMode: boolean = true;
  title: string = "New";
  requsetId: number;
  daterangepickerModel: Date[];

  @ViewChild('heroForm', { static: false }) heroForm: any;
  @ViewChild('FromDate', { static: true }) FromDate: ElementRef;
  @ViewChild(ActionBarComponent, { static: false }) actionBar: ActionBarComponent;

  constructor(private sharedService: EssPortalService,
    private requestService: RequestService,
    private authService: AuthService,
    private _avRoute: ActivatedRoute,
    private alertify: AlertifyService) {

    if (this._avRoute.snapshot.params["RequestID"]) {
      this.requsetId = this._avRoute.snapshot.params["RequestID"];
    }
  }

  ngOnInit() {
    this.loadVacationTypes();
    this.newObj = this.getEmptyObject();

    if (this.requsetId > 0) {
      this.title = "Edit";
      this.loadRequest(this.requsetId);
    }

  }
  onSubmit() {

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

    if (this.heroForm.valid) {

      this.newObj.request.requestTypeID = shared.RequestTypeId.Amendment;
      this.newObj.request.statusID = shared.RequestStatus.NewRequest;
      this.authService.currentUserName.subscribe(user => { this.newObj.request.createdBy = user });

      this.newObj.leave[0].fromDate = this.FromDate.nativeElement.value;// "02/02/2018";

      this.requestService.saveRequest(this.newObj).subscribe((data) => {
        this.alertify.success('Save successful');
        this.heroForm.reset();
        this.newObj = data;

        this.requsetId = this.newObj.requestID;

        this.loadRequest(this.requsetId);
        this.editMode = true;
        this.actionBar.editMode();
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
    this.heroForm.reset();
    this.requsetId = -1;
  }
  //#endregion

  //#region load


  private loadVacationTypes() {
    this.sharedService.getVacationTypes().subscribe(
      result => {
        this.vactionTypes = result;
      },
      error => { this.alertify.error(error); }
    );
  }

  private getEmptyObject(): any {
    const obj = {
      request: {
        employeeID: null,
        requestTypeID: null,
        statusID: null,
        createdBy: null,
      },
      leave: []
    };
    obj.leave[0] = new m.Leave();

    const time = new Date();
    this.bstime = time;
    this.bsFromDate = time;

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
        if (this.actionBar) { this.actionBar.editMode() };
      }, error => {
        this.alertify.error(error);
      }
    );
  }

  employeeSelect(employeeID: any) {
    this.newObj.request.employeeID = employeeID;
  }

  employeereplacmentSelect(employeeID: any) {
    this.newObj.leave[0].replacmentStuffID = employeeID;
  }


  uploadFinished(attachmentID: string) {
    if (attachmentID != undefined) {
      var dtl = new Attachment;
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

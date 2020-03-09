
import { Component, OnInit, SimpleChanges, OnChanges, ViewChild, ElementRef } from '@angular/core';
import * as m from '../../Models/Request';
import { RequestService } from '../../Services/Request.service';
import * as shared from './../../../../Shared/index';
import { EssPortalService, AlertifyService, AuthService } from '../../../../core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-amendment',
  templateUrl: './amendment.component.html',
  styleUrls: ['./amendment.component.scss']
})
export class AmendmentComponent implements OnInit, OnChanges {

  ngOnChanges(changes: SimpleChanges): void {
    throw new Error("Method not implemented.");
  }

  request: m.Requests = new m.Requests();
  //amendments: m.Amendments = new m.Amendments();
  // requestStages: m.RequestStage = new m.RequestStage();

  bstime = new Date();
  bsFromDate = new Date();
  empoyeeList: shared.Employee[];
  emendmentReason: m.AmendmentReason[];
  newObj: any;
  editMode: boolean = true;
  title: string = "New";
  requsetId: number;

  @ViewChild('heroForm', { static: false }) heroForm: any;
  @ViewChild('time', { static: false }) time: any;
  @ViewChild('FromDate', { static: true }) FromDate: ElementRef;


  constructor(private sharedService: EssPortalService,
    private requestService: RequestService,
    private authService: AuthService,
    private _avRoute: ActivatedRoute,
    private alertify: AlertifyService) {

    if (this._avRoute.snapshot.params["RequestID"]) {
      // debugger;
      this.requsetId = this._avRoute.snapshot.params["RequestID"];
    }
  }

  ngOnInit() {
    this.loadEmployees();
    this.loadAmendmentReasons();
    this.newObj = this.getEmptyObject();


    if (this.requsetId > 0) {
      this.title = "Edit";
      this.requestService.getRequest(this.requsetId).subscribe(
        (date) => {
          this.newObj.request = date;
          this.newObj.Amendments = date['Amendments'];
          this.newObj.RequestStages = date['RequestStages'];

          this.bsFromDate = new Date(this.newObj.Amendments[0].FromDate);
          const time = new Date();

          if (this.newObj.Amendments[0].Time !== 'undefined') {
            time.setHours(this.newObj.Amendments[0].Time.substring(0, 2));
            time.setMinutes(this.newObj.Amendments[0].Time.substring(2, 2));
          }
          this.bstime = time;

        }, error => {
          this.alertify.error(error);
        }
      );
    }

  }



  onSubmit() {

  }

  //#region "actionBar"

  newClick() {
    this.editMode = false;
    this.newObj = this.getEmptyObject();

    // this.newObj.Amendments = [];
    // this.newObj.Amendments[0] = this.amendments;
    //this.newObj.RequestStages = [];
    //this.newObj.RequestStages[0] = this.requestStages;



  }
  edit() {
    this.editMode = false;
  }

  save() {
    this.newObj;
    if (this.heroForm.valid) {

      this.newObj.request.RequestTypeID = shared.RequestTypeId.Amendment;
      this.newObj.request.StatusID = shared.RequestStatus.NewRequest;
      this.authService.currentUserName.subscribe(user => { this.newObj.request.CreatedBy = user });

      this.newObj.Amendments[0].Time = `${this.time.hours}:${this.time.minutes}`; // "02:02";// this.meridian;
      this.newObj.Amendments[0].FromDate = this.FromDate.nativeElement.value;// "02/02/2018";

      this.newObj.RequestStages[0].StageTypeID = shared.RequestStatus.NewRequest;
      this.newObj.RequestStages[0].EmployeeID = this.newObj.request.EmployeeID;// this.authService.userEmployeeId;
      this.newObj.RequestStages[0].ActionName = shared.ActionName.Submit;

      // this.newObj.request = this.request;
      // this.newObj.Amendments = [];
      // this.newObj.Amendments[0] = this.amendments;
      // this.newObj.RequestStages = [];
      // this.newObj.RequestStages[0] = this.requestStages;
      //this.newObj = { request: this.request, amendments: this.amendments };

      this.requestService.saveRequest(this.newObj).subscribe((data) => {
        this.alertify.success('Save successful');
        this.heroForm.reset();
      }, error => {
        this.alertify.error(error);
      }
      );
    }

  }

  delete() {

  }

  reset() {
    this.editMode = true;
    this.heroForm.reset();
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
        RequestID: -1,
        EmployeeID: null,
        RequestTypeID: null,
        StatusID: null,
        CreatedBy: null,
        // currencyIDs: []
      },
      Amendments: [],
      RequestStages: []
    };
    obj.Amendments[0] = new m.Amendments();
    obj.Amendments[0].Type = "CheckIn";

    const time = new Date();
    this.bstime = time;
    this.bsFromDate = time;

    return obj;

  };
  //#endregion

}

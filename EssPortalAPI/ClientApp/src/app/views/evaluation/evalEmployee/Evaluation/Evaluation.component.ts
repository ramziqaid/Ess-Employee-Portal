
import { DateAdapter } from '@angular/material/core';
import { Component, OnInit, SimpleChanges, OnChanges, ViewChild, ElementRef } from '@angular/core';
import { EvaluationService } from './../../Services/Evaluation.service';
import { EssPortalService, AlertifyService, AuthService } from '../../../../core';
import { Router, ActivatedRoute } from '@angular/router';
import * as shared from 'app/shared/models/common.model';
import * as enums from 'app/shared/enum.enum';
import { ActionBarComponent } from 'app/shared/UI/action-Bar/actionBar.component';
import * as _moment from 'moment';
import { SystemCode } from 'app/shared/models/common.model';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { EmployeeComponent } from 'app/shared/UI/employee/employee.component';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { ReportViewerComponent } from 'app/views/popup/reportviewer/report-viewer';


@Component({
  selector: 'app-Evaluation',
  templateUrl: './Evaluation.component.html',
  styleUrls: ['./Evaluation.component.scss']
})
export class EvaluationComponent implements OnInit {
  newObj: any;
  empoyeeList: shared.Employee[];
  evalPeriod: any[];
  evalCommunity: any[];
  evalChartCommunity: any;
  evalDegree: any[];
  attachment: shared.Attachment[] = [];

  displayedColumns1: string[] = ['index', 'evalCharterDetails', 'evalCharterDetailsItems', 'degree', 'weight'];

  editMode: boolean = true;
  editModeDTL: boolean = true;
  title: string = "New";
  isAdmin: boolean = false;

  showNew: boolean = true;
  showEdit: boolean = true;
  showSave: boolean = true;
  showDelete: boolean = true;
  showCancel: boolean = true;
  showPrint: boolean = true;
  showApprovCancelBox = false;
  isShowEmployeeApproval = false;
  isShowEmployeeCancelApproval = false;
  isShowManagerApproval = false;
  isShowManagerCancelApproval = false;
  isShowManagerReject = false;
  isShowHRApproval = false;
  isShowHRReject = false;

  //varabiles
  evaluationID: number;
  employeeID: number;
  evalPeriodID: number;
  evalCommunityID: number;
  evalCharterID: number;
  fromDate: string;
  notes: string;


  @ViewChild('heroForm', { static: false }) heroForm: any;
  @ViewChild(ActionBarComponent, { static: false }) actionBar: ActionBarComponent;
  @ViewChild('paginator1') paginator1: MatPaginator;
  @ViewChild(MatSort) sort1: MatSort;
  @ViewChild('employeeList', { static: false }) employeeList: EmployeeComponent;

  constructor(private sharedService: EssPortalService,
    private evalService: EvaluationService,
    private authService: AuthService,
    private _avRoute: ActivatedRoute,
    private router: Router,
    private dialog: MatDialog,
    private alertify: AlertifyService,
    private dateAdapter: DateAdapter<Date>) {

    if (this._avRoute.snapshot.params["EvaluationID"]) {
      this.evaluationID = this._avRoute.snapshot.params["EvaluationID"];
    }
    this.dateAdapter.setLocale('en-GB'); //dd/MM/yyyy
    this.showActionBar(true);

  }


  ngOnInit() {
    this.loadEmployees();
    this.loadEvalYear();
    this.isAdmin = this.authService.isAdminUser;

    if (this.evaluationID > 0) {
      this.loadEvalResult(this.evaluationID);

    }

  }

  onSubmit() {
  }

  //#region "actionBar"

  newClick() {
    this.editMode = false;
    this.editModeDTL = false;
    this.employeeID = this.authService.logginEmployeeId();
    this.newObj = this.getEmptyObject();
    this.evaluationID = this.newObj.evaluationVM.evaluationID;
    this.showApprovCancelBox = false;
  }

  edit() {
    this.editMode = true;
    this.editModeDTL = false;
    this.showApprovCancelBox = false;
  }


  save() {

    this.findInvalidControls();
    if (this.heroForm.valid) {

      if (this.evaluationID < 0) {
        if (this.evalCharterID) {
          this.newObj.evaluationVM.evaluationID = -1;
          this.newObj.evaluationVM.evalCharterID = this.evalCharterID;
          this.newObj.evaluationVM.employeeID = this.employeeID;
          this.newObj.evalCharterCommunityItemsVM = this.evalChartCommunity.data;

          this.evalService.insertEvaluation(this.newObj).subscribe((data) => {
            this.alertify.success('SAVED_SUCCESSFULLY');
            this.reset();
            // this.heroForm.reset();
            // this.newObj = data;
            // this.evaluationID = this.newObj.evaluationID; 
            // this.loadEvalResult(this.evaluationID); 
            // this.actionBar.editMode();

          }, error => {
            this.alertify.error(error);
          }
          );
        }

      } else {
        this.newObj.evalCharterCommunityItemsVM = this.evalChartCommunity.data;

        this.evalService.updateEvaluation(this.newObj).subscribe((data) => {
          this.alertify.success('SAVED_SUCCESSFULLY');
          this.reset();
        }, error => {
          this.alertify.error(error);
        }
        );
      }

    }
  }

  delete() {
    if (this.evaluationID > 0) {
      this.alertify.confirm('DO_YOU_WANT_DELETE', () => {
        this.evalService.deleteEvaluation(this.evaluationID).subscribe(
          result => {
            this.alertify.success("DELETED_SUCCESSFULLY");
            this.reset();
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
    let path: string = "/Evaluation/EvalList";
    this.router.navigate([path])
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
    // var isHRUser:boolean=false;
    // this.sharedService.checkEmployeeIsHR(this.authService.logginEmployeeId()).subscribe(
    //   result => { 
    //     isHRUser=result; 
    //     if(isHRUser){
    //       this.employeeList.loadAllEmployee=true; 
    //     } 
    //     this.employeeList.getEmployees();
    //   },
    //   //error => console.log(error)
    // );  
  }

  private loadEvalYear() {
    this.evalService.getEvalPeriodInfo().subscribe(
      result => {
        this.evalPeriod = result;
      },
      //error => console.log(error)
    );
    this.evalService.getEvalCommunityInfo().subscribe(
      result => {
        this.evalCommunity = result;
      },
      //error => console.log(error)
    );
    this.evalService.getSystemCode(enums.SystemCodeType.Code_EVD).subscribe(
      result => {
        this.evalDegree = result;
      },
      error => console.log(error)
    );
  }



  private loadEvalCommunityInfo() {

    if (this.employeeID != undefined && this.evalPeriodID != undefined && this.evalCommunityID != undefined &&
      this.evalPeriodID != -1 && this.evalCommunityID != -1) {
      this.evalService.searchEvaluationInfo(this.evalPeriodID, -1, this.employeeID, -1).subscribe(
        result3 => {
          if (result3.length == 0) {
            this.evalService.getEvalCommunityEmployeeInfo(this.employeeID, this.evalCommunityID).subscribe(
              result => {
                if (result.length > 0) {

                  this.evalService.getEvalCharterCommunityInfo(this.employeeID, this.evalPeriodID, this.evalCommunityID).subscribe(
                    result2 => {
                      if (result2.length > 0) {
                        //this.evalChartCommunity = result2;
                        this.evalCharterID = result2[0].evalCharterID;

                        this.evalChartCommunity = new MatTableDataSource(result2);
                        this.evalChartCommunity.paginator = this.paginator1;
                        this.evalChartCommunity.sort = this.sort1;
                      } else {
                        this.showMessage(1);
                      }
                    },
                    error => {
                      this.showMessage(1);
                    }
                  );
                } else {
                  this.showMessage(1);
                }
              },
              error => {
                this.showMessage(1);
              }
            );
          } else {
            this.showMessage(2);
          }

        },
        error => { this.alertify.error(error); }
      );


    }
  }

  private loadEvalResult(evaluationID: number) {
    this.newObj = this.getEmptyObject();
    this.evalService.getEvalResultInfo(evaluationID).subscribe(
      (data) => {
        this.bindData(data);
      },
      error => {
        this.alertify.error(error);
      }
    );
  }

  private showMessage(i: number) {
    switch (i) {
      case 1:
        this.alertify.error("EMPLOYEE_ISNOT_IN_COMMUNITIES");
        this.evalPeriodID = -1;
        this.evalCommunityID = -1;
        this.evalCharterID = -1;
        this.evalChartCommunity = new MatTableDataSource([]);
        break;
      case 2:
        this.alertify.error("EVALUATION_IS_ENTER_EMPLOYEE_INTHIS_PERIOD");
        this.evalPeriodID = -1;
        this.evalCommunityID = -1;
        this.evalCharterID = -1;
        this.evalChartCommunity = new MatTableDataSource([]);
        break;
    }
  }

  private showActionBar(pFlage: boolean) {
    this.showNew = pFlage;
    this.showEdit = pFlage;
    this.showSave = pFlage;
    this.showDelete = pFlage;
    this.showCancel = pFlage;
    if (this.evaluationID > 0) {
      this.showPrint = true;
    } else {
      this.showPrint = false;
    }
  }

  private bindData(data: any) {
    this.newObj.evaluationVM = data.evaluationVM;
    this.newObj.evalCharterCommunityItemsVM = data.evalCharterCommunityItemsVM;
    this.evaluationID = this.newObj.evaluationVM.evaluationID;
    this.employeeID = this.newObj.evaluationVM.employeeID;
    this.evalPeriodID = this.newObj.evaluationVM.evalPeriodID;
    this.evalCommunityID = this.newObj.evaluationVM.evalCommunityID;
    this.fromDate = this.newObj.evaluationVM.createdDate;
    this.notes = this.newObj.evaluationVM.notes;

    this.evalChartCommunity = new MatTableDataSource(this.newObj.evalCharterCommunityItemsVM);
    this.evalChartCommunity.paginator = this.paginator1;
    this.evalChartCommunity.sort = this.sort1;

    this.showActionBar(false);
    this.showApprovCancelBox = false;
    this.isShowEmployeeApproval = false;
    this.isShowEmployeeCancelApproval = false;
    this.isShowManagerApproval = false;
    this.isShowManagerCancelApproval = false;
    this.isShowManagerReject = false;
    this.isShowHRApproval = false;
    this.isShowHRReject = false;
    if (this.newObj.evaluationVM.userID == this.authService.logginUserID()) {
      if (this.newObj.evaluationVM.evaluationStautsID == 1 || this.newObj.evaluationVM.evaluationStautsID == 5) {
        this.showActionBar(true);
        if (this.actionBar) {
          this.actionBar.editMode();
        }
        this.isShowEmployeeApproval = true;
        this.showApprovCancelBox = true;
      } else if (this.newObj.evaluationVM.evaluationStautsID == 2) {
        this.isShowEmployeeCancelApproval = true;
        this.showApprovCancelBox = true;
      }

    } else if (this.newObj.evaluationVM.managerID == this.authService.logginEmployeeId()) {
      if (this.newObj.evaluationVM.evaluationStautsID == 2 || this.newObj.evaluationVM.evaluationStautsID == 7) {
        this.showActionBar(true);
        if (this.actionBar) {
          this.actionBar.editMode();
        }
        this.isShowManagerApproval = true;
        this.isShowManagerReject = true;
        this.showApprovCancelBox = true;
      } else if (this.newObj.evaluationVM.evaluationStautsID == 4) {
        this.isShowManagerCancelApproval = true;
        this.showApprovCancelBox = true;
      }
    } else {
      if (this.sharedService.checkEmployeeIsHR(this.authService.logginEmployeeId())) {
        if (this.newObj.evaluationVM.evaluationStautsID == 4) {
          this.isShowHRApproval = true;
          this.isShowHRReject = true;
          this.showApprovCancelBox = true;
        }
      }
    }

  }


  //#endregion

  private getEmptyObject(): any {
    const obj = {
      evaluationVM: {
        evaluationID: -1,
        evalCharterID: null,
        employeeID: null,
        employeeApproval: null,
        HRApproval: null,
        userID: this.authService.logginUserID(),
        notes: null
      },
      evalCharterCommunityItemsVM: []
    };
    // this.evalPeriodID=-1;  
    // this.evalCommunityID=-1;   
    this.fromDate = this.sharedService.getCurrentDate();

    this.evalChartCommunity = new MatTableDataSource(obj.evalCharterCommunityItemsVM);
    this.evalChartCommunity.paginator = this.paginator1;
    this.evalChartCommunity.sort = this.sort1;

    return obj;
  };




  //#region  events

  employeeSelect(employeeID: any) {
    this.employeeID = employeeID;
  }

  evalCommunityChange(ob) {
    this.evalCommunityID = ob.value;
    this.loadEvalCommunityInfo();
  }

  evalPeriodChange(ob) {
    this.evalPeriodID = ob.value;
    this.loadEvalCommunityInfo();
  }

  approvalRejectAction(Id: Number) {

    var vm: any = {
      evaluationID: this.evaluationID,
      employeeID: this.authService.logginEmployeeId(),
      employeeApproval: -1,
      managerApproval: -1,
      managerApprovalID: undefined,
      hRApproval: -1,
      hRApprovalID: undefined,
      userID: this.authService.logginUserID(),
      notes: undefined
    };


    switch (Id) {
      case 1:
        vm.employeeApproval = 1;
        break;
      case 2:
        vm.employeeApproval = 0;
        break;
      case 3:
        vm.managerApproval = 1;
        vm.managerApprovalID = this.authService.logginEmployeeId();
        break;
      case 4:
        vm.managerApproval = 0;
        break;
      case 5:
        // this.alertify.confirm('DO_YOU_WANT_APPROVAL_ORDER', () => {

        // });  
        if (this.notes == undefined || this.notes.length == 0) {
          this.alertify.error("MSG_REASON_REJECTION_MUST_ENTERED");
          return;
        }
        vm.managerApproval = 2;
        vm.notes = this.notes;
        vm.managerApprovalID = this.authService.logginEmployeeId();
        break;
      case 6:
        vm.hRApproval = 1;
        vm.hRApprovalID = this.authService.logginEmployeeId();
        break;
      case 7:
        if (this.notes == undefined || this.notes.length == 0) {
          this.alertify.error("MSG_REASON_REJECTION_MUST_ENTERED");
          return;
        }
        vm.hRApproval = 0;
        vm.notes = this.notes;
        vm.hRApprovalID = this.authService.logginEmployeeId();
        break;
    }
    this.evalService.approveRejectEvaluation(vm).subscribe(
      result => {
        this.alertify.success("SAVED_SUCCESSFULLY");
        this.reset();
      },
      error => { this.alertify.error(error); }
    );
  }


  printPopUp(data: any = {}) {

    let dialogRef: MatDialogRef<any> = this.dialog.open(ReportViewerComponent, {
      width: '1000px',
      disableClose: true,
      data: {
        Id: 1,
        EvaluationID: this.evaluationID,
        currentLang: this.authService.currentLang
      }
    })
    dialogRef.afterClosed()
      .subscribe(res => {
        if (!res) {
          // If user press cancel
          return;
        }
        // this.loader.open();
        // this.items = data;
        // this.loader.close();
        // this.snack.open('Member Added!', 'OK', { duration: 4000 })         
      })
  }

  //#endregion


}


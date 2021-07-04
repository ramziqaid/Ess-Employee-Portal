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
import { Component, ViewChild } from '@angular/core';
import { EvaluationService } from './../../Services/Evaluation.service';
import { EssPortalService, AlertifyService, AuthService } from '../../../../core';
import { Router, ActivatedRoute } from '@angular/router';
import * as enums from 'app/shared/enum.enum';
import { ActionBarComponent } from 'app/shared/UI/action-Bar/actionBar.component';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { EmployeeComponent } from 'app/shared/UI/employee/employee.component';
let EvaluationComponent = class EvaluationComponent {
    constructor(sharedService, evalService, authService, _avRoute, router, alertify, dateAdapter) {
        this.sharedService = sharedService;
        this.evalService = evalService;
        this.authService = authService;
        this._avRoute = _avRoute;
        this.router = router;
        this.alertify = alertify;
        this.dateAdapter = dateAdapter;
        this.attachment = [];
        this.displayedColumns1 = ['index', 'evalCharterDetails', 'evalCharterDetailsItems', 'degree'];
        this.editMode = true;
        this.editModeDTL = true;
        this.title = "New";
        this.isAdmin = false;
        this.showActionBar = true;
        this.showApprovCancelBox = false;
        this.isShowEmployeeApproval = false;
        this.isShowEmployeeCancelApproval = false;
        this.isShowManagerApproval = false;
        this.isShowManagerCancelApproval = false;
        this.isShowManagerReject = false;
        this.isShowHRApproval = false;
        this.isShowHRReject = false;
        if (this._avRoute.snapshot.params["EvaluationID"]) {
            this.evaluationID = this._avRoute.snapshot.params["EvaluationID"];
        }
        this.dateAdapter.setLocale('en-GB'); //dd/MM/yyyy
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
        this.evaluationID = this.newObj.evaluation.evaluationID;
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
                this.newObj.evaluation.evaluationID = -1;
                this.newObj.evaluation.evalCharterID = this.evalCharterID;
                this.newObj.evaluation.employeeID = this.employeeID;
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
                });
            }
            else {
                this.newObj.evalCharterCommunityItemsVM = this.evalChartCommunity.data;
                this.evalService.updateEvaluation(this.newObj).subscribe((data) => {
                    this.alertify.success('SAVED_SUCCESSFULLY');
                    this.reset();
                }, error => {
                    this.alertify.error(error);
                });
            }
        }
    }
    delete() {
        // if (this.evaluationID > 0) {
        //   this.alertify.confirm('DO_YOU_WANT_DELETE_ORDER', () => {
        //     this.requestService.deleteRequest(this.evaluationID).subscribe(
        //       result => {
        //         this.alertify.success("DELETED_SUCCESSFULLY");
        //         this.reset();
        //       },
        //       error => { this.alertify.error(error); }
        //     );
        //   });
        // }
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
        let path = "/Evaluation/EvalList";
        this.router.navigate([path]);
    }
    //#endregion
    //#region load
    loadEmployees() {
        this.sharedService.getEmployees().subscribe(result => {
            this.empoyeeList = result;
        }, error => console.log(error));
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
    loadEvalYear() {
        this.evalService.getEvalPeriodInfo().subscribe(result => {
            this.evalPeriod = result;
        });
        this.evalService.getEvalCommunityInfo().subscribe(result => {
            this.evalCommunity = result;
        });
        this.evalService.getSystemCode(enums.SystemCodeType.Code_EVD).subscribe(result => {
            this.evalDegree = result;
        }, error => console.log(error));
    }
    loadEvalCommunityInfo() {
        if (this.employeeID != undefined && this.evalPeriodID != undefined && this.evalCommunityID != undefined &&
            this.evalPeriodID != -1 && this.evalCommunityID != -1) {
            this.evalService.searchEvaluationInfo(this.evalPeriodID, -1, this.employeeID, -1).subscribe(result3 => {
                if (result3.length = 0) {
                    this.evalService.getEvalCommunityEmployeeInfo(this.employeeID, this.evalCommunityID).subscribe(result => {
                        if (result.length > 0) {
                            this.evalService.getEvalCharterCommunityInfo(this.employeeID, this.evalPeriodID, this.evalCommunityID).subscribe(result2 => {
                                if (result2.length > 0) {
                                    //this.evalChartCommunity = result2;
                                    this.evalCharterID = result2[0].EvalCharterID;
                                    this.evalChartCommunity = new MatTableDataSource(result2);
                                    this.evalChartCommunity.paginator = this.paginator1;
                                    this.evalChartCommunity.sort = this.sort1;
                                }
                                else {
                                    this.showMessage(1);
                                }
                            }, error => {
                                this.showMessage(1);
                            });
                        }
                        else {
                            this.showMessage(1);
                        }
                    }, error => {
                        this.showMessage(1);
                    });
                }
                else {
                    this.showMessage(2);
                }
            }, error => { this.alertify.error(error); });
        }
    }
    loadEvalResult(evaluationID) {
        this.newObj = this.getEmptyObject();
        this.evalService.getEvalResultInfo(evaluationID).subscribe((data) => {
            this.bindData(data);
        }, error => {
            this.alertify.error(error);
        });
    }
    showMessage(i) {
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
    bindData(data) {
        this.newObj.evaluation = data.evaluationVM;
        this.newObj.evalCharterCommunityItemsVM = data.evalCharterCommunityItemsVM;
        this.evaluationID = this.newObj.evaluation.evaluationID;
        this.employeeID = this.newObj.evaluation.employeeID;
        this.evalPeriodID = this.newObj.evaluation.evalPeriodID;
        this.evalCommunityID = this.newObj.evaluation.evalCommunityID;
        this.fromDate = this.newObj.evaluation.createdDate;
        this.notes = this.newObj.evaluation.notes;
        this.evalChartCommunity = new MatTableDataSource(this.newObj.evalCharterCommunityItemsVM);
        this.evalChartCommunity.paginator = this.paginator1;
        this.evalChartCommunity.sort = this.sort1;
        debugger;
        this.showActionBar = false;
        this.showApprovCancelBox = false;
        this.isShowEmployeeApproval = false;
        this.isShowEmployeeCancelApproval = false;
        this.isShowManagerApproval = false;
        this.isShowManagerCancelApproval = false;
        this.isShowManagerReject = false;
        this.isShowHRApproval = false;
        this.isShowHRReject = false;
        if (this.newObj.evaluation.userID == this.authService.logginUserID()) {
            if (this.newObj.evaluation.evaluationStautsID == 1 || this.newObj.evaluation.evaluationStautsID == 5) {
                this.showActionBar = true;
                if (this.actionBar) {
                    this.actionBar.editMode();
                }
                this.isShowEmployeeApproval = true;
                this.showApprovCancelBox = true;
            }
            else if (this.newObj.evaluation.evaluationStautsID == 2) {
                this.isShowEmployeeCancelApproval = true;
                this.showApprovCancelBox = true;
            }
        }
        else if (this.newObj.evaluation.managerID == this.authService.logginEmployeeId()) {
            if (this.newObj.evaluation.evaluationStautsID == 2 || this.newObj.evaluation.evaluationStautsID == 7) {
                this.showActionBar = true;
                if (this.actionBar) {
                    this.actionBar.editMode();
                }
                this.isShowManagerApproval = true;
                this.isShowManagerReject = true;
                this.showApprovCancelBox = true;
            }
            else if (this.newObj.evaluation.evaluationStautsID == 4) {
                this.isShowManagerCancelApproval = true;
                this.showApprovCancelBox = true;
            }
        }
        else {
            if (this.sharedService.checkEmployeeIsHR(this.authService.logginEmployeeId())) {
                if (this.newObj.evaluation.evaluationStautsID == 4) {
                    this.isShowHRApproval = true;
                    this.isShowHRReject = true;
                    this.showApprovCancelBox = true;
                }
            }
        }
    }
    //#endregion
    getEmptyObject() {
        const obj = {
            evaluation: {
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
    }
    ;
    //#region  events
    employeeSelect(employeeID) {
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
    approvalRejectAction(Id) {
        var vm = {
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
        this.evalService.approveRejectEvaluation(vm).subscribe(result => {
            this.alertify.success("SAVED_SUCCESSFULLY");
            this.reset();
        }, error => { this.alertify.error(error); });
    }
};
__decorate([
    ViewChild('heroForm', { static: false }),
    __metadata("design:type", Object)
], EvaluationComponent.prototype, "heroForm", void 0);
__decorate([
    ViewChild(ActionBarComponent, { static: false }),
    __metadata("design:type", ActionBarComponent)
], EvaluationComponent.prototype, "actionBar", void 0);
__decorate([
    ViewChild('paginator1'),
    __metadata("design:type", MatPaginator)
], EvaluationComponent.prototype, "paginator1", void 0);
__decorate([
    ViewChild(MatSort),
    __metadata("design:type", MatSort)
], EvaluationComponent.prototype, "sort1", void 0);
__decorate([
    ViewChild('employeeList', { static: false }),
    __metadata("design:type", EmployeeComponent)
], EvaluationComponent.prototype, "employeeList", void 0);
EvaluationComponent = __decorate([
    Component({
        selector: 'app-Evaluation',
        templateUrl: './Evaluation.component.html',
        styleUrls: ['./Evaluation.component.scss']
    }),
    __metadata("design:paramtypes", [EssPortalService,
        EvaluationService,
        AuthService,
        ActivatedRoute,
        Router,
        AlertifyService,
        DateAdapter])
], EvaluationComponent);
export { EvaluationComponent };
//# sourceMappingURL=Evaluation.component.js.map
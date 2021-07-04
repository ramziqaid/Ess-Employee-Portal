var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, ViewChild } from '@angular/core';
import { EssPortalService, AlertifyService, AuthService } from '../../../core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { Router } from '@angular/router';
import { EvaluationService } from '../Services/Evaluation.service';
import { EmployeeComponent } from 'app/shared/UI/employee/employee.component';
let EvalListComponent = class EvalListComponent {
    constructor(evalService, alertify, essService, router, authService) {
        this.evalService = evalService;
        this.alertify = alertify;
        this.essService = essService;
        this.router = router;
        this.authService = authService;
        this.displayedColumns = ['index', 'number', 'employeeName', 'namePeriod', 'evaluationStauts', 'createdDate', 'action'];
        this.editMode = false;
        this.isHRUser = false;
    }
    ngOnInit() {
        this.loadEvalYear();
        this.myOrder = "0";
        this.employeeID = this.authService.logginEmployeeId();
        this.essService.checkEmployeeIsHR(this.employeeID).subscribe(result => {
            this.isHRUser = result;
            if (this.isHRUser) {
                this.employeeList.loadAllEmployee = true;
            }
            this.employeeList.getEmployees();
        });
    }
    loadEvalYear() {
        this.evalService.getEvalPeriodInfo().subscribe(result => {
            this.evalPeriod = result;
        });
    }
    onSubmit() {
        // employeeID:this.authService.logginEmployeeId(), 
        this.evalService.searchEvaluationInfo(this.evalPeriodID, -1, (this.myOrder == "0" ? this.authService.logginEmployeeId() : this.employeeID), (this.myOrder == "1" ? this.authService.logginEmployeeId() : -1)).subscribe(result => {
            this.dataSource = new MatTableDataSource(result);
            this.dataSource.paginator = this.paginator;
            this.dataSource.sort = this.sort;
        }, error => { this.alertify.error(error); });
    }
    //#region  events
    employeeSelect(employeeID) {
        this.employeeID = employeeID;
    }
    evalPeriodChange(ob) {
        this.evalPeriodID = ob.value;
    }
    myOrderChange(ob) {
        if (this.myOrder == "0") {
            this.employeeID = this.authService.logginEmployeeId();
        }
        else {
            this.employeeID = -1;
        }
    }
};
__decorate([
    ViewChild(MatPaginator),
    __metadata("design:type", MatPaginator)
], EvalListComponent.prototype, "paginator", void 0);
__decorate([
    ViewChild(MatSort),
    __metadata("design:type", MatSort)
], EvalListComponent.prototype, "sort", void 0);
__decorate([
    ViewChild('employeeList'),
    __metadata("design:type", EmployeeComponent)
], EvalListComponent.prototype, "employeeList", void 0);
EvalListComponent = __decorate([
    Component({
        selector: 'app-evalList',
        templateUrl: './evalList.component.html',
        styleUrls: ['./evalList.component.scss']
    }),
    __metadata("design:paramtypes", [EvaluationService,
        AlertifyService,
        EssPortalService,
        Router,
        AuthService])
], EvalListComponent);
export { EvalListComponent };
//# sourceMappingURL=evalList.component.js.map
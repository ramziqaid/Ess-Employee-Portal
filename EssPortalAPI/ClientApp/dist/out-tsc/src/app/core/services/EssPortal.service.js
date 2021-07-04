var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { map, catchError, shareReplay } from 'rxjs/operators';
import { ApiService } from './api.service';
let EssPortalService = class EssPortalService {
    constructor(apiService) {
        this.apiService = apiService;
    }
    getEmployees() {
        if (!this.employee$) {
            this.employee$ = this.apiService.get(`Employee`).pipe();
        }
        return this.employee$;
    }
    // Get Employee by its ID
    getEmployeeById(employeeID) {
        return this.apiService.get(`Employee/Get/${employeeID}`).pipe();
    }
    getEmployeeByManagerId(employeeID) {
        return this.apiService.get(`Employee/GetByManager/${employeeID}`).pipe();
    }
    checkEmployeeIsManager(employeeID) {
        var employeeInfo;
        this.getEmployeeById(employeeID).subscribe(result => {
            employeeInfo = result;
            if (employeeInfo.filter(p => p.isManager == 1).length > 0) {
                return true;
            }
        });
        return false;
    }
    checkEmployeeIsHR(employeeID) {
        var ishr;
        return this.apiService.get(`Employee/checkEmployeeIsHR/${employeeID}`)
            .pipe(map(result => {
            ishr = result;
            if (ishr == "1")
                return true;
            return true;
        }));
    }
    getSystemCode() {
        return this.apiService.get(`SystemCode`).pipe();
    }
    getSystemCodeCategory(category) {
        return this.apiService.get(`SystemCode`).pipe(
        //flatMap(result => result), first(SystemCode => SystemCode.Category == Category)
        // filter(result => result.Category == Category)
        map(result => result.filter((result) => result.systemCodeType == category)), catchError(this.handleError));
    }
    getClient() {
        return this.apiService.get("AXInfo/GetClient").pipe(shareReplay(), catchError(this.handleError));
    }
    getVacationTypes() {
        return this.apiService.get("AXInfo/GetVactionTyps").pipe(shareReplay(), catchError(this.handleError));
    }
    getLoanTypes() {
        return this.apiService.get("AXInfo/GetLoanTypes").pipe(shareReplay(), catchError(this.handleError));
    }
    getLoansInfo(employeeid) {
        return this.apiService.get(`AXInfo/GetLoansInfo/${employeeid}`).pipe(shareReplay(), catchError(this.handleError));
    }
    getAssestInfo(employeeid) {
        return this.apiService.get(`AXInfo/GetAssestInfo/${employeeid}`).pipe(shareReplay(), catchError(this.handleError));
    }
    getPaySlipInfo(employeeid) {
        return this.apiService.get(`AXInfo/GetPaySlipInfo/${employeeid}`).pipe(shareReplay(), catchError(this.handleError));
    }
    getAttendeesInfo(obj) {
        return this.apiService.post("AXInfo/GetAttendeesInfo", obj).pipe(shareReplay(), catchError(this.handleError));
    }
    getVacationBalanceInfo(obj) {
        return this.apiService.post("AXInfo/GetVacationBalanceInfo", obj).pipe(shareReplay(), catchError(this.handleError));
    }
    getEmployeeVacationInfo(employeeid) {
        return this.apiService.get(`AXInfo/GetEmployeeVacationInfo/${employeeid}`).pipe(shareReplay(), catchError(this.handleError));
    }
    getPermissionInfo(obj) {
        return this.apiService.post("Operation/GetPermissionInfo", obj).pipe(shareReplay(), catchError(this.handleError));
    }
    getCurrentDate() {
        var today = new Date();
        var dd = String(today.getDate()).padStart(2, '0');
        var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
        var yyyy = today.getFullYear();
        return dd + '/' + mm + '/' + yyyy;
        return '';
    }
    isCheckDateFormat(date) {
        if (date.length !== 10) {
            return false;
            //return 'Invalid input: Please input a string in the form of YYYY/MM/DD';
        }
        else {
            const da = date.split('/');
            if (da.length !== 3 || da[0].length !== 2 || da[1].length !== 2 || da[2].length !== 4) {
                return false; // 'Invalid input: Please input a string in the form of YYYY/MM/DD';
            }
            //   else if (_moment(date).isValid()) {
            //     return false;// 'Invalid date: Please input a date no later than today';
            //   } else if (!_moment(date).isValid()) {
            //     return false;// 'Invalid date: Please input a date with a valid month and date.';
            //   }
            if (Number(da[0]) < 1 || Number(da[0]) > 31)
                return false;
            if (Number(da[1]) < 1 || Number(da[1]) > 12)
                return false;
            if (Number(da[2]) < 2000 || Number(da[2]) > 2050)
                return false;
        }
        return true;
    }
    currentLang() {
        var dir = localStorage.getItem('dir');
        return (dir === "ltr" ? "1" : "2");
    }
    getRandomNumber() {
        return -Math.floor((Math.random() * 100000) + 1);
    }
    handleError(error) {
        if (error.error instanceof ErrorEvent) {
            // A client-side or network error occurred. Handle it accordingly.
            console.error('An error occurred:', error.error.message);
            return throwError(error.error.message);
        }
        else {
            // The backend returned an unsuccessful response code.
            // The response body may contain clues as to what went wrong,
            console.error(`Backend returned code ${error.status}, ` + `body was: ${error.error} `);
        }
        // return an observable with a user-facing error message
        return throwError(error);
    }
    ;
};
EssPortalService = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [ApiService])
], EssPortalService);
export { EssPortalService };
//# sourceMappingURL=EssPortal.service.js.map
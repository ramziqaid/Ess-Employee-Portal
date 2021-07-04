var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { ApiService } from './../../../core/services/api.service';
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { catchError, shareReplay } from 'rxjs/operators';
import { map } from 'rxjs/operators';
let EvaluationService = class EvaluationService {
    constructor(apiService) {
        this.apiService = apiService;
    }
    getEvalPeriodInfo() {
        return this.apiService.get(`AXInfo/GetEvalPeriod`).pipe(shareReplay(), catchError(this.handleError));
    }
    getEvalCommunityInfo() {
        return this.apiService.get(`AXInfo/GetEvalCommunity`).pipe(shareReplay(), catchError(this.handleError));
    }
    getEvalCommunityEmployeeInfo(employeeID, evalCommunityID) {
        return this.apiService.get(`Evaluation/GetEvalCommunityInfo/${employeeID}/${evalCommunityID}`)
            .pipe(shareReplay(), catchError(this.handleError));
    }
    getEvalCharterCommunityInfo(employeeID, evalPeriodID, evalCommunityID) {
        return this.apiService.get(`Evaluation/GetEvalCharterCommunityInfo/${employeeID}/${evalPeriodID}/${evalCommunityID}`)
            .pipe(shareReplay(), catchError(this.handleError));
    }
    getEvalResultInfo(evaluationID) {
        return this.apiService.get(`Evaluation/GetEvalResultInfo/${evaluationID}`)
            .pipe(shareReplay(), catchError(this.handleError));
    }
    searchEvaluationInfo(pEvalPeriodID, pEvalCommunityID, pEmployeeID, pManagerID) {
        return this.apiService.get(`Evaluation/SearchEvaluationInfo/${pEvalPeriodID}/${pEvalCommunityID}/${pEmployeeID}/${pManagerID}`)
            .pipe(shareReplay(), catchError(this.handleError));
    }
    getSystemCode(SystemCodeType) {
        return this.apiService.get("SystemCode").pipe(map(result => result.filter((result) => result.systemCodeType == SystemCodeType)), catchError(this.handleError));
    }
    insertEvaluation(obj) {
        return this.apiService.post("Evaluation/CreateEvaluation", obj).pipe(catchError(this.handleError));
    }
    updateEvaluation(obj) {
        return this.apiService.post("Evaluation/UpdateEvaluation", obj).pipe(catchError(this.handleError));
    }
    approveRejectEvaluation(obj) {
        return this.apiService.post("Evaluation/ApproveRejectEvaluation", obj).pipe(catchError(this.handleError));
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
EvaluationService = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [ApiService])
], EvaluationService);
export { EvaluationService };
//# sourceMappingURL=Evaluation.service.js.map
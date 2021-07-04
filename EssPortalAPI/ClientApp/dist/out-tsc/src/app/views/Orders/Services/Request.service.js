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
import { shareReplay, catchError, map } from 'rxjs/operators';
import { environment } from '../../../../environments/environment';
let RequestService = class RequestService {
    constructor(apiService) {
        this.apiService = apiService;
        this.baseUrl = environment.apiUrl;
    }
    //#region load
    getRequestType() {
        if (!this.requestType$) {
            this.requestType$ = this.apiService.get("RequestType").pipe(shareReplay());
        }
        return this.requestType$;
    }
    getSystemCode(SystemCodeType) {
        return this.apiService.get("SystemCode").pipe(map(result => result.filter((result) => result.systemCodeType == SystemCodeType)), catchError(this.handleError));
    }
    getRequestList(request) {
        return this.apiService.post("Requests/GetRequestList", request).pipe(shareReplay(), catchError(this.handleError));
    }
    getNextPrivateNumber() {
        return this.apiService.get(`Requests/GetNextPrivateNumber`).pipe(shareReplay());
    }
    getRequest(requestId) {
        return this.apiService.get(`Requests/${requestId}`).pipe(shareReplay());
    }
    getRequestStage(requestId) {
        return this.apiService.get(`Requests/GetOrderStage/${requestId}`).pipe(shareReplay());
    }
    //#endregion load
    saveRequest(request) {
        if (request.request.requestID == undefined || request.request.requestID < 1) {
            return this.apiService.post("Requests/CreateOrder", request).pipe(catchError(this.handleError));
        }
        else {
            return this.apiService.post("Requests/UpdateOrder", request).pipe(catchError(this.handleError));
        }
    }
    approvalRequest(requestStage) {
        return this.apiService.post("Requests/ApprovalOrder", requestStage).pipe(shareReplay(), catchError(this.handleError));
    }
    deleteRequest(requestID) {
        return this.apiService.delete(`Requests/DeleteRequest/${requestID}`).pipe(catchError(this.handleError));
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
RequestService = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [ApiService])
], RequestService);
export { RequestService };
//# sourceMappingURL=Request.service.js.map
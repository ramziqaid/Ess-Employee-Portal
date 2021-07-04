var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { ApiService } from '../../../core/services/api.service';
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { shareReplay, catchError } from 'rxjs/operators';
let AdminService = class AdminService {
    constructor(apiService) {
        this.apiService = apiService;
    }
    //#region load
    GetAllUsers() {
        return this.apiService.get("User").pipe(shareReplay(), catchError(this.handleError));
    }
    // Get MemberBy Id
    GetUserId(Id) {
        return this.apiService.get(`User/${Id}`).pipe(shareReplay(), catchError(this.handleError));
    }
    // Get All Roles
    GetAllAssignedRoles() {
        return this.apiService.get("AssignRoles").pipe(shareReplay(), catchError(this.handleError));
    }
    GetAllRole() {
        return this.apiService.get("CreateRole").pipe(shareReplay(), catchError(this.handleError));
    }
    GetPurchasesStageType() {
        return this.apiService.get(`PurchasesStageType`).pipe(shareReplay(), catchError(this.handleError));
    }
    // Save User
    SaveUser(usermodel) {
        return this.apiService.post(`User/register`, usermodel)
            .pipe(catchError(this.handleError));
    }
    AssignRole(assignmodel) {
        return this.apiService.post("AssignRoles", assignmodel).pipe(shareReplay(), catchError(this.handleError));
    }
    UpdateUser(usermodel) {
        return this.apiService.put(`User/${usermodel.userId}`, usermodel)
            .pipe(catchError(this.handleError));
    }
    UpdateUserStatus(userId, status) {
        return this.apiService.post(`User/${userId}/UpdateStauts/${status}`, {}).pipe(catchError(this.handleError));
    }
    ResetUserPassword(userId) {
        return this.apiService.put(`User/ResetPassword/${userId}`, {}).pipe(catchError(this.handleError));
    }
    UpdatePurchasesStageType(purchasesStageType) {
        return this.apiService.put(`PurchasesStageType`, purchasesStageType)
            .pipe(catchError(this.handleError));
    }
    RemoveRole(assignmodel) {
        return this.apiService.post("RemoveRole", assignmodel).pipe(shareReplay(), catchError(this.handleError));
    }
    DeleteUser(Id) {
        return this.apiService.delete(`User/${Id}`)
            .pipe(catchError(this.handleError));
    }
    //#region Permission
    GetOperationWithPermission() {
        return this.apiService.get("Operation").pipe(shareReplay(), catchError(this.handleError));
    }
    SavePermission(model) {
        return this.apiService.post("Operation", model).pipe(shareReplay(), catchError(this.handleError));
    }
    DeletePermission(model) {
        return this.apiService.post("Operation/DeletePermission", model).pipe(shareReplay(), catchError(this.handleError));
    }
    //#endregion
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
AdminService = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [ApiService])
], AdminService);
export { AdminService };
//# sourceMappingURL=admin.service.js.map
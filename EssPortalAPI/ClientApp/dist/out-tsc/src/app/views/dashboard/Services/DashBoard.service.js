// import { Injectable } from '@angular/core';
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
// @Injectable({
//   providedIn: 'root'
// })
// export class DashBoardService {
// constructor() { }
// }
import { ApiService } from './../../../core/services/api.service';
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { environment } from '../../../../environments/environment';
let DashBoardService = class DashBoardService {
    constructor(apiService) {
        this.apiService = apiService;
        this.baseUrl = environment.apiUrl;
    }
    //#region load
    getSystemCode(SystemCodeType) {
        return this.apiService.get("SystemCode").pipe(map(result => result.filter((result) => result.systemCodeType == SystemCodeType)), catchError(this.handleError));
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
DashBoardService = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [ApiService])
], DashBoardService);
export { DashBoardService };
//# sourceMappingURL=DashBoard.service.js.map
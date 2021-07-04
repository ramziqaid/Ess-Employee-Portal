var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { AuthService } from '../services';
let JwtInterceptor = class JwtInterceptor {
    constructor(acct, _Route) {
        this.acct = acct;
        this._Route = _Route;
    }
    intercept(request, next) {
        // debugger;
        // add authorization header with jwt token if available
        let currentuser = this.acct.isLoggesIn;
        let token = localStorage.getItem('jwtToken');
        if (currentuser && token !== undefined) {
            if (request.url !== undefined) {
                if (request.url.includes('api/Attachement')) {
                    request = request.clone({
                        setHeaders: {
                            Authorization: `Bearer ${token}`
                        }
                    });
                }
                else {
                    request = request.clone({
                        setHeaders: {
                            Authorization: `Bearer ${token}`,
                            'Content-Type': 'application/json'
                        }
                    });
                }
            }
        }
        return next.handle(request).pipe(catchError((error) => {
            if (error instanceof HttpErrorResponse) {
                if (error.error instanceof ErrorEvent) {
                    console.error("Error Event");
                }
                else {
                    console.log(`error status : ${error.status} ${error.statusText}`);
                    switch (error.status) {
                        case 401: //login
                            this._Route.navigateByUrl("/login");
                            break;
                        case 403: //forbidden
                            this._Route.navigateByUrl("/unauthorized");
                            break;
                    }
                }
            }
            else {
                console.error("some thing else happened");
            }
            return throwError(error);
            // console.log(error);
            // confirm(error);
            // return throwError(error);
        }));
    }
};
JwtInterceptor = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [AuthService, Router])
], JwtInterceptor);
export { JwtInterceptor };
//# sourceMappingURL=jwt.Interceptor.js.map
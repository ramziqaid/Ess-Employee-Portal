var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable } from "@angular/core";
import { LocalStoreService } from "../local-store.service";
import { HttpClient } from "@angular/common/http";
import { Router, ActivatedRoute } from "@angular/router";
import { map, catchError, delay } from "rxjs/operators";
import { of, BehaviorSubject, throwError } from "rxjs";
// ================= only for demo purpose ===========
const DEMO_TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1YjhkNDc4MDc4NmM3MjE3MjBkYzU1NzMiLCJlbWFpbCI6InJhZmkuYm9ncmFAZ21haWwuY29tIiwicm9sZSI6IlNBIiwiYWN0aXZlIjp0cnVlLCJpYXQiOjE1ODc3MTc2NTgsImV4cCI6MTU4ODMyMjQ1OH0.dXw0ySun5ex98dOzTEk0lkmXJvxg3Qgz4ed";
const DEMO_USER = {
    id: "5b700c45639d2c0c54b354ba",
    displayName: "Watson Joyce",
    role: "SA",
};
// ================= you will get those data from server =======
let JwtAuthService = class JwtAuthService {
    constructor(ls, http, router, route) {
        this.ls = ls;
        this.http = http;
        this.router = router;
        this.route = route;
        this.user = {};
        this.user$ = (new BehaviorSubject(this.user));
        this.JWT_TOKEN = "JWT_TOKEN";
        this.APP_USER = "EGRET_USER";
        this.route.queryParams
            .subscribe(params => this.return = params['return'] || '/');
    }
    signin(username, password) {
        return of({ token: DEMO_TOKEN, user: DEMO_USER })
            .pipe(delay(1000), map((res) => {
            this.setUserAndToken(res.token, res.user, !!res);
            this.signingIn = false;
            return res;
        }), catchError((error) => {
            return throwError(error);
        }));
        // FOLLOWING CODE SENDS SIGNIN REQUEST TO SERVER
        // this.signingIn = true;
        // return this.http.post(`${environment.apiURL}/auth/local`, { username, password })
        //   .pipe(
        //     map((res: any) => {
        //       this.setUserAndToken(res.token, res.user, !!res);
        //       this.signingIn = false;
        //       return res;
        //     }),
        //     catchError((error) => {
        //       return throwError(error);
        //     })
        //   );
    }
    /*
      checkTokenIsValid is called inside constructor of
      shared/components/layouts/admin-layout/admin-layout.component.ts
    */
    checkTokenIsValid() {
        return of(DEMO_USER)
            .pipe(map((profile) => {
            this.setUserAndToken(this.getJwtToken(), profile, true);
            this.signingIn = false;
            return profile;
        }), catchError((error) => {
            return of(error);
        }));
        /*
          The following code get user data and jwt token is assigned to
          Request header using token.interceptor
          This checks if the existing token is valid when app is reloaded
        */
        // return this.http.get(`${environment.apiURL}/api/users/profile`)
        //   .pipe(
        //     map((profile: User) => {
        //       this.setUserAndToken(this.getJwtToken(), profile, true);
        //       return profile;
        //     }),
        //     catchError((error) => {
        //       this.signout();
        //       return of(error);
        //     })
        //   );
    }
    signout() {
        this.setUserAndToken(null, null, false);
        this.router.navigateByUrl("sessions/signin");
    }
    isLoggedIn() {
        return !!this.getJwtToken();
    }
    getJwtToken() {
        return this.ls.getItem(this.JWT_TOKEN);
    }
    getUser() {
        return this.ls.getItem(this.APP_USER);
    }
    setUserAndToken(token, user, isAuthenticated) {
        this.isAuthenticated = isAuthenticated;
        this.token = token;
        this.user = user;
        this.user$.next(user);
        this.ls.setItem(this.JWT_TOKEN, token);
        this.ls.setItem(this.APP_USER, user);
    }
};
JwtAuthService = __decorate([
    Injectable({
        providedIn: "root",
    }),
    __metadata("design:paramtypes", [LocalStoreService,
        HttpClient,
        Router,
        ActivatedRoute])
], JwtAuthService);
export { JwtAuthService };
//# sourceMappingURL=jwt-auth.service.js.map
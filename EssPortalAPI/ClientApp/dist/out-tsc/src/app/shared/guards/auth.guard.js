var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { EssPortalService } from './../../core/services/EssPortal.service';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AlertifyService, AuthService } from '../../core';
let AuthGuard = class AuthGuard {
    constructor(authService, router, sharedService, alertify) {
        this.authService = authService;
        this.router = router;
        this.sharedService = sharedService;
        this.alertify = alertify;
    }
    canActivate(route, state) {
        // return true;
        // debugger
        const operation = route.data.OperationCode;
        if (operation != undefined) {
            var vm = {
                userID: this.authService.logginUserID(),
                operationID: -1,
                operationCode: operation
            };
            this.sharedService.getPermissionInfo(vm).subscribe(data => {
                if (data.length > 0) {
                }
                else {
                    console.log('access-denied');
                    this.router.navigate(['/sessions/access-denied']);
                }
            }, (error) => {
                //this.router.navigate(['/sessions/access-denied']);
                console.log(error);
            });
        }
        if (this.authService.checkLoginStatus()) {
            return true;
        }
        const destination = state.url;
        this.authService.redirectUrl = state.url;
        this.alertify.error('You need to be logged in to access this area');
        this.router.navigate(['/sessions/login'], { queryParams: { returnUrl: state.url } });
        return false;
    }
    canActivateChild(route, state) {
        return this.canActivate(route, state);
    }
    canLoad(route) {
        let url = route.path;
        // console.log('Url:' + url);
        if (this.authService.checkLoginStatus()) {
            return true;
        }
        //this.router.navigate([url]);
        this.router.navigate(['/sessions/login'], { queryParams: { returnUrl: url } });
        return false;
    }
};
AuthGuard = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [AuthService,
        Router,
        EssPortalService,
        AlertifyService])
], AuthGuard);
export { AuthGuard };
// import { Injectable } from "@angular/core";
// import {
//   CanActivate,
//   ActivatedRouteSnapshot,
//   RouterStateSnapshot,
//   Router,
// } from "@angular/router";
// import { JwtAuthService } from "../services/auth/jwt-auth.service";
// @Injectable()
// export class AuthGuard implements CanActivate {
//   constructor(private router: Router, private jwtAuth: JwtAuthService) {}
//   canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
//     if (this.jwtAuth.isLoggedIn()) {
//       return true;
//     } else {
//       this.router.navigate(["/sessions/signin"], {
//         queryParams: {
//           return: state.url
//         }
//       });
//       return false;
//     }
//   }
// }
//# sourceMappingURL=auth.guard.js.map
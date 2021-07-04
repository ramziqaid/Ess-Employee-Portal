import { EssPortalService } from './../../core/services/EssPortal.service';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router, Route, CanActivateChild, CanLoad } from '@angular/router';
import { Observable } from 'rxjs';
import { AlertifyService, AuthService } from '../../core';



@Injectable()
export class AuthGuard implements CanActivate, CanActivateChild, CanLoad {

    constructor(private authService: AuthService, 
        private router: Router, 
        private sharedService: EssPortalService,
        private alertify: AlertifyService
    ) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean { 
       // return true;
      // debugger
        const operation = route.data.OperationCode;
        if(operation!= undefined)
        {
            var vm:any={
                userID:this.authService.logginUserID(),
                operationID:-1,
                operationCode:operation  
               };   
                
           this.sharedService.getPermissionInfo(vm).subscribe(data => 
           {
             if (data.length>0) { 
             }else{
                 console.log('access-denied');
                this.router.navigate(['/sessions/access-denied']);
             }
           }, 
           (error) => {
            //this.router.navigate(['/sessions/access-denied']);
             console.log(error);
           }); 
        }
        
        if (this.authService.checkLoginStatus()) {
            return true;
        }
        const destination: string = state.url;
        this.authService.redirectUrl = state.url;
        this.alertify.error('You need to be logged in to access this area');
        this.router.navigate(['/sessions/login'], { queryParams: { returnUrl: state.url } });

        return false;

    }
    canActivateChild(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): boolean {            
        return this.canActivate(route, state);
    }

    canLoad(route: Route): boolean {
        let url: string = route.path;
       // console.log('Url:' + url);
        if (this.authService.checkLoginStatus()) {
            return true;
        }
        //this.router.navigate([url]);
        this.router.navigate(['/sessions/login'], { queryParams: { returnUrl: url } });
        return false;
    }

    
}

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

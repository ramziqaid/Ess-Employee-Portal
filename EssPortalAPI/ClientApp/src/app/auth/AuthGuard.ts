import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router, Route, CanActivateChild, CanLoad } from '@angular/router';
import { Observable } from 'rxjs';
import { AlertifyService, AuthService } from '../core';



@Injectable()
export class AuthGuard implements CanActivate, CanActivateChild, CanLoad {

    constructor(private authService: AuthService, private router: Router, private alertify: AlertifyService
    ) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {

        if (this.authService.checkLoginStatus()) {
            return true;
        }
        const destination: string = state.url;
        this.authService.redirectUrl = state.url;
        this.alertify.error('You need to be logged in to access this area');
        this.router.navigate(['/login'], { queryParams: { returnUrl: state.url } });

        return false;

    }
    canActivateChild(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): boolean {
        return this.canActivate(route, state);
    }

    canLoad(route: Route): boolean {
        let url: string = route.path;
        console.log('Url:' + url);
        if (this.authService.checkLoginStatus()) {
            return true;
        }
        this.router.navigate([url]);
        return false;
    }
}

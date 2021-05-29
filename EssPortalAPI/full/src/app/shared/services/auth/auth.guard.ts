import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router, CanActivateChild, CanLoad, Route } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable()
export class AuthGuard implements CanActivate, CanActivateChild, CanLoad {

  constructor(private authService: AuthService, private router: Router
  ) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    //return true;
    if (this.authService.checkLoginStatus()) {
      return true;
    }
    const destination: string = state.url;
    this.authService.redirectUrl = state.url;
    //this.alertify.error('You need to be logged in to access this area');
    this.router.navigate(['/sessions/signin2'], { queryParams: { returnUrl: state.url } });

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
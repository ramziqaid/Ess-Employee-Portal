import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';

@Injectable()
export class AdminAuthGuardService implements CanActivate {

    constructor(private router: Router) { }

    canActivate() { 
        if (localStorage.getItem('AdminUser')) {
            console.log('AdminUser Area');
            // logged in so return true
            return true;
        }
        // not logged in so redirect to login page
        this.router.navigate(['/access-denied']);
        return false;
    }
}

import { Component, OnInit } from '@angular/core'
import { Router } from '@angular/router'
import { EssPortalService, AlertifyService, AuthService } from '../../core';

@Component({
    template: ''
})
export class UserLogoutComponent implements OnInit {
    constructor(private _Route: Router, private loginservice: AuthService) {

    }

    ngOnInit() {
        this.loginservice.LogoutUser();
        localStorage.removeItem('currentUser');
        this._Route.navigate(['login']);
    }
}


import { Component, OnInit } from '@angular/core'
import { Router } from '@angular/router'
import { AuthService } from 'app/shared/services/auth/auth.service';


@Component({
    template: ''
})
export class UserLogoutComponent implements OnInit {
    constructor(private _Route: Router, private loginservice: AuthService) {

    }

    ngOnInit() {
        localStorage.removeItem('AdminUser');
        localStorage.removeItem('currentUser');
        this.loginservice.LogoutUser();
        this._Route.navigate(['/sessions/signin2']);
    }
}

import { AuthService } from '../../core/services/auth.service'; 
import { Component, OnInit } from '@angular/core'
import { Router } from '@angular/router'
import { NavigationService } from 'app/shared/services/navigation.service';
import { NotificationService } from 'app/core/services/Notification.service';
 

@Component({
    template: ''
})
export class UserLogoutComponent implements OnInit {
    constructor(private _Route: Router, 
        private navService: NavigationService,
        private notService: NotificationService,
        private loginservice: AuthService) {

    }

    ngOnInit() {
        this.navService.clearMenu(); 
        this.notService.ngOnDestroy();
        this.loginservice.LogoutUser(); 
        this._Route.navigate(['/sessions/login']);
    }
}

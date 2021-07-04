var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, Input } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
let NotificationsComponent = class NotificationsComponent {
    constructor(router) {
        this.router = router;
        // Dummy notifications
        this.notifications = [{
                message: 'New contact added',
                icon: 'assignment_ind',
                time: '1 min ago',
                route: '/inbox',
                color: 'primary'
            }, {
                message: 'New message',
                icon: 'chat',
                time: '4 min ago',
                route: '/chat',
                color: 'accent'
            }, {
                message: 'Server rebooted',
                icon: 'settings_backup_restore',
                time: '12 min ago',
                route: '/charts',
                color: 'warn'
            }];
    }
    ngOnInit() {
        this.router.events.subscribe((routeChange) => {
            if (routeChange instanceof NavigationEnd) {
                this.notificPanel.close();
            }
        });
    }
    clearAll(e) {
        e.preventDefault();
        this.notifications = [];
    }
};
__decorate([
    Input(),
    __metadata("design:type", Object)
], NotificationsComponent.prototype, "notificPanel", void 0);
NotificationsComponent = __decorate([
    Component({
        selector: 'app-notifications',
        templateUrl: './notifications.component.html'
    }),
    __metadata("design:paramtypes", [Router])
], NotificationsComponent);
export { NotificationsComponent };
//# sourceMappingURL=notifications.component.js.map
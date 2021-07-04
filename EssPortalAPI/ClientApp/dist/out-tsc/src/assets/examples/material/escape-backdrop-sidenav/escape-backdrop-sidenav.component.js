var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { MatSidenav } from '@angular/material/sidenav';
import { Component, ViewChild } from '@angular/core';
let EscapeBackdropSidenavComponent = class EscapeBackdropSidenavComponent {
    constructor() {
        this.reason = '';
    }
    ngOnInit() {
    }
    close(reason) {
        this.reason = reason;
        this.sidenav.close();
    }
};
__decorate([
    ViewChild('sidenav'),
    __metadata("design:type", MatSidenav)
], EscapeBackdropSidenavComponent.prototype, "sidenav", void 0);
EscapeBackdropSidenavComponent = __decorate([
    Component({
        selector: 'app-escape-backdrop-sidenav',
        templateUrl: './escape-backdrop-sidenav.component.html',
        styleUrls: ['./escape-backdrop-sidenav.component.scss']
    }),
    __metadata("design:paramtypes", [])
], EscapeBackdropSidenavComponent);
export { EscapeBackdropSidenavComponent };
//# sourceMappingURL=escape-backdrop-sidenav.component.js.map
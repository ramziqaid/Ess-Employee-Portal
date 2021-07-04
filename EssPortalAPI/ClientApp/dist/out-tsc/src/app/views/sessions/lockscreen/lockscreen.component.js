var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, ViewChild } from '@angular/core';
import { MatButton } from '@angular/material/button';
import { MatProgressBar } from '@angular/material/progress-bar';
let LockscreenComponent = class LockscreenComponent {
    constructor() {
        this.lockscreenData = {
            password: ''
        };
    }
    ngOnInit() {
    }
    unlock() {
        console.log(this.lockscreenData);
        this.submitButton.disabled = true;
        this.progressBar.mode = 'indeterminate';
    }
};
__decorate([
    ViewChild(MatProgressBar),
    __metadata("design:type", MatProgressBar)
], LockscreenComponent.prototype, "progressBar", void 0);
__decorate([
    ViewChild(MatButton),
    __metadata("design:type", MatButton)
], LockscreenComponent.prototype, "submitButton", void 0);
LockscreenComponent = __decorate([
    Component({
        selector: 'app-lockscreen',
        templateUrl: './lockscreen.component.html',
        styleUrls: ['./lockscreen.component.css']
    }),
    __metadata("design:paramtypes", [])
], LockscreenComponent);
export { LockscreenComponent };
//# sourceMappingURL=lockscreen.component.js.map
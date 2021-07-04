var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
/*
  Only Required if you want to use Angular Landing
  (https://themeforest.net/item/angular-landing-material-design-angular-app-landing-page/21198258)
*/
import { Injectable, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
let LandingPageService = class LandingPageService {
    constructor(document) {
        this.document = document;
    }
    addFix() {
        this.document.documentElement.classList.add('landing');
        this.document.body.classList.add('landing');
    }
    removeFix() {
        this.document.documentElement.classList.remove('landing');
        this.document.body.classList.remove('landing');
    }
};
LandingPageService = __decorate([
    Injectable(),
    __param(0, Inject(DOCUMENT)),
    __metadata("design:paramtypes", [Document])
], LandingPageService);
export { LandingPageService };
//# sourceMappingURL=landing-page.service.js.map
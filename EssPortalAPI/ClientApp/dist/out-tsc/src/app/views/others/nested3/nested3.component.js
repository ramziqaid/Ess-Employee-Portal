var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { Router } from '@angular/router';
let Nested3Component = class Nested3Component {
    constructor(r) {
        this.r = r;
    }
    ngOnInit() {
    }
    go() {
        this.r.navigate(['/dashboard']);
    }
};
Nested3Component = __decorate([
    Component({
        selector: 'app-nested3',
        templateUrl: './nested3.component.html',
        styleUrls: ['./nested3.component.scss']
    }),
    __metadata("design:paramtypes", [Router])
], Nested3Component);
export { Nested3Component };
//# sourceMappingURL=nested3.component.js.map
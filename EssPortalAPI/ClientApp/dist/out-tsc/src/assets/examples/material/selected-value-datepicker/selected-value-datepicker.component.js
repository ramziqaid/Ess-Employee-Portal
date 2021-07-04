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
import { FormControl } from '@angular/forms';
let SelectedValueDatepickerComponent = class SelectedValueDatepickerComponent {
    constructor() {
        this.date = new FormControl(new Date());
        this.serializedDate = new FormControl((new Date()).toISOString());
    }
};
SelectedValueDatepickerComponent = __decorate([
    Component({
        selector: 'app-selected-value-datepicker',
        templateUrl: './selected-value-datepicker.component.html',
        styleUrls: ['./selected-value-datepicker.component.scss']
    }),
    __metadata("design:paramtypes", [])
], SelectedValueDatepickerComponent);
export { SelectedValueDatepickerComponent };
//# sourceMappingURL=selected-value-datepicker.component.js.map
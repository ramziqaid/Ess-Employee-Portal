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
import { FormBuilder, Validators } from '@angular/forms';
let ThemingFormFieldComponent = class ThemingFormFieldComponent {
    constructor(fb) {
        this.options = fb.group({
            color: 'primary',
            fontSize: [16, Validators.min(10)],
        });
    }
    getFontSize() {
        return Math.max(10, this.options.value.fontSize);
    }
    ngOnInit() {
    }
};
ThemingFormFieldComponent = __decorate([
    Component({
        selector: 'app-theming-form-field',
        templateUrl: './theming-form-field.component.html',
        styleUrls: ['./theming-form-field.component.scss']
    }),
    __metadata("design:paramtypes", [FormBuilder])
], ThemingFormFieldComponent);
export { ThemingFormFieldComponent };
//# sourceMappingURL=theming-form-field.component.js.map
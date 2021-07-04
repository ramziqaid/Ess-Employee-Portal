var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, ChangeDetectionStrategy } from '@angular/core';
let SpacingComponent = class SpacingComponent {
    constructor() {
        this.spacings = [0, 4, 8, 12, 16, 20, 24, 28, 32, 36, 40, 44, 48];
        this.test = '<span class="m-0">test</span>';
    }
    ngOnInit() {
    }
};
SpacingComponent = __decorate([
    Component({
        selector: 'app-spacing',
        templateUrl: './spacing.component.html',
        styleUrls: ['./spacing.component.scss'],
        changeDetection: ChangeDetectionStrategy.OnPush
    }),
    __metadata("design:paramtypes", [])
], SpacingComponent);
export { SpacingComponent };
//# sourceMappingURL=spacing.component.js.map
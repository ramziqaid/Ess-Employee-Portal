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
import { UILibIconService } from '../../../shared/services/ui-lib-icon.service';
let UILibIconsComponent = class UILibIconsComponent {
    constructor(iconService) {
        this.iconService = iconService;
    }
    ngOnInit() {
    }
};
UILibIconsComponent = __decorate([
    Component({
        selector: 'app-uilib-icons',
        templateUrl: './uilib-icons.component.html',
        styleUrls: ['./uilib-icons.component.scss']
    }),
    __metadata("design:paramtypes", [UILibIconService])
], UILibIconsComponent);
export { UILibIconsComponent };
//# sourceMappingURL=uilib-icons.component.js.map
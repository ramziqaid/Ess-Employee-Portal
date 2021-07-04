var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, ViewEncapsulation } from '@angular/core';
import { FormControl } from '@angular/forms';
let CustomPanelSelectComponent = class CustomPanelSelectComponent {
    constructor() {
        this.panelColor = new FormControl('red');
    }
    ngOnInit() {
    }
};
CustomPanelSelectComponent = __decorate([
    Component({
        selector: 'app-custom-panel-select',
        templateUrl: './custom-panel-select.component.html',
        styleUrls: ['./custom-panel-select.component.scss'],
        // Encapsulation has to be disabled in order for the
        // component style to apply to the select panel.
        encapsulation: ViewEncapsulation.None,
    }),
    __metadata("design:paramtypes", [])
], CustomPanelSelectComponent);
export { CustomPanelSelectComponent };
//# sourceMappingURL=custom-panel-select.component.js.map
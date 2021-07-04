var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, ChangeDetectorRef } from "@angular/core";
let CustomLoadingButtonsComponent = class CustomLoadingButtonsComponent {
    constructor(cdr) {
        this.cdr = cdr;
        this.buttons = [
            {
                name: "default",
                loading: false
            },
            {
                name: "primary",
                loading: false
            },
            {
                name: "accent",
                loading: false
            },
            {
                name: "warn",
                loading: false
            }
        ];
    }
    ngOnInit() { }
    showLoading(button) {
        button.loading = true;
        setTimeout(() => {
            button.loading = false;
            this.cdr.detectChanges();
        }, 3000);
    }
};
CustomLoadingButtonsComponent = __decorate([
    Component({
        selector: "app-custom-loading-buttons",
        templateUrl: "./custom-loading-buttons.component.html",
        styleUrls: ["./custom-loading-buttons.component.scss"]
    }),
    __metadata("design:paramtypes", [ChangeDetectorRef])
], CustomLoadingButtonsComponent);
export { CustomLoadingButtonsComponent };
//# sourceMappingURL=custom-loading-buttons.component.js.map
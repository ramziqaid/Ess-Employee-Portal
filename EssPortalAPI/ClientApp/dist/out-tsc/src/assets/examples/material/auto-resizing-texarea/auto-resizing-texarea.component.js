var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from "@angular/core";
import { CdkTextareaAutosize } from "@angular/cdk/text-field";
import { NgZone, ViewChild } from "@angular/core";
import { take } from "rxjs/operators";
let AutoResizingTexareaComponent = class AutoResizingTexareaComponent {
    constructor(ngZone) {
        this.ngZone = ngZone;
    }
    triggerResize() {
        // Wait for changes to be applied, then trigger textarea resize.
        this.ngZone.onStable
            .pipe(take(1))
            .subscribe(() => this.autosize.resizeToFitContent(true));
    }
    ngOnInit() { }
};
__decorate([
    ViewChild("autosize"),
    __metadata("design:type", CdkTextareaAutosize)
], AutoResizingTexareaComponent.prototype, "autosize", void 0);
AutoResizingTexareaComponent = __decorate([
    Component({
        selector: "app-auto-resizing-texarea",
        templateUrl: "./auto-resizing-texarea.component.html",
        styleUrls: ["./auto-resizing-texarea.component.scss"]
    }),
    __metadata("design:paramtypes", [NgZone])
], AutoResizingTexareaComponent);
export { AutoResizingTexareaComponent };
//# sourceMappingURL=auto-resizing-texarea.component.js.map
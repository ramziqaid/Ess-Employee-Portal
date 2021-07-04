var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, Input, ViewChild, ViewContainerRef, ComponentFactoryResolver } from "@angular/core";
// import { EXAMPLE_COMPONENTS } from "assets/examples/examples";
let EgretExampleViewerComponent = class EgretExampleViewerComponent {
    constructor(cfr) {
        this.cfr = cfr;
    }
    // Component ID
    set exampleId(exampleId) {
        if (exampleId) {
            this._exampleId = exampleId;
        }
        else {
            console.log("EXAMPLE ID MISSING");
        }
    }
    get exampleId() {
        return this._exampleId;
    }
    ngOnInit() {
        this.componentPath = this.path + this.exampleId + '/' + this.exampleId + '.component';
    }
    ngAfterViewInit() {
        if (!this.data) {
            console.log('EXAMPLE COMPONENT MISSING');
            return;
        }
        let componentFactory = this.cfr.resolveComponentFactory(this.data.component);
        this.exampleViewRef = this.exampleContainer.createComponent(componentFactory);
    }
    ngOnDestroy() {
        if (this.exampleViewRef) {
            this.exampleViewRef.destroy();
        }
    }
};
__decorate([
    Input("exampleId"),
    __metadata("design:type", String),
    __metadata("design:paramtypes", [String])
], EgretExampleViewerComponent.prototype, "exampleId", null);
__decorate([
    Input('data'),
    __metadata("design:type", Object)
], EgretExampleViewerComponent.prototype, "data", void 0);
__decorate([
    Input('path'),
    __metadata("design:type", Object)
], EgretExampleViewerComponent.prototype, "path", void 0);
__decorate([
    ViewChild('exampleContainer', { read: ViewContainerRef }),
    __metadata("design:type", ViewContainerRef)
], EgretExampleViewerComponent.prototype, "exampleContainer", void 0);
EgretExampleViewerComponent = __decorate([
    Component({
        selector: "egret-example-viewer",
        templateUrl: "./example-viewer.component.html",
        styleUrls: ["./example-viewer.component.scss"]
    }),
    __metadata("design:paramtypes", [ComponentFactoryResolver])
], EgretExampleViewerComponent);
export { EgretExampleViewerComponent };
//# sourceMappingURL=example-viewer.component.js.map
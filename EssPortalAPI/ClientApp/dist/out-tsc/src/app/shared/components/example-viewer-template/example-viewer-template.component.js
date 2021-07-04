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
import { ActivatedRoute } from '@angular/router';
import { Subject, combineLatest } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
let EgretExampleViewerTemplateComponent = class EgretExampleViewerTemplateComponent {
    constructor(route) {
        this.route = route;
        this.exampleComponents = {};
        this.unsubscribeAll = new Subject();
    }
    ngOnInit() {
        combineLatest(this.route.params, this.route.data)
            .pipe(takeUntil(this.unsubscribeAll))
            .subscribe(([params, data]) => {
            this.id = params['id'];
            this.examples = data.map[this.id];
            this.exampleComponents = data.components;
            this.componentDirPath = data.path;
            const title = this.id.replace('-', ' ');
            this.title = title.charAt(0).toUpperCase() + title.substring(1);
            // console.log(params, data);
        });
    }
    ngOnDestroy() {
        this.unsubscribeAll.next();
        this.unsubscribeAll.complete();
    }
};
EgretExampleViewerTemplateComponent = __decorate([
    Component({
        selector: 'egret-example-viewer-template',
        templateUrl: './example-viewer-template.component.html',
        styleUrls: ['./example-viewer-template.component.scss']
    }),
    __metadata("design:paramtypes", [ActivatedRoute])
], EgretExampleViewerTemplateComponent);
export { EgretExampleViewerTemplateComponent };
//# sourceMappingURL=example-viewer-template.component.js.map
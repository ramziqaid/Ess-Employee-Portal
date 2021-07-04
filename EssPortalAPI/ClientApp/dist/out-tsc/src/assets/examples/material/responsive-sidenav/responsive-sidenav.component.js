var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { ChangeDetectorRef, Component } from '@angular/core';
import { MediaMatcher } from '@angular/cdk/layout';
let ResponsiveSidenavComponent = class ResponsiveSidenavComponent {
    constructor(changeDetectorRef, media) {
        this.fillerNav = Array.from({ length: 10 }, (_, i) => `Nav Item ${i + 1}`);
        this.fillerContent = Array.from({ length: 5 }, () => `my content`);
        this.mobileQuery = media.matchMedia('(max-width: 600px)');
        this._mobileQueryListener = () => changeDetectorRef.detectChanges();
        this.mobileQuery.addListener(this._mobileQueryListener);
    }
    ngOnDestroy() {
        this.mobileQuery.removeListener(this._mobileQueryListener);
    }
};
ResponsiveSidenavComponent = __decorate([
    Component({
        selector: 'app-responsive-sidenav',
        templateUrl: './responsive-sidenav.component.html',
        styleUrls: ['./responsive-sidenav.component.scss']
    }),
    __metadata("design:paramtypes", [ChangeDetectorRef, MediaMatcher])
], ResponsiveSidenavComponent);
export { ResponsiveSidenavComponent };
//# sourceMappingURL=responsive-sidenav.component.js.map
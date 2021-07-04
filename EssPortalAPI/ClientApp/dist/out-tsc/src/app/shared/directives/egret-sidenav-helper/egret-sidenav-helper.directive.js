var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Directive, HostBinding, Input, HostListener } from "@angular/core";
import { takeUntil } from "rxjs/operators";
import { Subject } from "rxjs";
import { MatchMediaService } from "app/shared/services/match-media.service";
import { EgretSidenavHelperService } from "./egret-sidenav-helper.service";
import { MatSidenav } from "@angular/material/sidenav";
import { MediaObserver } from "@angular/flex-layout";
let EgretSidenavHelperDirective = class EgretSidenavHelperDirective {
    constructor(matchMediaService, egretSidenavHelperService, matSidenav, mediaObserver) {
        this.matchMediaService = matchMediaService;
        this.egretSidenavHelperService = egretSidenavHelperService;
        this.matSidenav = matSidenav;
        this.mediaObserver = mediaObserver;
        // Set the default value
        this.isOpen = true;
        this.unsubscribeAll = new Subject();
    }
    ngOnInit() {
        this.egretSidenavHelperService.setSidenav(this.id, this.matSidenav);
        if (this.mediaObserver.isActive(this.isOpenBreakpoint)) {
            this.isOpen = true;
            this.matSidenav.mode = "side";
            this.matSidenav.toggle(true);
        }
        else {
            this.isOpen = false;
            this.matSidenav.mode = "over";
            this.matSidenav.toggle(false);
        }
        this.matchMediaService.onMediaChange
            .pipe(takeUntil(this.unsubscribeAll))
            .subscribe(() => {
            if (this.mediaObserver.isActive(this.isOpenBreakpoint)) {
                this.isOpen = true;
                this.matSidenav.mode = "side";
                this.matSidenav.toggle(true);
            }
            else {
                this.isOpen = false;
                this.matSidenav.mode = "over";
                this.matSidenav.toggle(false);
            }
        });
    }
    ngOnDestroy() {
        this.unsubscribeAll.next();
        this.unsubscribeAll.complete();
    }
};
__decorate([
    HostBinding("class.is-open"),
    __metadata("design:type", Boolean)
], EgretSidenavHelperDirective.prototype, "isOpen", void 0);
__decorate([
    Input("egretSidenavHelper"),
    __metadata("design:type", String)
], EgretSidenavHelperDirective.prototype, "id", void 0);
__decorate([
    Input("isOpen"),
    __metadata("design:type", String)
], EgretSidenavHelperDirective.prototype, "isOpenBreakpoint", void 0);
EgretSidenavHelperDirective = __decorate([
    Directive({
        selector: "[egretSidenavHelper]"
    }),
    __metadata("design:paramtypes", [MatchMediaService,
        EgretSidenavHelperService,
        MatSidenav,
        MediaObserver])
], EgretSidenavHelperDirective);
export { EgretSidenavHelperDirective };
let EgretSidenavTogglerDirective = class EgretSidenavTogglerDirective {
    constructor(egretSidenavHelperService) {
        this.egretSidenavHelperService = egretSidenavHelperService;
    }
    onClick() {
        // console.log(this.egretSidenavHelperService.getSidenav(this.id))
        this.egretSidenavHelperService.getSidenav(this.id).toggle();
    }
};
__decorate([
    Input("egretSidenavToggler"),
    __metadata("design:type", Object)
], EgretSidenavTogglerDirective.prototype, "id", void 0);
__decorate([
    HostListener("click"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], EgretSidenavTogglerDirective.prototype, "onClick", null);
EgretSidenavTogglerDirective = __decorate([
    Directive({
        selector: "[egretSidenavToggler]"
    }),
    __metadata("design:paramtypes", [EgretSidenavHelperService])
], EgretSidenavTogglerDirective);
export { EgretSidenavTogglerDirective };
//# sourceMappingURL=egret-sidenav-helper.directive.js.map
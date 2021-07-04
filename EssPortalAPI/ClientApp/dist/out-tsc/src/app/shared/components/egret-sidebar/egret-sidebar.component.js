var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, Input, HostBinding, HostListener, Directive, Renderer2, ElementRef, ChangeDetectorRef } from "@angular/core";
import { MatchMediaService } from "app/shared/services/match-media.service";
import { MediaObserver } from "@angular/flex-layout";
import { Subject } from "rxjs";
import { takeUntil } from "rxjs/operators";
import { EgretSidebarHelperService } from "./egret-sidebar-helper.service";
let EgretSidebarComponent = class EgretSidebarComponent {
    constructor(matchMediaService, mediaObserver, sidebarHelperService, _renderer, _elementRef, cdr) {
        this.matchMediaService = matchMediaService;
        this.mediaObserver = mediaObserver;
        this.sidebarHelperService = sidebarHelperService;
        this._renderer = _renderer;
        this._elementRef = _elementRef;
        this.cdr = cdr;
        this.backdrop = null;
        this.lockedBreakpoint = "gt-sm";
        this.unsubscribeAll = new Subject();
    }
    ngOnInit() {
        this.sidebarHelperService.setSidebar(this.name, this);
        if (this.mediaObserver.isActive(this.lockedBreakpoint)) {
            this.sidebarLockedOpen = true;
            this.opened = true;
        }
        else {
            this.sidebarLockedOpen = false;
            this.opened = false;
        }
        this.matchMediaService.onMediaChange
            .pipe(takeUntil(this.unsubscribeAll))
            .subscribe(() => {
            // console.log("medua sub");
            if (this.mediaObserver.isActive(this.lockedBreakpoint)) {
                this.sidebarLockedOpen = true;
                this.opened = true;
            }
            else {
                this.sidebarLockedOpen = false;
                this.opened = false;
            }
        });
    }
    open() {
        this.opened = true;
        if (!this.sidebarLockedOpen && !this.backdrop) {
            this.showBackdrop();
        }
    }
    close() {
        this.opened = false;
        this.hideBackdrop();
    }
    toggle() {
        if (this.opened) {
            this.close();
        }
        else {
            this.open();
        }
    }
    showBackdrop() {
        this.backdrop = this._renderer.createElement("div");
        this.backdrop.classList.add("egret-sidebar-overlay");
        this._renderer.appendChild(this._elementRef.nativeElement.parentElement, this.backdrop);
        // Close sidebar onclick
        this.backdrop.addEventListener("click", () => {
            this.close();
        });
        this.cdr.markForCheck();
    }
    hideBackdrop() {
        if (this.backdrop) {
            this.backdrop.parentNode.removeChild(this.backdrop);
            this.backdrop = null;
        }
        this.cdr.markForCheck();
    }
    ngOnDestroy() {
        this.unsubscribeAll.next();
        this.unsubscribeAll.complete();
        this.sidebarHelperService.removeSidebar(this.name);
    }
};
__decorate([
    Input(),
    __metadata("design:type", String)
], EgretSidebarComponent.prototype, "name", void 0);
__decorate([
    Input(),
    HostBinding("class.position-right"),
    __metadata("design:type", Boolean)
], EgretSidebarComponent.prototype, "right", void 0);
__decorate([
    HostBinding("class.open"),
    __metadata("design:type", Boolean)
], EgretSidebarComponent.prototype, "opened", void 0);
__decorate([
    HostBinding("class.sidebar-locked-open"),
    __metadata("design:type", Boolean)
], EgretSidebarComponent.prototype, "sidebarLockedOpen", void 0);
__decorate([
    HostBinding("class.is-over"),
    __metadata("design:type", Boolean)
], EgretSidebarComponent.prototype, "isOver", void 0);
EgretSidebarComponent = __decorate([
    Component({
        selector: "egret-sidebar",
        templateUrl: "./egret-sidebar.component.html",
        styleUrls: ["./egret-sidebar.component.scss"]
    }),
    __metadata("design:paramtypes", [MatchMediaService,
        MediaObserver,
        EgretSidebarHelperService,
        Renderer2,
        ElementRef,
        ChangeDetectorRef])
], EgretSidebarComponent);
export { EgretSidebarComponent };
let EgretSidebarTogglerDirective = class EgretSidebarTogglerDirective {
    constructor(egretSidebarHelperService) {
        this.egretSidebarHelperService = egretSidebarHelperService;
    }
    onClick() {
        this.egretSidebarHelperService.getSidebar(this.id).toggle();
    }
};
__decorate([
    Input("egretSidebarToggler"),
    __metadata("design:type", Object)
], EgretSidebarTogglerDirective.prototype, "id", void 0);
__decorate([
    HostListener("click"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], EgretSidebarTogglerDirective.prototype, "onClick", null);
EgretSidebarTogglerDirective = __decorate([
    Directive({
        selector: "[egretSidebarToggler]"
    }),
    __metadata("design:paramtypes", [EgretSidebarHelperService])
], EgretSidebarTogglerDirective);
export { EgretSidebarTogglerDirective };
//# sourceMappingURL=egret-sidebar.component.js.map
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontSizeDirective } from './font-size.directive';
import { ScrollToDirective } from './scroll-to.directive';
import { AppDropdownDirective } from './dropdown.directive';
import { DropdownAnchorDirective } from './dropdown-anchor.directive';
import { DropdownLinkDirective } from './dropdown-link.directive';
import { EgretSideNavToggleDirective } from './egret-side-nav-toggle.directive';
import { EgretSidenavHelperDirective, EgretSidenavTogglerDirective } from './egret-sidenav-helper/egret-sidenav-helper.directive';
import { EgretHighlightDirective } from './egret-highlight.directive';
const directives = [
    FontSizeDirective,
    ScrollToDirective,
    AppDropdownDirective,
    DropdownAnchorDirective,
    DropdownLinkDirective,
    EgretSideNavToggleDirective,
    EgretSidenavHelperDirective,
    EgretSidenavTogglerDirective,
    EgretHighlightDirective
];
let SharedDirectivesModule = class SharedDirectivesModule {
};
SharedDirectivesModule = __decorate([
    NgModule({
        imports: [
            CommonModule
        ],
        declarations: directives,
        exports: directives
    })
], SharedDirectivesModule);
export { SharedDirectivesModule };
//# sourceMappingURL=shared-directives.module.js.map
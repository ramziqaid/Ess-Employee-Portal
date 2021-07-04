var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LeftSidebarCardComponent } from './left-sidebar-card/left-sidebar-card.component';
import { FullWidthCardComponent } from './full-width-card/full-width-card.component';
import { RightSidebarCardComponent } from './right-sidebar-card/right-sidebar-card.component';
import { FullWidthPlainComponent } from './full-width-plain/full-width-plain.component';
import { LeftSidebarPlainComponent } from './left-sidebar-plain/left-sidebar-plain.component';
import { FullWidthCardTabComponent } from './full-width-card-tab/full-width-card-tab.component';
const routes = [
    {
        path: 'full-width-card',
        component: FullWidthCardComponent
    },
    {
        path: 'full-width-card-tab',
        component: FullWidthCardTabComponent
    },
    {
        path: 'left-sidebar-card',
        component: LeftSidebarCardComponent
    },
    {
        path: 'right-sidebar-card',
        component: RightSidebarCardComponent
    },
    {
        path: 'full-width-plain',
        component: FullWidthPlainComponent
    },
    {
        path: 'left-sidebar-plain',
        component: LeftSidebarPlainComponent
    },
];
let PageLayoutsRoutingModule = class PageLayoutsRoutingModule {
};
PageLayoutsRoutingModule = __decorate([
    NgModule({
        imports: [RouterModule.forChild(routes)],
        exports: [RouterModule]
    })
], PageLayoutsRoutingModule);
export { PageLayoutsRoutingModule };
//# sourceMappingURL=page-layouts-routing.module.js.map
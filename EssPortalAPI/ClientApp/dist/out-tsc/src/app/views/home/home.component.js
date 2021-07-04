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
import { Router } from '@angular/router';
import { AppLoaderService } from '../../shared/services/app-loader/app-loader.service';
// import PerfectScrollbar from 'perfect-scrollbar';
import { LayoutService } from 'app/shared/services/layout.service';
let HomeComponent = class HomeComponent {
    // private homePS: PerfectScrollbar;
    constructor(router, loader, layout) {
        this.router = router;
        this.loader = loader;
        this.layout = layout;
        /****** Only for demo) **********/
        this.versions = [
            {
                name: 'Dark sidebar',
                photo: 'assets/images/screenshots/black_sidebar.png',
                dest: 'dashboard/learning-management',
                conf: `{
        "navigationPos": "side",
        "sidebarStyle": "full",
        "sidebarColor": "slate",
        "topbarColor": "white",
        "footerColor": "slate",
        "dir": "ltr",
        "useBreadcrumb": true,
        "topbarFixed": false,
        "breadcrumb": "simple",
        "matTheme": "egret-navy"
      }`
            }, {
                name: 'Light Sidebar',
                photo: 'assets/images/screenshots/white_sidebar.png',
                dest: 'dashboard/analytics',
                conf: `{
        "navigationPos": "side",
        "sidebarStyle": "full",
        "sidebarColor": "white",
        "topbarColor": "white",
        "footerColor":"slate",
        "dir": "ltr",
        "useBreadcrumb": true,
        "topbarFixed": false,
        "breadcrumb": "simple",
        "matTheme": "egret-navy"
      }`
            },
            {
                name: 'Dark Theme',
                photo: 'assets/images/screenshots/dark_theme.png',
                dest: 'dashboard/analytics-alt',
                conf: `{
        "navigationPos": "side",
        "sidebarStyle": "compact",
        "sidebarColor": "slate",
        "topbarColor": "slate",
        "footerColor":"slate",
        "dir": "ltr",
        "useBreadcrumb": true,
        "topbarFixed": false,
        "breadcrumb": "simple",
        "matTheme": "egret-navy-dark"
      }`
            },
            {
                name: 'Horizontal Navigation',
                photo: 'assets/images/screenshots/horizontal_nav.png',
                dest: 'dashboard/analytics-alt',
                conf: `{
        "navigationPos": "top",
        "sidebarStyle": "compact",
        "sidebarColor": "slate",
        "topbarColor": "slate",
        "footerColor":"slate",
        "dir": "ltr",
        "useBreadcrumb": true,
        "topbarFixed": false,
        "breadcrumb": "simple",
        "matTheme": "egret-navy"
      }`
            },
        ];
    }
    ngOnInit() {
        this.mainVersion = this.versions[0];
    }
    ngOnDestroy() {
        // if (this.homePS) this.homePS.destroy();
        this.loader.close();
    }
    ngAfterViewInit() {
        // setTimeout(() => {
        //   this.homePS = new PerfectScrollbar('.scrollable')
        // });
    }
    /****** Remove this (Only for demo) **********/
    goToDashboard(v) {
        let origin = window.location.origin;
        window.location.href = `${origin}/${v.dest}/?layout=${v.conf}`;
    }
    goToMainDash() {
        this.loader.open();
        this.router.navigateByUrl('/dashboard/analytics');
    }
};
HomeComponent = __decorate([
    Component({
        selector: 'app-home',
        templateUrl: './home.component.html'
    }),
    __metadata("design:paramtypes", [Router,
        AppLoaderService,
        LayoutService])
], HomeComponent);
export { HomeComponent };
//# sourceMappingURL=home.component.js.map
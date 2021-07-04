var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { getQueryParam } from '../helpers/url.helper';
import { ThemeService } from './theme.service';
let LayoutService = class LayoutService {
    constructor(themeService) {
        this.themeService = themeService;
        this.layoutConf = {};
        this.layoutConfSubject = new BehaviorSubject(this.layoutConf);
        this.layoutConf$ = this.layoutConfSubject.asObservable();
        this.fullWidthRoutes = ['shop'];
        var dir = localStorage.getItem('dir');
        if (localStorage.getItem("myThemes") != undefined) {
            var myThemes = JSON.parse(localStorage.getItem("myThemes"));
            myThemes.dir = dir;
            this.setAppLayout(myThemes);
        }
        else {
            this.setAppLayout(
            // ******** SET YOUR LAYOUT OPTIONS HERE *********
            {
                navigationPos: 'side',
                sidebarStyle: 'full',
                sidebarColor: 'slate',
                sidebarCompactToggle: false,
                dir: dir,
                useBreadcrumb: true,
                topbarFixed: false,
                footerFixed: false,
                topbarColor: 'white',
                footerColor: 'slate',
                matTheme: 'egret-navy',
                breadcrumb: 'simple',
                perfectScrollbar: true,
            });
        }
    }
    setAppLayout(layoutConf) {
        this.layoutConf = Object.assign(Object.assign({}, this.layoutConf), layoutConf);
        this.applyMatTheme(this.layoutConf.matTheme);
        // ******* Only for demo purpose ***
        this.setLayoutFromQuery();
        // **********************
    }
    publishLayoutChange(lc, opt = {}) {
        if (this.layoutConf.matTheme !== lc.matTheme && lc.matTheme) {
            this.themeService.changeTheme(this.layoutConf.matTheme, lc.matTheme);
        }
        this.layoutConf = Object.assign(this.layoutConf, lc);
        this.layoutConfSubject.next(this.layoutConf);
    }
    applyMatTheme(theme) {
        this.themeService.applyMatTheme(this.layoutConf.matTheme);
    }
    setLayoutFromQuery() {
        const layoutConfString = getQueryParam('layout');
        const prevTheme = this.layoutConf.matTheme;
        try {
            this.layoutConf = JSON.parse(layoutConfString);
            this.themeService.changeTheme(prevTheme, this.layoutConf.matTheme);
        }
        catch (e) { }
    }
    adjustLayout(options = {}) {
        let sidebarStyle;
        this.isMobile = this.isSm();
        this.currentRoute = options.route || this.currentRoute;
        sidebarStyle = this.isMobile ? 'closed' : 'full';
        if (this.currentRoute) {
            this.fullWidthRoutes.forEach((route) => {
                if (this.currentRoute.indexOf(route) !== -1) {
                    sidebarStyle = 'closed';
                }
            });
        }
        this.publishLayoutChange({
            isMobile: this.isMobile,
            sidebarStyle,
        });
    }
    isSm() {
        return window.matchMedia(`(max-width: 959px)`).matches;
    }
};
LayoutService = __decorate([
    Injectable({
        providedIn: 'root',
    }),
    __metadata("design:paramtypes", [ThemeService])
], LayoutService);
export { LayoutService };
//# sourceMappingURL=layout.service.js.map
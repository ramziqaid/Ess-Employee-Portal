var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, Input, ViewChildren, Renderer2 } from '@angular/core';
import { ThemeService } from '../../services/theme.service';
import { LayoutService } from '../../services/layout.service';
import { TranslateService } from '@ngx-translate/core';
import { JwtAuthService } from '../../services/auth/jwt-auth.service';
import { EgretNotifications2Component } from '../egret-notifications2/egret-notifications2.component';
let HeaderSideComponent = class HeaderSideComponent {
    constructor(themeService, layout, translate, renderer, jwtAuth) {
        this.themeService = themeService;
        this.layout = layout;
        this.translate = translate;
        this.renderer = renderer;
        this.jwtAuth = jwtAuth;
        this.availableLangs = [{
                name: 'EN',
                code: 'en',
                flag: 'flag-icon-us'
            }, {
                name: 'ع',
                code: 'ar',
                flag: 'flag-icon-sa'
            }];
        this.currentLang = this.availableLangs[0];
        var dir = localStorage.getItem('dir');
        this.currentLang = (dir === "ltr" ? this.availableLangs[0] : this.availableLangs[1]);
    }
    ngOnInit() {
        this.egretThemes = this.themeService.egretThemes;
        this.layoutConf = this.layout.layoutConf;
        this.translate.use(this.currentLang.code);
    }
    setLang(lng) {
        debugger;
        this.currentLang = lng;
        this.translate.use(lng.code);
        localStorage.setItem('dir', lng.code === "en" ? "ltr" : "rtl");
        this.layoutConf.dir = (lng.code === "en" ? "ltr" : "rtl");
    }
    changeTheme(theme) {
        //this.themeService.changeTheme(theme);
    }
    toggleNotific() {
        this.notificPanel.toggle();
    }
    toggleSidenav() {
        if (this.layoutConf.sidebarStyle === 'closed') {
            return this.layout.publishLayoutChange({
                sidebarStyle: 'full'
            });
        }
        this.layout.publishLayoutChange({
            sidebarStyle: 'closed'
        });
    }
    toggleCollapse() {
        // compact --> full
        if (this.layoutConf.sidebarStyle === 'compact') {
            return this.layout.publishLayoutChange({
                sidebarStyle: 'full',
                sidebarCompactToggle: false
            }, { transitionClass: true });
        }
        // * --> compact
        this.layout.publishLayoutChange({
            sidebarStyle: 'compact',
            sidebarCompactToggle: true
        }, { transitionClass: true });
    }
    onSearch(e) {
        //   console.log(e)
    }
};
__decorate([
    Input(),
    __metadata("design:type", Object)
], HeaderSideComponent.prototype, "notificPanel", void 0);
__decorate([
    ViewChildren(EgretNotifications2Component),
    __metadata("design:type", Object)
], HeaderSideComponent.prototype, "noti", void 0);
HeaderSideComponent = __decorate([
    Component({
        selector: 'app-header-side',
        templateUrl: './header-side.template.html'
    }),
    __metadata("design:paramtypes", [ThemeService,
        LayoutService,
        TranslateService,
        Renderer2,
        JwtAuthService])
], HeaderSideComponent);
export { HeaderSideComponent };
//# sourceMappingURL=header-side.component.js.map
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, Input, Renderer2 } from '@angular/core';
import { NavigationService } from "../../../shared/services/navigation.service";
import { ThemeService } from '../../../shared/services/theme.service';
import { TranslateService } from '@ngx-translate/core';
import { LayoutService } from '../../services/layout.service';
import { AuthService } from 'app/core/services';
let HeaderTopComponent = class HeaderTopComponent {
    constructor(layout, navService, themeService, translate, renderer, jwtAuth) {
        this.layout = layout;
        this.navService = navService;
        this.themeService = themeService;
        this.translate = translate;
        this.renderer = renderer;
        this.jwtAuth = jwtAuth;
        this.egretThemes = [];
        this.currentLang = 'en';
        this.availableLangs = [{
                name: 'English',
                code: 'en',
            }, {
                name: 'عربي',
                code: 'ar',
            }];
        var dir = localStorage.getItem('dir');
        this.currentLang = (dir === "ltr" ? "en" : "ar");
    }
    ngOnInit() {
        this.layoutConf = this.layout.layoutConf;
        this.egretThemes = this.themeService.egretThemes;
        this.menuItemSub = this.navService.menuItems$
            .subscribe(res => {
            res = res.filter(item => item.type !== 'icon' && item.type !== 'separator');
            let limit = 4;
            let mainItems = res.slice(0, limit);
            if (res.length <= limit) {
                return this.menuItems = mainItems;
            }
            let subItems = res.slice(limit, res.length - 1);
            mainItems.push({
                name: 'More',
                type: 'dropDown',
                tooltip: 'More',
                icon: 'more_horiz',
                sub: subItems
            });
            this.menuItems = mainItems;
        });
    }
    ngOnDestroy() {
        this.menuItemSub.unsubscribe();
    }
    setLang() {
        this.translate.use(this.currentLang);
        localStorage.setItem('dir', this.currentLang === "en" ? "ltr" : "rtl");
        this.layoutConf.dir = (this.currentLang === "en" ? "ltr" : "rtl");
    }
    changeTheme(theme) {
        this.layout.publishLayoutChange({ matTheme: theme.name });
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
};
__decorate([
    Input(),
    __metadata("design:type", Object)
], HeaderTopComponent.prototype, "notificPanel", void 0);
HeaderTopComponent = __decorate([
    Component({
        selector: 'app-header-top',
        templateUrl: './header-top.component.html'
    }),
    __metadata("design:paramtypes", [LayoutService,
        NavigationService,
        ThemeService,
        TranslateService,
        Renderer2,
        AuthService])
], HeaderTopComponent);
export { HeaderTopComponent };
//# sourceMappingURL=header-top.component.js.map
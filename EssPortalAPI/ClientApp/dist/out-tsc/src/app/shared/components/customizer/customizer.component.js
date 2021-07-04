var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, Renderer2 } from '@angular/core';
import { NavigationService } from '../../../shared/services/navigation.service';
import { LayoutService } from '../../../shared/services/layout.service';
import { CustomizerService } from 'app/shared/services/customizer.service';
import { ThemeService } from 'app/shared/services/theme.service';
let CustomizerComponent = class CustomizerComponent {
    constructor(navService, layout, themeService, customizer, renderer) {
        this.navService = navService;
        this.layout = layout;
        this.themeService = themeService;
        this.customizer = customizer;
        this.renderer = renderer;
        this.isCustomizerOpen = false;
        this.viewMode = 'options';
        this.sidenavTypes = [
            {
                name: 'Default Menu',
                value: 'default-menu',
            },
            {
                name: 'Separator Menu',
                value: 'separator-menu',
            },
            {
                name: 'Icon Menu',
                value: 'icon-menu',
            },
        ];
        this.selectedMenu = 'icon-menu';
        this.isTopbarFixed = false;
        this.isFooterFixed = false;
        this.isRTL = false;
        this.perfectScrollbarEnabled = true;
    }
    ngOnInit() {
        this.layoutConf = this.layout.layoutConf;
        this.selectedLayout = this.layoutConf.navigationPos;
        this.isTopbarFixed = this.layoutConf.topbarFixed;
        this.isRTL = this.layoutConf.dir === 'rtl';
        this.egretThemes = this.themeService.egretThemes;
    }
    changeTheme(theme) {
        // this.themeService.changeTheme(theme);
        this.layout.publishLayoutChange({ matTheme: theme.name });
    }
    changeLayoutStyle(data) {
        this.layout.publishLayoutChange({ navigationPos: this.selectedLayout });
    }
    changeSidenav(data) {
        this.navService.publishNavigationChange(data.value);
    }
    toggleBreadcrumb(data) {
        this.layout.publishLayoutChange({ useBreadcrumb: data.checked });
    }
    toggleTopbarFixed(data) {
        this.layout.publishLayoutChange({ topbarFixed: data.checked });
    }
    toggleDir(data) {
        let dir = data.checked ? 'rtl' : 'ltr';
        this.layout.publishLayoutChange({ dir: dir });
    }
    tooglePerfectScrollbar(data) {
        this.layout.publishLayoutChange({ perfectScrollbar: this.perfectScrollbarEnabled });
    }
    saveTheme() {
        localStorage.setItem("myThemes", JSON.stringify(this.layoutConf));
        this.isCustomizerOpen = false;
    }
};
CustomizerComponent = __decorate([
    Component({
        selector: 'app-customizer',
        templateUrl: './customizer.component.html',
        styleUrls: ['./customizer.component.scss'],
    }),
    __metadata("design:paramtypes", [NavigationService,
        LayoutService,
        ThemeService,
        CustomizerService,
        Renderer2])
], CustomizerComponent);
export { CustomizerComponent };
//# sourceMappingURL=customizer.component.js.map
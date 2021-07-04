var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
import { Injectable, Inject, RendererFactory2, EventEmitter } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { getQueryParam } from '../helpers/url.helper';
let ThemeService = class ThemeService {
    constructor(document, rendererFactory) {
        this.document = document;
        this.onThemeChange = new EventEmitter();
        this.egretThemes = [
            {
                'name': 'egret-navy',
                'baseColor': '#10174c',
                'isActive': false
            },
            {
                'name': 'egret-navy-dark',
                'baseColor': '#0081ff',
                'isActive': false
            }
        ];
        this.renderer = rendererFactory.createRenderer(null, null);
    }
    // Invoked in AppComponent and apply 'activatedTheme' on startup
    applyMatTheme(themeName) {
        this.activatedTheme = this.egretThemes.find(t => t.name === themeName);
        this.flipActiveFlag(themeName);
        // *********** ONLY FOR DEMO **********
        this.setThemeFromQuery();
        // ************************************
        // this.changeTheme(themeName);
        this.renderer.addClass(this.document.body, themeName);
    }
    changeTheme(prevTheme, themeName) {
        this.renderer.removeClass(this.document.body, prevTheme);
        this.renderer.addClass(this.document.body, themeName);
        this.flipActiveFlag(themeName);
        this.onThemeChange.emit(this.activatedTheme);
    }
    flipActiveFlag(themeName) {
        this.egretThemes.forEach((t) => {
            t.isActive = false;
            if (t.name === themeName) {
                t.isActive = true;
                this.activatedTheme = t;
            }
        });
    }
    // *********** ONLY FOR DEMO **********
    setThemeFromQuery() {
        const themeStr = getQueryParam('theme');
        try {
            this.activatedTheme = JSON.parse(themeStr);
            console.log(this.activatedTheme);
            this.flipActiveFlag(this.activatedTheme.name);
        }
        catch (e) { }
    }
};
ThemeService = __decorate([
    Injectable(),
    __param(0, Inject(DOCUMENT)),
    __metadata("design:paramtypes", [Document,
        RendererFactory2])
], ThemeService);
export { ThemeService };
//# sourceMappingURL=theme.service.js.map
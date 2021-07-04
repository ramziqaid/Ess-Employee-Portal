var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { LayoutService } from "./layout.service";
let CustomizerService = class CustomizerService {
    constructor(router, layout) {
        this.router = router;
        this.layout = layout;
        this.colors = [
            {
                class: "black",
                active: false
            },
            {
                class: "white",
                active: false
            },
            {
                class: "dark-blue",
                active: false
            },
            {
                class: "grey",
                active: false
            },
            {
                class: "brown",
                active: false
            },
            {
                class: "gray",
                active: false
            },
            {
                class: "purple",
                active: false
            },
            {
                class: "blue",
                active: false
            },
            {
                class: "indigo",
                active: false
            },
            {
                class: "yellow",
                active: false
            },
            {
                class: "green",
                active: false
            },
            {
                class: "pink",
                active: false
            },
            {
                class: "red",
                active: false
            },
            {
                class: "slate",
                active: false
            }
        ];
        this.topbarColors = this.getTopbarColors();
        this.sidebarColors = this.getSidebarColors();
        this.footerColors = this.getFooterColors();
    }
    getSidebarColors() {
        let sidebarColors = ['black', 'slate', 'white', 'grey', 'brown', 'purple', 'dark-blue',];
        return this.colors.filter(color => {
            return sidebarColors.includes(color.class);
        })
            .map(c => {
            c.active = c.class === this.layout.layoutConf.sidebarColor;
            return Object.assign({}, c);
        });
    }
    getTopbarColors() {
        let topbarColors = ['black', 'slate', 'white', 'dark-gray', 'purple', 'dark-blue', 'indigo', 'pink', 'red', 'yellow', 'green'];
        return this.colors.filter(color => {
            return topbarColors.includes(color.class);
        })
            .map(c => {
            c.active = c.class === this.layout.layoutConf.topbarColor;
            return Object.assign({}, c);
        });
    }
    getFooterColors() {
        let footerColors = ['black', 'slate', 'white', 'dark-gray', 'purple', 'dark-blue', 'indigo', 'pink', 'red', 'yellow', 'green'];
        return this.colors.filter(color => {
            return footerColors.includes(color.class);
        })
            .map(c => {
            c.active = c.class === this.layout.layoutConf.footerColor;
            return Object.assign({}, c);
        });
    }
    changeSidebarColor(color) {
        this.layout.publishLayoutChange({ sidebarColor: color.class });
        this.sidebarColors = this.getSidebarColors();
    }
    changeTopbarColor(color) {
        this.layout.publishLayoutChange({ topbarColor: color.class });
        this.topbarColors = this.getTopbarColors();
    }
    changeFooterColor(color) {
        this.layout.publishLayoutChange({ footerColor: color.class });
        this.footerColors = this.getFooterColors();
    }
    removeClass(el, className) {
        if (!el || el.length === 0)
            return;
        if (!el.length) {
            el.classList.remove(className);
        }
        else {
            for (var i = 0; i < el.length; i++) {
                el[i].classList.remove(className);
            }
        }
    }
    addClass(el, className) {
        if (!el)
            return;
        if (!el.length) {
            el.classList.add(className);
        }
        else {
            for (var i = 0; i < el.length; i++) {
                el[i].classList.add(className);
            }
        }
    }
    findClosest(el, className) {
        if (!el)
            return;
        while (el) {
            var parent = el.parentElement;
            if (parent && this.hasClass(parent, className)) {
                return parent;
            }
            el = parent;
        }
    }
    hasClass(el, className) {
        if (!el)
            return;
        return (` ${el.className} `.replace(/[\n\t]/g, " ").indexOf(` ${className} `) > -1);
    }
    toggleClass(el, className) {
        if (!el)
            return;
        if (this.hasClass(el, className)) {
            this.removeClass(el, className);
        }
        else {
            this.addClass(el, className);
        }
    }
};
CustomizerService = __decorate([
    Injectable({
        providedIn: "root"
    }),
    __metadata("design:paramtypes", [Router,
        LayoutService])
], CustomizerService);
export { CustomizerService };
//# sourceMappingURL=customizer.service.js.map
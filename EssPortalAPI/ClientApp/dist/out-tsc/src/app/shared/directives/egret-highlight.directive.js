var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Directive, ElementRef, Input, NgZone, ChangeDetectorRef } from "@angular/core";
import * as hl from "highlight.js";
import { HttpClient } from "@angular/common/http";
import { Subject } from "rxjs";
import { takeUntil } from "rxjs/operators";
let EgretHighlightDirective = class EgretHighlightDirective {
    constructor(el, cdr, _zone, http) {
        this.el = el;
        this.cdr = cdr;
        this._zone = _zone;
        this.http = http;
        this.unsubscribeAll = new Subject();
    }
    ngOnInit() {
        if (this.code) {
            this.highlightElement(this.code);
        }
        if (this.path) {
            this.highlightedCode = "Loading...";
            this.http
                .get(this.path, { responseType: "text" })
                .pipe(takeUntil(this.unsubscribeAll))
                .subscribe(response => {
                this.highlightElement(response, this.languages);
            });
        }
    }
    ngOnDestroy() {
        this.unsubscribeAll.next();
        this.unsubscribeAll.complete();
    }
    ngOnChanges(changes) {
        if (changes["code"] &&
            changes["code"].currentValue &&
            changes["code"].currentValue !== changes["code"].previousValue) {
            this.highlightElement(this.code);
            // console.log('hljs on change', changes)
        }
    }
    highlightElement(code, languages) {
        this._zone.runOutsideAngular(() => {
            const res = hl.highlightAuto(code);
            this.highlightedCode = res.value;
            // this.cdr.detectChanges();
            // console.log(languages)
        });
    }
};
__decorate([
    Input(),
    __metadata("design:type", String)
], EgretHighlightDirective.prototype, "path", void 0);
__decorate([
    Input("egretHighlight"),
    __metadata("design:type", String)
], EgretHighlightDirective.prototype, "code", void 0);
__decorate([
    Input(),
    __metadata("design:type", Array)
], EgretHighlightDirective.prototype, "languages", void 0);
EgretHighlightDirective = __decorate([
    Directive({
        host: {
            "[class.hljs]": "true",
            "[innerHTML]": "highlightedCode"
        },
        selector: "[egretHighlight]"
    }),
    __metadata("design:paramtypes", [ElementRef,
        ChangeDetectorRef,
        NgZone,
        HttpClient])
], EgretHighlightDirective);
export { EgretHighlightDirective };
//# sourceMappingURL=egret-highlight.directive.js.map
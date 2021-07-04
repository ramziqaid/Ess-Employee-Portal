var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, Output, EventEmitter, Input } from "@angular/core";
import { FormControl } from "@angular/forms";
import { debounceTime } from "rxjs/operators";
import { SearchService } from "../search.service";
import { Router, ActivatedRoute } from "@angular/router";
let SearchInputOverComponent = class SearchInputOverComponent {
    constructor(searchService, router, route) {
        this.searchService = searchService;
        this.router = router;
        this.route = route;
        this.placeholder = "Search here";
        this.search = new EventEmitter();
        this.searchCtrl = new FormControl();
    }
    ngOnInit() {
        this.searchCtrl.valueChanges.pipe(debounceTime(200))
            .subscribe(value => {
            this.search.emit(value);
            this.searchService.searchTerm.next(value);
        });
    }
    ngOnDestroy() {
        if (this.searchCtrlSub) {
            this.searchCtrlSub.unsubscribe();
        }
    }
    navigateToResult() {
        if (this.resultPage) {
            this.router.navigateByUrl(this.resultPage);
        }
    }
    open() {
        this.isOpen = true;
        this.navigateToResult();
    }
    close() {
        this.isOpen = false;
    }
    toggle() {
        this.isOpen = !this.isOpen;
    }
};
__decorate([
    Input('resultPage'),
    __metadata("design:type", String)
], SearchInputOverComponent.prototype, "resultPage", void 0);
__decorate([
    Input('placeholder'),
    __metadata("design:type", String)
], SearchInputOverComponent.prototype, "placeholder", void 0);
__decorate([
    Output("search"),
    __metadata("design:type", Object)
], SearchInputOverComponent.prototype, "search", void 0);
SearchInputOverComponent = __decorate([
    Component({
        selector: "egret-search-input-over",
        templateUrl: "./search-input-over.component.html",
        styleUrls: ["./search-input-over.component.scss"]
    }),
    __metadata("design:paramtypes", [SearchService,
        Router,
        ActivatedRoute])
], SearchInputOverComponent);
export { SearchInputOverComponent };
//# sourceMappingURL=search-input-over.component.js.map
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from "@angular/core";
import { SearchService } from "app/shared/search/search.service";
import { CountryService } from "../country.service";
let ResultPageComponent = class ResultPageComponent {
    constructor(searchService, countryService) {
        this.searchService = searchService;
        this.countryService = countryService;
    }
    ngOnInit() {
        this.searchTermSub = this.searchService.searchTerm$.subscribe(term => {
            this.countries$ = this.countryService.getCountries(term);
        });
    }
    ngOnDestroy() {
        if (this.searchTermSub) {
            this.searchTermSub.unsubscribe();
        }
    }
};
ResultPageComponent = __decorate([
    Component({
        selector: "app-result-page",
        templateUrl: "./result-page.component.html",
        styleUrls: ["./result-page.component.scss"]
    }),
    __metadata("design:paramtypes", [SearchService,
        CountryService])
], ResultPageComponent);
export { ResultPageComponent };
//# sourceMappingURL=result-page.component.js.map
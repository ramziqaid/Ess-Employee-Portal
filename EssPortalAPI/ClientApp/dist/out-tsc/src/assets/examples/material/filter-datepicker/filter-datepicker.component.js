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
let FilterDatepickerComponent = class FilterDatepickerComponent {
    constructor() {
        this.myFilter = (d) => {
            const day = d.getDay();
            // Prevent Saturday and Sunday from being selected.
            return day !== 0 && day !== 6;
        };
    }
    ngOnInit() {
    }
};
FilterDatepickerComponent = __decorate([
    Component({
        selector: 'app-filter-datepicker',
        templateUrl: './filter-datepicker.component.html',
        styleUrls: ['./filter-datepicker.component.scss']
    }),
    __metadata("design:paramtypes", [])
], FilterDatepickerComponent);
export { FilterDatepickerComponent };
//# sourceMappingURL=filter-datepicker.component.js.map
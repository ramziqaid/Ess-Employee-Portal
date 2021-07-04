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
import { TablesService } from '../tables.service';
let FilterTableComponent = class FilterTableComponent {
    constructor(service) {
        this.service = service;
        this.rows = [];
        this.columns = [];
        this.temp = [];
    }
    ngOnInit() {
        this.columns = this.service.getDataConf();
        this.rows = this.temp = this.service.getAll();
    }
    updateFilter(event) {
        const val = event.target.value.toLowerCase();
        var columns = Object.keys(this.temp[0]);
        // Removes last "$$index" from "column"
        columns.splice(columns.length - 1);
        // console.log(columns);
        if (!columns.length)
            return;
        const rows = this.temp.filter(function (d) {
            for (let i = 0; i <= columns.length; i++) {
                let column = columns[i];
                // console.log(d[column]);
                if (d[column] && d[column].toString().toLowerCase().indexOf(val) > -1) {
                    return true;
                }
            }
        });
        this.rows = rows;
    }
};
FilterTableComponent = __decorate([
    Component({
        selector: 'app-filter-table',
        templateUrl: './filter-table.component.html',
        styleUrls: ['./filter-table.component.css'],
        providers: [TablesService]
    }),
    __metadata("design:paramtypes", [TablesService])
], FilterTableComponent);
export { FilterTableComponent };
//# sourceMappingURL=filter-table.component.js.map
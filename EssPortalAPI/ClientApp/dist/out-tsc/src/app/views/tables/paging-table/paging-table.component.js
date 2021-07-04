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
let PagingTableComponent = class PagingTableComponent {
    constructor(service) {
        this.service = service;
        this.rows = [];
        this.columns = [];
    }
    ngOnInit() {
        this.columns = this.service.getDataConf();
        this.rows = this.service.getAll();
    }
};
PagingTableComponent = __decorate([
    Component({
        selector: 'app-paging-table',
        templateUrl: './paging-table.component.html',
        styleUrls: ['./paging-table.component.css'],
        providers: [TablesService]
    }),
    __metadata("design:paramtypes", [TablesService])
], PagingTableComponent);
export { PagingTableComponent };
//# sourceMappingURL=paging-table.component.js.map
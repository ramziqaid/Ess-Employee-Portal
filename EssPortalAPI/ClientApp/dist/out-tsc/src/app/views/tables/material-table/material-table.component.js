var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, ViewChild } from '@angular/core';
import { TablesService } from '../tables.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
let MaterialTableComponent = class MaterialTableComponent {
    constructor(tableService) {
        this.tableService = tableService;
        this.displayedColumns = [];
    }
    ngOnInit() {
        this.displayedColumns = this.tableService.getDataConf().map((c) => c.prop);
        this.dataSource = new MatTableDataSource(this.tableService.getAll());
    }
    ngAfterViewInit() {
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
    }
};
__decorate([
    ViewChild(MatPaginator),
    __metadata("design:type", MatPaginator)
], MaterialTableComponent.prototype, "paginator", void 0);
__decorate([
    ViewChild(MatSort),
    __metadata("design:type", MatSort)
], MaterialTableComponent.prototype, "sort", void 0);
MaterialTableComponent = __decorate([
    Component({
        selector: 'app-material-table',
        templateUrl: './material-table.component.html',
        styleUrls: ['./material-table.component.scss']
    }),
    __metadata("design:paramtypes", [TablesService])
], MaterialTableComponent);
export { MaterialTableComponent };
//# sourceMappingURL=material-table.component.js.map
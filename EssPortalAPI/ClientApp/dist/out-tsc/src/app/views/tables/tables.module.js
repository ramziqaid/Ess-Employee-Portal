var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { FilterTableComponent } from './filter-table/filter-table.component';
import { FullscreenTableComponent } from './fullscreen-table/fullscreen-table.component';
import { PagingTableComponent } from './paging-table/paging-table.component';
import { TablesRoutes } from './tables.routing';
import { MaterialTableComponent } from './material-table/material-table.component';
let TablesModule = class TablesModule {
};
TablesModule = __decorate([
    NgModule({
        imports: [
            CommonModule,
            MatInputModule,
            MatPaginatorModule,
            MatSortModule,
            MatTableModule,
            NgxDatatableModule,
            RouterModule.forChild(TablesRoutes)
        ],
        declarations: [FilterTableComponent, FullscreenTableComponent, PagingTableComponent, MaterialTableComponent]
    })
], TablesModule);
export { TablesModule };
//# sourceMappingURL=tables.module.js.map
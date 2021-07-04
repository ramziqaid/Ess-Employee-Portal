var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ChartsModule } from 'ng2-charts';
import { ChartsComponent } from './charts.component';
import { ChartsRoutes } from "./charts.routing";
let AppChartsModule = class AppChartsModule {
};
AppChartsModule = __decorate([
    NgModule({
        imports: [
            CommonModule,
            MatListModule,
            MatCardModule,
            FlexLayoutModule,
            ChartsModule,
            RouterModule.forChild(ChartsRoutes)
        ],
        declarations: [ChartsComponent]
    })
], AppChartsModule);
export { AppChartsModule };
//# sourceMappingURL=charts.module.js.map
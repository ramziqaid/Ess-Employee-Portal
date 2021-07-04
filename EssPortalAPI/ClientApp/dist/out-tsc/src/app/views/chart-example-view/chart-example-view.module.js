var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChartExampleViewRoutingModule } from './chart-example-view-routing.module';
import { ChartExampleViewComponent } from './chart-example-view.component';
import { ChartExamplesModule } from 'assets/examples/chart/chart-examples.module';
import { SharedComponentsModule } from 'app/shared/components/shared-components.module';
let ChartExampleViewModule = class ChartExampleViewModule {
};
ChartExampleViewModule = __decorate([
    NgModule({
        declarations: [ChartExampleViewComponent],
        imports: [
            CommonModule,
            ChartExamplesModule,
            SharedComponentsModule,
            ChartExampleViewRoutingModule
        ]
    })
], ChartExampleViewModule);
export { ChartExampleViewModule };
//# sourceMappingURL=chart-example-view.module.js.map
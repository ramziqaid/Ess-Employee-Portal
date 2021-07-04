var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ChartExampleViewComponent } from './chart-example-view.component';
import { EgretExampleViewerTemplateComponent } from 'app/shared/components/example-viewer-template/example-viewer-template.component';
import { CHART_EXAMPLE_COMPONENT_MAP, CHART_EXAMPLE_COMPONENTS } from 'assets/examples/chart';
const routes = [
    {
        path: ":id",
        component: ChartExampleViewComponent,
        children: [
            {
                path: "",
                component: EgretExampleViewerTemplateComponent,
                data: {
                    map: CHART_EXAMPLE_COMPONENT_MAP,
                    components: CHART_EXAMPLE_COMPONENTS,
                    path: "assets/examples/chart/"
                }
            }
        ],
        data: { title: "Chart", breadcrumb: "Chart" }
    }
];
let ChartExampleViewRoutingModule = class ChartExampleViewRoutingModule {
};
ChartExampleViewRoutingModule = __decorate([
    NgModule({
        imports: [RouterModule.forChild(routes)],
        exports: [RouterModule]
    })
], ChartExampleViewRoutingModule);
export { ChartExampleViewRoutingModule };
//# sourceMappingURL=chart-example-view-routing.module.js.map
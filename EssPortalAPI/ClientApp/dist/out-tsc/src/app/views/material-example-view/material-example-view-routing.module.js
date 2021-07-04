var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { MaterialExampleViewComponent } from "./material-example-view.component";
import { EgretExampleViewerTemplateComponent } from "app/shared/components/example-viewer-template/example-viewer-template.component";
import { MATERIAL_EXAMPLE_COMPONENT_MAP, MATERIAL_EXAMPLE_COMPONENTS } from "assets/examples/material";
const routes = [
    {
        path: ":id",
        component: MaterialExampleViewComponent,
        children: [
            {
                path: "",
                component: EgretExampleViewerTemplateComponent,
                data: {
                    map: MATERIAL_EXAMPLE_COMPONENT_MAP,
                    components: MATERIAL_EXAMPLE_COMPONENTS,
                    path: "assets/examples/material/"
                }
            }
        ],
        data: { title: "Material", breadcrumb: "UI Kits" }
    }
];
let MaterialExampleViewRoutingModule = class MaterialExampleViewRoutingModule {
};
MaterialExampleViewRoutingModule = __decorate([
    NgModule({
        imports: [RouterModule.forChild(routes)],
        exports: [RouterModule]
    })
], MaterialExampleViewRoutingModule);
export { MaterialExampleViewRoutingModule };
//# sourceMappingURL=material-example-view-routing.module.js.map
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialExampleViewRoutingModule } from './material-example-view-routing.module';
import { MaterialExampleViewComponent } from './material-example-view.component';
import { MaterialExamplesModule } from 'assets/examples/material/material-examples.module';
import { SharedComponentsModule } from 'app/shared/components/shared-components.module';
let MaterialExampleViewModule = class MaterialExampleViewModule {
};
MaterialExampleViewModule = __decorate([
    NgModule({
        declarations: [MaterialExampleViewComponent],
        imports: [
            CommonModule,
            SharedComponentsModule,
            MaterialExamplesModule,
            MaterialExampleViewRoutingModule
        ]
    })
], MaterialExampleViewModule);
export { MaterialExampleViewModule };
//# sourceMappingURL=material-example-view.module.js.map
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MATERIAL_EXAMPLE_COMPONENT_LIST } from '.';
import { SharedMaterialModule } from 'app/shared/shared-material.module';
import { SharedComponentsModule } from 'app/shared/components/shared-components.module';
let MaterialExamplesModule = class MaterialExamplesModule {
};
MaterialExamplesModule = __decorate([
    NgModule({
        declarations: [...MATERIAL_EXAMPLE_COMPONENT_LIST],
        imports: [
            CommonModule,
            FormsModule,
            ReactiveFormsModule,
            SharedComponentsModule,
            SharedMaterialModule
        ],
        exports: [...MATERIAL_EXAMPLE_COMPONENT_LIST],
    })
], MaterialExamplesModule);
export { MaterialExamplesModule };
//# sourceMappingURL=material-examples.module.js.map
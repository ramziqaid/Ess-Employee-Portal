var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// import { HighlightModule } from 'ngx-highlightjs';
import { UtilitiesRoutingModule } from './utilities-routing.module';
import { SpacingComponent } from './spacing/spacing.component';
import { SharedMaterialModule } from 'app/shared/shared-material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BorderComponent } from './border/border.component';
import { TypographyComponent } from './typography/typography.component';
import { SharedDirectivesModule } from 'app/shared/directives/shared-directives.module';
import { ColorsComponent } from './colors/colors.component';
let UtilitiesModule = class UtilitiesModule {
};
UtilitiesModule = __decorate([
    NgModule({
        declarations: [SpacingComponent, BorderComponent, TypographyComponent, ColorsComponent],
        imports: [
            CommonModule,
            SharedMaterialModule,
            FlexLayoutModule,
            SharedDirectivesModule,
            UtilitiesRoutingModule
        ]
    })
], UtilitiesModule);
export { UtilitiesModule };
//# sourceMappingURL=utilities.module.js.map
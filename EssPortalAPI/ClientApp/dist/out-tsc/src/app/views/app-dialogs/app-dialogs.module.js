var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { SharedModule } from '../../shared/shared.module';
import { ConfirmDialogComponent } from './confirm-dialog/confirm-dialog.component';
import { LoaderDialogComponent } from './loader-dialog/loader-dialog.component';
import { DialogsRoutes } from "./app-dialogs.routing";
let AppDialogsModule = class AppDialogsModule {
};
AppDialogsModule = __decorate([
    NgModule({
        imports: [
            CommonModule,
            FormsModule,
            MatInputModule,
            MatCardModule,
            MatButtonModule,
            MatListModule,
            SharedModule,
            RouterModule.forChild(DialogsRoutes)
        ],
        declarations: [ConfirmDialogComponent, LoaderDialogComponent]
    })
], AppDialogsModule);
export { AppDialogsModule };
//# sourceMappingURL=app-dialogs.module.js.map
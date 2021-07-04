var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeeComponent } from './employee/employee.component';
import { FilesmanagerModule } from './filesmanager/filesmanager.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ActionBarComponent } from './action-Bar/actionBar.component';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatSelectModule } from '@angular/material/select';
import { TranslateModule } from '@ngx-translate/core';
import { MatIconModule } from '@angular/material/icon';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
let UIModule = class UIModule {
};
UIModule = __decorate([
    NgModule({
        imports: [
            CommonModule,
            MatButtonModule,
            MatDividerModule,
            FormsModule,
            MatSelectModule,
            FilesmanagerModule,
            MatIconModule,
            MatAutocompleteModule,
            MatFormFieldModule,
            ReactiveFormsModule,
            MatInputModule,
            TranslateModule
        ],
        declarations: [EmployeeComponent, ActionBarComponent],
        exports: [
            FilesmanagerModule,
            EmployeeComponent,
            ActionBarComponent
        ]
    })
], UIModule);
export { UIModule };
//# sourceMappingURL=UI.module.js.map
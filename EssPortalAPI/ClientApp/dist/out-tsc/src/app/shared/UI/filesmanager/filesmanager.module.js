var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FileUploadModule } from 'ng2-file-upload';
import { DownloadComponent } from './download/download.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UploadComponent } from './upload/upload.component';
import { MultiFilesManagerComponent } from './MultiFiles/UploadMultiFiles.component';
import { UploadFilesComponent } from './SingleFile/UploadFiles.component';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { TranslateModule } from '@ngx-translate/core';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatTooltipModule } from '@angular/material/tooltip';
let FilesmanagerModule = class FilesmanagerModule {
};
FilesmanagerModule = __decorate([
    NgModule({
        imports: [
            CommonModule,
            FileUploadModule,
            FormsModule,
            ReactiveFormsModule,
            MatButtonModule,
            MatFormFieldModule,
            MatInputModule,
            TranslateModule,
            MatDividerModule,
            MatTooltipModule,
            MatIconModule,
        ],
        declarations: [
            MultiFilesManagerComponent,
            UploadFilesComponent,
            DownloadComponent,
            UploadComponent
        ],
        exports: [
            MultiFilesManagerComponent,
            UploadFilesComponent,
        ]
    })
], FilesmanagerModule);
export { FilesmanagerModule };
//# sourceMappingURL=filesmanager.module.js.map
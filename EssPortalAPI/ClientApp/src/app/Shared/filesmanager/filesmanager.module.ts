import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { FileUploadModule } from 'ng2-file-upload';
import { DownloadComponent } from './download/download.component';
import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UploadComponent } from './upload/upload.component';
import { MultiFilesManagerComponent } from './MultiFiles/UploadMultiFiles.component';
import { UploadFilesComponent } from './SingleFile/UploadFiles.component';


@NgModule({
  imports: [
    CommonModule,
    FileUploadModule,
    FormsModule,
    ReactiveFormsModule,
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
export class FilesmanagerModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { FileUploadModule } from 'ng2-file-upload';
import { DownloadComponent } from './download/download.component';
import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UploadComponent } from './upload/upload.component';
import { MultiFilesManagerComponent } from './MultiFiles/UploadMultiFiles.component';
import { UploadFilesComponent } from './SingleFile/UploadFiles.component';
import {MatButtonModule} from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { TranslateModule } from '@ngx-translate/core';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatTooltipModule} from '@angular/material/tooltip';
@NgModule({
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
export class FilesmanagerModule { }

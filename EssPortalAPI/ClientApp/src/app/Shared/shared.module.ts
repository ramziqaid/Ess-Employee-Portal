import { UploadFilesComponent } from './filesmanager/SingleFile/UploadFiles.component';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeeComponent } from './employee/employee.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FilesmanagerModule } from './filesmanager/filesmanager.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    FilesmanagerModule
  ],
  declarations: [
    EmployeeComponent,
  ],
  providers: [],
  exports: [
    EmployeeComponent,
    FilesmanagerModule,
  ]
})
export class SharedModule { }

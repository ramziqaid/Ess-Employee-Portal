import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { EmployeeComponent } from './employee/employee.component'; 
import { FilesmanagerModule } from './filesmanager/filesmanager.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ActionBarComponent } from './action-Bar/actionBar.component';
import {MatButtonModule} from '@angular/material/button';
import {MatDividerModule} from '@angular/material/divider';
import {MatSelectModule} from '@angular/material/select';
import { TranslateModule } from '@ngx-translate/core';
import {MatIconModule} from '@angular/material/icon';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@NgModule({
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
  declarations: [EmployeeComponent,ActionBarComponent],
  exports: [ 
    FilesmanagerModule,
    EmployeeComponent,
    ActionBarComponent]
})
export class UIModule { }

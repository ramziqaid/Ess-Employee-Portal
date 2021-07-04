
import { RegisterComponent } from './register/register.component';
import { AdminAreaRoutesModule } from './AdminArea.routing';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { DataTablesModule } from 'angular-datatables';
import { AssignRoleComponent } from './Role/Role.component'; 
import { SettingComponent } from './Settings/Setting.component';
import { ShowUsersComponent } from './AllUser/ShowUser.component';
import { PermissionOperationComponent } from './permission-operation/permission-operation.component';

import { MatStepperModule } from '@angular/material/stepper';
import { MatInputModule } from '@angular/material/input';
import { AdminService } from './Services/admin.service'; 
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { TranslateModule } from '@ngx-translate/core';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatDividerModule} from '@angular/material/divider';
import {MatSelectModule} from '@angular/material/select';
import { EditUserRegistrationComponent } from './EditUserRegistration/EditUserRegistration.component';


@NgModule({
  imports: [
    CommonModule,
    AdminAreaRoutesModule,
    FormsModule,
    ReactiveFormsModule,
    DataTablesModule,
    MatStepperModule,
    MatPaginatorModule,
    MatSortModule,
    MatTableModule,
    NgxDatatableModule,
    MatInputModule,
    MatCheckboxModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    MatDividerModule,
    FlexLayoutModule,
    MatSelectModule,
    TranslateModule
  ],
  declarations: [
    ShowUsersComponent,
    SettingComponent,
    RegisterComponent,
    EditUserRegistrationComponent,
    AssignRoleComponent,
    PermissionOperationComponent,
    
  ],
  providers: [AdminService]

}
)
export class AdminAreaModule { }

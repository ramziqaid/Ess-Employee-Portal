import { ChangePasswordComponent } from './change-password/change-password.component';
import { RegisterComponent } from './register/register.component';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { AssignRoleComponent } from './Role/Role.component';
import { AllAssignRoleComponent } from './AllRole/AllRole.component';
import { SettingComponent } from './Settings/Setting.component';
import { ShowUsersComponent } from './AllUser/ShowUser.component';
import { EditUserRegistrationComponent } from './EditUserRegistration/EditUserRegistration.component';
import { MatInputModule } from '@angular/material/input';
import { AdminService } from './Services/admin.service';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatChipsModule } from '@angular/material/chips';
import { MatListModule } from '@angular/material/list';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { RouterModule } from '@angular/router';
import { adminroutes } from './AdminArea.routing';
import { MatStepperModule } from '@angular/material/stepper'
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatNativeDateModule } from '@angular/material/core';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatRadioModule } from '@angular/material/radio';
import { QuillModule } from 'ngx-quill';
import { TranslateModule } from '@ngx-translate/core';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatStepperModule,
    MatIconModule,
    MatCardModule,
    MatMenuModule,
    MatButtonModule,
    MatChipsModule,
    MatListModule,
    MatTooltipModule,
    MatDialogModule,
    MatSnackBarModule,
    MatSlideToggleModule,
    FlexLayoutModule,
    NgxDatatableModule,
    MatAutocompleteModule,
    MatDatepickerModule,
    MatCheckboxModule,
    MatInputModule,
    MatListModule,
    MatCardModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatProgressBarModule,
    MatRadioModule,
    MatCheckboxModule,
    MatButtonModule,
    MatIconModule,
    MatStepperModule,
    FlexLayoutModule,
    QuillModule,
    NgxDatatableModule,
    TranslateModule,
    RouterModule.forChild(adminroutes)
  ],
  declarations: [
    ShowUsersComponent,
    SettingComponent,
    RegisterComponent,
    EditUserRegistrationComponent,
    AssignRoleComponent,
    AllAssignRoleComponent,
    ChangePasswordComponent,

  ],
  providers: [AdminService]

}
)
export class AdminAreaModule { }

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatChipsModule } from '@angular/material/chips';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatRadioModule } from '@angular/material/radio';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatTabsModule } from '@angular/material/tabs';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { ChartsModule } from 'ng2-charts';
import { FileUploadModule } from 'ng2-file-upload';
import { SharedPipesModule } from 'app/shared/pipes/shared-pipes.module';
import { ProfileComponent } from "./profile.component";
import { ProfileOverviewComponent } from './profile-overview/profile-overview.component';
import { ProfileSettingsComponent } from './profile-settings/profile-settings.component';
import { ProfileBlankComponent } from './profile-blank/profile-blank.component';
import { ProfileRoutes } from "./profile.routing";
import { ChangePasswordComponent } from './change-password/change-password.component';
import { TranslateModule } from '@ngx-translate/core';
import { ProfileService } from './service/profile.service';
let ProfileModule = class ProfileModule {
};
ProfileModule = __decorate([
    NgModule({
        imports: [
            CommonModule,
            FormsModule,
            ReactiveFormsModule,
            MatListModule,
            MatIconModule,
            MatButtonModule,
            MatCardModule,
            MatMenuModule,
            MatSlideToggleModule,
            MatGridListModule,
            MatChipsModule,
            MatCheckboxModule,
            MatRadioModule,
            MatTabsModule,
            MatInputModule,
            MatProgressBarModule,
            FlexLayoutModule,
            NgxDatatableModule,
            ChartsModule,
            FileUploadModule,
            SharedPipesModule,
            TranslateModule,
            RouterModule.forChild(ProfileRoutes)
        ],
        declarations: [ProfileComponent,
            ProfileOverviewComponent,
            ProfileSettingsComponent,
            ProfileBlankComponent,
            ChangePasswordComponent,
        ],
        providers: [ProfileService]
    })
], ProfileModule);
export { ProfileModule };
//# sourceMappingURL=profile.module.js.map
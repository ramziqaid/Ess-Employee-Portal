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
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDialogModule } from '@angular/material/dialog';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { FlexLayoutModule } from '@angular/flex-layout';
import { QuillModule } from 'ngx-quill';
import { TranslateModule } from '@ngx-translate/core';
import { AppInboxComponent } from './app-inbox.component';
import { MailComposeComponent } from './mail-compose.component';
import { InboxRoutes } from "./app-inbox.routing";
import { SharedPipesModule } from 'app/shared/pipes/shared-pipes.module';
let AppInboxModule = class AppInboxModule {
};
AppInboxModule = __decorate([
    NgModule({
        imports: [
            CommonModule,
            FormsModule,
            ReactiveFormsModule,
            MatIconModule,
            MatButtonModule,
            MatToolbarModule,
            MatSidenavModule,
            MatMenuModule,
            MatInputModule,
            MatDialogModule,
            MatListModule,
            MatCheckboxModule,
            MatTooltipModule,
            MatExpansionModule,
            FlexLayoutModule,
            QuillModule,
            SharedPipesModule,
            TranslateModule,
            RouterModule.forChild(InboxRoutes)
        ],
        declarations: [AppInboxComponent, MailComposeComponent],
    })
], AppInboxModule);
export { AppInboxModule };
//# sourceMappingURL=app-inbox.module.js.map
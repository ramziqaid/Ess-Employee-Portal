var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AppChatsComponent } from './app-chats.component';
import { ChatsRoutes } from './app-chats.routing';
import { ChatLeftSidenavComponent } from './chat-left-sidenav/chat-left-sidenav.component';
import { ChatContentsComponent } from './chat-contents/chat-contents.component';
import { ChatService } from './chat.service';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { SharedPipesModule } from 'app/shared/pipes/shared-pipes.module';
let AppChatsModule = class AppChatsModule {
};
AppChatsModule = __decorate([
    NgModule({
        imports: [
            CommonModule,
            FormsModule,
            MatSidenavModule,
            MatMenuModule,
            MatInputModule,
            MatIconModule,
            MatButtonModule,
            MatListModule,
            MatToolbarModule,
            MatCardModule,
            FlexLayoutModule,
            PerfectScrollbarModule,
            SharedPipesModule,
            RouterModule.forChild(ChatsRoutes)
        ],
        declarations: [AppChatsComponent, ChatLeftSidenavComponent, ChatContentsComponent],
        providers: [ChatService]
    })
], AppChatsModule);
export { AppChatsModule };
//# sourceMappingURL=app-chats.module.js.map
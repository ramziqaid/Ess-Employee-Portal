var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, ViewChild, ChangeDetectionStrategy } from '@angular/core';
import { MediaObserver } from '@angular/flex-layout';
import { MatSidenav } from '@angular/material/sidenav';
import { ChatService } from './chat.service';
let AppChatsComponent = class AppChatsComponent {
    constructor(mediaObserver, chatService) {
        this.mediaObserver = mediaObserver;
        this.chatService = chatService;
        this.isSidenavOpen = true;
        this.activeChatUser = {
            name: 'Gevorg Spartak',
            photo: 'assets/images/face-2.jpg',
            isOnline: true,
            lastMsg: 'Hello!'
        };
        // console.log(chatService.chats)
        this.user = chatService.user;
    }
    ngOnInit() {
        this.chatSideBarInit();
    }
    ngOnDestroy() {
        if (this.screenSizeWatcher) {
            this.screenSizeWatcher.unsubscribe();
        }
    }
    changeActiveUser(user) {
        this.activeChatUser = user;
    }
    updateSidenav() {
        var self = this;
        setTimeout(() => {
            self.isSidenavOpen = !self.isMobile;
            self.sideNav.mode = self.isMobile ? 'over' : 'side';
        });
    }
    chatSideBarInit() {
        this.isMobile = this.mediaObserver.isActive('xs') || this.mediaObserver.isActive('sm');
        this.updateSidenav();
        this.screenSizeWatcher = this.mediaObserver.media$.subscribe((change) => {
            this.isMobile = (change.mqAlias === 'xs') || (change.mqAlias === 'sm');
            this.updateSidenav();
        });
    }
};
__decorate([
    ViewChild(MatSidenav),
    __metadata("design:type", MatSidenav)
], AppChatsComponent.prototype, "sideNav", void 0);
AppChatsComponent = __decorate([
    Component({
        selector: 'app-chats',
        templateUrl: './app-chats.component.html',
        styleUrls: ['./app-chats.component.css'],
        changeDetection: ChangeDetectionStrategy.OnPush
    }),
    __metadata("design:paramtypes", [MediaObserver,
        ChatService])
], AppChatsComponent);
export { AppChatsComponent };
//# sourceMappingURL=app-chats.component.js.map
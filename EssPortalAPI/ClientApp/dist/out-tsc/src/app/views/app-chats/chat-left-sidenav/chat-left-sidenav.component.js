var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, ChangeDetectorRef } from "@angular/core";
import { ChatService, User } from "../chat.service";
let ChatLeftSidenavComponent = class ChatLeftSidenavComponent {
    constructor(chatService, cdr) {
        this.chatService = chatService;
        this.cdr = cdr;
        this.isSidenavOpen = true;
        this.currentUser = new User();
    }
    ngOnInit() {
        // this.chatService.onChatsUpdated
        //   .subscribe(updatedChats => {
        //     this.chats = updatedChats;
        //   });
        this.userUpdateSub = this.chatService.onUserUpdated
            .subscribe(updatedUser => {
            this.currentUser = updatedUser;
        });
        this.loadDataSub = this.chatService.loadChatData()
            .subscribe(res => {
            this.currentUser = this.chatService.user;
            // this.chats = this.chatService.chats;
            this.contacts = this.chatService.contacts;
            this.cdr.markForCheck();
        });
    }
    ngOnDestroy() {
        if (this.userUpdateSub)
            this.userUpdateSub.unsubscribe();
        if (this.loadDataSub)
            this.loadDataSub.unsubscribe();
    }
    getChatByContact(contactId) {
        this.chatService.getChatByContact(contactId)
            .subscribe(res => {
            // console.log('from sub',res);
        }, err => {
            console.log(err);
        });
    }
};
ChatLeftSidenavComponent = __decorate([
    Component({
        selector: "app-chat-left-sidenav",
        templateUrl: "./chat-left-sidenav.component.html",
        styleUrls: ["./chat-left-sidenav.component.scss"]
    }),
    __metadata("design:paramtypes", [ChatService,
        ChangeDetectorRef])
], ChatLeftSidenavComponent);
export { ChatLeftSidenavComponent };
//# sourceMappingURL=chat-left-sidenav.component.js.map
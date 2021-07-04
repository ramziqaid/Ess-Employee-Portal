var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, ViewChild, ViewChildren, Input, ChangeDetectorRef } from "@angular/core";
import { PerfectScrollbarDirective } from "ngx-perfect-scrollbar";
import { ChatService, User } from "../chat.service";
import { NgForm } from "@angular/forms";
let ChatContentsComponent = class ChatContentsComponent {
    constructor(chatService, cdr) {
        this.chatService = chatService;
        this.cdr = cdr;
        this.user = new User();
        this.activeContact = new User();
    }
    ngOnInit() {
        // Listen for user update
        this.userUpdateSub = this.chatService.onUserUpdated.subscribe(user => {
            this.user = user;
            this.cdr.markForCheck();
        });
        // Listen for contact change
        this.chatSelectSub = this.chatService.onChatSelected.subscribe(res => {
            if (res) {
                this.chatCollection = res.chatCollection;
                this.activeContact = res.contact;
                this.initMsgForm();
                this.cdr.markForCheck();
            }
        });
        // Listen for chat update
        this.chatUpdateSub = this.chatService.onChatsUpdated.subscribe(chat => {
            this.chatCollection.chats.push(chat);
            this.scrollToBottom();
            this.cdr.markForCheck();
        });
    }
    ngOnDestroy() {
        if (this.userUpdateSub)
            this.userUpdateSub.unsubscribe();
        if (this.chatSelectSub)
            this.chatSelectSub.unsubscribe();
        if (this.chatUpdateSub)
            this.chatUpdateSub.unsubscribe();
    }
    sendMessage(e) {
        // console.log(this.msgForm.form.value.message)
        if (!this.msgForm.form.value.message || !this.msgForm.form.value.message.trim().length) {
            return;
        }
        const chat = {
            contactId: this.chatService.user.id,
            text: this.msgForm.form.value.message,
            time: new Date().toISOString()
        };
        this.chatCollection.chats.push(chat);
        this.chatService
            .updateChats(this.chatCollection.id, [...this.chatCollection.chats])
            .subscribe(res => {
            this.initMsgForm();
            this.cdr.markForCheck();
        });
        // Only for demo purpose
        this.chatService.autoReply({
            contactId: this.activeContact.id,
            text: `Hi, I\'m ${this.activeContact.name}. Your imaginary friend.`,
            time: new Date().toISOString()
        });
    }
    initMsgForm() {
        setTimeout(() => {
            this.msgForm && this.msgForm.reset();
            this.msgInput && this.msgInput.first && this.msgInput.first.nativeElement.focus();
            this.scrollToBottom();
        });
    }
    scrollToBottom() {
        setTimeout(() => {
            this.psContainer && this.psContainer.update();
            this.psContainer && this.psContainer.scrollToBottom(0, 400);
        });
    }
};
__decorate([
    Input('matSidenav'),
    __metadata("design:type", Object)
], ChatContentsComponent.prototype, "matSidenav", void 0);
__decorate([
    ViewChild(PerfectScrollbarDirective),
    __metadata("design:type", PerfectScrollbarDirective)
], ChatContentsComponent.prototype, "psContainer", void 0);
__decorate([
    ViewChildren("msgInput"),
    __metadata("design:type", Object)
], ChatContentsComponent.prototype, "msgInput", void 0);
__decorate([
    ViewChild("msgForm"),
    __metadata("design:type", NgForm)
], ChatContentsComponent.prototype, "msgForm", void 0);
ChatContentsComponent = __decorate([
    Component({
        selector: "app-chat-contents",
        templateUrl: "./chat-contents.component.html",
        styleUrls: ["./chat-contents.component.scss"]
    }),
    __metadata("design:paramtypes", [ChatService,
        ChangeDetectorRef])
], ChatContentsComponent);
export { ChatContentsComponent };
//# sourceMappingURL=chat-contents.component.js.map
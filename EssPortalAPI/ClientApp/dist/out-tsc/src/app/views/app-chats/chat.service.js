var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Subject, of, combineLatest } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
export class User {
}
// tslint:disable-next-line: max-classes-per-file
let ChatService = class ChatService {
    constructor(http) {
        this.http = http;
        this.onContactSelected = new BehaviorSubject(null);
        this.onUserUpdated = new Subject();
        this.onChatSelected = new BehaviorSubject(null);
        this.onChatsUpdated = new Subject();
        // console.log('from service');
        // this.loadChatData()
    }
    loadChatData() {
        return combineLatest(this.getAllContacts(), this.getAllChats(), this.getCurrentUser(), (contacts, chats, user) => {
            this.contacts = contacts;
            this.chats = chats;
            this.user = user;
            // console.log('next.willCall')
            this.onUserUpdated.next(user);
            // console.log('next.called')
            // console.log(
            //   "contacts:",
            //   contacts,
            //   "\n chats:",
            //   chats,
            //   "\n currUser:",
            //   user
            // );
        });
    }
    getChatByContact(contactId) {
        const chatInfo = this.user.chatInfo.find((chat) => chat.contactId === contactId);
        this.collectionLoading = true;
        if (!chatInfo) {
            return this.createChatCollection(contactId)
                .pipe(switchMap((chatColl) => {
                return this.getChatByContact(contactId);
            }));
        }
        return this.getAllChats().pipe(switchMap((chats) => {
            const chatCollection = chats.find((chat) => chat.id === chatInfo.chatId);
            const contact = this.contacts.find(
            // tslint:disable-next-line: no-shadowed-variable
            (contact) => contact.id === contactId);
            this.onChatSelected.next({
                chatCollection,
                contact,
            });
            this.collectionLoading = false;
            return of(chatCollection);
        }));
    }
    createChatCollection(contactId) {
        // tslint:disable-next-line: no-shadowed-variable
        const contact = this.contacts.find((contact) => contact.id === contactId);
        const chatId = (Math.random() * 1000000000).toString();
        const chatCollection = {
            id: chatId,
            chats: [],
        };
        const chatInfo = {
            chatId,
            lastChatTime: new Date(),
            contactId: contact.id,
            contactName: contact.name,
            unread: null,
        };
        return this.http.post('api/chat-collections', Object.assign({}, chatCollection))
            .pipe(switchMap((updatedChatCollection) => {
            this.user.chatInfo.push(chatInfo);
            return this.updateUser(this.user).pipe(switchMap((res) => {
                return this.getCurrentUser().pipe(map((user) => {
                    this.user = user;
                    // console.log(user)
                    this.onUserUpdated.next(user);
                }));
            }));
        }));
    }
    getAllContacts() {
        return this.http.get('api/contacts');
    }
    getAllChats() {
        return this.http.get('api/chat-collections');
    }
    getCurrentUser() {
        return this.http.get('api/chat-user').pipe(map((res) => res[0]));
    }
    updateUser(user) {
        return this.http.put(`api/chat-user/${user.id}`, Object.assign({}, user));
    }
    updateChats(chatId, chats) {
        const chatCollection = {
            id: chatId,
            chats,
        };
        return this.http.put('api/chat-collections', chatCollection);
    }
    autoReply(chat) {
        setTimeout(() => {
            this.onChatsUpdated.next(chat);
        }, 1500);
    }
};
ChatService = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [HttpClient])
], ChatService);
export { ChatService };
//# sourceMappingURL=chat.service.js.map
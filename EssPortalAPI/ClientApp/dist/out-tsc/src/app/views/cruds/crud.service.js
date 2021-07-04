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
import { UserDB } from '../../shared/inmemory-db/users';
import { of } from 'rxjs';
import { delay } from 'rxjs/operators';
let CrudService = class CrudService {
    constructor(http) {
        this.http = http;
        let userDB = new UserDB();
        this.items = userDB.users;
    }
    //******* Implement your APIs ********
    getItems() {
        return of(this.items.slice());
    }
    addItem(item) {
        item._id = Math.round(Math.random() * 10000000000).toString();
        this.items.unshift(item);
        return of(this.items.slice()).pipe(delay(1000));
    }
    updateItem(id, item) {
        this.items = this.items.map(i => {
            if (i._id === id) {
                return Object.assign({}, i, item);
            }
            return i;
        });
        return of(this.items.slice()).pipe(delay(1000));
    }
    removeItem(row) {
        let i = this.items.indexOf(row);
        this.items.splice(i, 1);
        return of(this.items.slice()).pipe(delay(1000));
    }
};
CrudService = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [HttpClient])
], CrudService);
export { CrudService };
//# sourceMappingURL=crud.service.js.map
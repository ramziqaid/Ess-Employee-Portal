var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { Injectable } from '@angular/core';
let TodoService = class TodoService {
    constructor(http) {
        this.http = http;
        this.searchTerm = new BehaviorSubject('');
    }
    getTodoList() {
        return this.http.get("/api/todoList");
    }
    getTodoById(id) {
        return this.http.get("/api/todoList/" + id);
    }
    getTagList() {
        return this.http.get("/api/todoTag");
    }
    updateSearchTerm(term) {
        this.searchTerm.next(term);
    }
    getSearchTerm() {
        return this.searchTerm;
    }
    saveTag(tag) {
        return this.http.post("/api/todoTag/", tag);
    }
    deleteTag(tag) {
        this.http.delete("/api/todoTag/" + tag.id).subscribe(e => { });
    }
    deleteTodo(todo) {
        return this.http.delete("/api/todoList/" + todo.id);
    }
    updateTodo(todo) {
        let returnTodo;
        todo.selected = false;
        if (!todo.id) {
            todo.id = Math.random() * 1000000;
            returnTodo = this.http.post("/api/todoList/", todo);
        }
        else {
            returnTodo = this.http.put("/api/todoList/" + todo.id, todo);
        }
        if (this.sub) {
            this.sub.unsubscribe();
            this.sub = returnTodo.subscribe(res => { });
        }
        else {
            this.sub = returnTodo.subscribe(res => { });
        }
        return returnTodo;
    }
};
TodoService = __decorate([
    Injectable({
        providedIn: 'root'
    }),
    __metadata("design:paramtypes", [HttpClient])
], TodoService);
export { TodoService };
//# sourceMappingURL=todo.service.js.map
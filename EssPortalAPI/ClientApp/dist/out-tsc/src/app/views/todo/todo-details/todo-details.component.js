var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { TagDialogueComponent } from './../tag-dialogue/tag-dialogue.component';
import { FormBuilder } from '@angular/forms';
import { TodoService } from './../todo.service';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
let TodoDetailsComponent = class TodoDetailsComponent {
    constructor(tagDialogue, fb, router, route, http, todoService, cdr) {
        this.tagDialogue = tagDialogue;
        this.fb = fb;
        this.router = router;
        this.route = route;
        this.http = http;
        this.todoService = todoService;
        this.cdr = cdr;
        this.todo = {
            title: '',
            note: '',
            startDate: '',
            dueDate: '',
            tag: []
        };
        this.tagMap = new Map();
    }
    ngOnInit() {
        let id = this.route.snapshot.params['id'];
        if (id) {
            this.todoService.getTodoById(id).subscribe((todo) => {
                this.todo = todo;
                this.buildTodoForm(this.todo);
            });
        }
        else
            this.buildTodoForm();
        this.getTagList();
    }
    getTagList() {
        this.tagMap.clear();
        this.todoService.getTagList().subscribe((tagList) => {
            this.tagList = tagList;
            tagList.forEach((tag) => {
                this.tagMap.set(tag.id, tag.name);
            });
            this.cdr.markForCheck();
        });
    }
    buildTodoForm(todo) {
        this.todoForm = this.fb.group({
            title: [todo ? todo.title : ''],
            note: [todo ? todo.note : ''],
            startDate: [todo ? todo.startDate : ''],
            dueDate: [todo ? todo.dueDate : '']
        });
    }
    saveTodo() {
        if (this.todoForm.invalid)
            return;
        this.todo.title = this.todoForm.get("title").value;
        this.todo.note = this.todoForm.get("note").value;
        this.todo.startDate = this.todoForm.get("startDate").value;
        this.todo.dueDate = this.todoForm.get("dueDate").value;
        this.todoService.updateTodo(this.todo).subscribe(res => {
            this.router.navigateByUrl("/todo/list");
        });
    }
    updateTodoTag(id) {
        if (!this.todo.tag.includes(id)) {
            this.todo.tag.push(id);
            this.cdr.markForCheck();
        }
    }
    removeTagFromTodo(tagId) {
        this.todo.tag.splice(this.todo.tag.indexOf(tagId), 1);
        this.cdr.markForCheck();
    }
    deleteTodo() {
        if (this.todo.id) {
            this.todoService.deleteTodo(this.todo).subscribe(e => {
                this.router.navigateByUrl("/todo/list");
            });
        }
    }
    openTagManaginDialogue() {
        const dialogRef = this.tagDialogue.open(TagDialogueComponent, {
        // width: '250px',
        // data: {name: "", animal: ""}
        });
        dialogRef.afterClosed().subscribe(result => {
            this.getTagList();
        });
    }
};
TodoDetailsComponent = __decorate([
    Component({
        selector: 'app-todo-details',
        templateUrl: './todo-details.component.html',
        styleUrls: ['./todo-details.component.scss'],
        changeDetection: ChangeDetectionStrategy.OnPush
    }),
    __metadata("design:paramtypes", [MatDialog,
        FormBuilder,
        Router,
        ActivatedRoute,
        HttpClient,
        TodoService,
        ChangeDetectorRef])
], TodoDetailsComponent);
export { TodoDetailsComponent };
//# sourceMappingURL=todo-details.component.js.map
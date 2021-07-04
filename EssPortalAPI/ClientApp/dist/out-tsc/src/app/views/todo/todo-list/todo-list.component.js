var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { ChangeDetectorRef } from "@angular/core";
import { Component, ChangeDetectionStrategy } from "@angular/core";
import { moveItemInArray } from "@angular/cdk/drag-drop";
import { TodoService } from "../todo.service";
import { debounceTime, takeUntil } from "rxjs/operators";
import { Subject } from "rxjs";
let TodoListComponent = class TodoListComponent {
    constructor(todoService, cdr) {
        this.todoService = todoService;
        this.cdr = cdr;
        this.tagMap = new Map();
        this.isMasterToggled = false;
        this.toggledItemNumber = 0;
        this.unsubscribeAll = new Subject();
    }
    ngOnInit() {
        this.tagMap.clear();
        this.todoService.getTodoList()
            .pipe(takeUntil(this.unsubscribeAll))
            .subscribe((res) => {
            this.todoList = res;
            this.tempList = res; //used for filtering data
            this.todoService.getTagList()
                .pipe(takeUntil(this.unsubscribeAll))
                .subscribe((res) => {
                this.tagList = res;
                res.forEach((tag) => {
                    this.tagMap.set(tag.id, tag.name);
                    this.cdr.markForCheck();
                });
            });
        });
        this.todoService.getSearchTerm().pipe(debounceTime(250))
            .pipe(takeUntil(this.unsubscribeAll))
            .subscribe(term => {
            this.searchTerm = term;
            this.cdr.markForCheck();
        });
    }
    ngOnDestroy() {
        this.unsubscribeAll.next();
        this.unsubscribeAll.complete();
    }
    drop(event) {
        moveItemInArray(this.todoList, event.previousIndex, event.currentIndex);
        // Do what you need with the re-arranged array "todoList"
        this.cdr.markForCheck();
    }
    filterTodoListOnTag(tag) {
        this.todoList = this.tempList.filter((todo) => {
            return todo.tag.includes(tag.id);
        });
        this.cdr.detectChanges();
    }
    onTodoOptionSelected(event) {
        switch (event.target.innerText) {
            case "All":
                this.todoList = this.tempList;
                break;
            case "Read":
                this.todoList = this.tempList.filter((todo) => {
                    return !todo.read;
                });
                break;
            case "Unread":
                this.todoList = this.tempList.filter((todo) => {
                    return !todo.read;
                });
                break;
            case "Important":
                this.todoList = this.tempList.filter((todo) => {
                    return todo.important;
                });
                break;
            case "Unimportant":
                this.todoList = this.tempList.filter((todo) => {
                    return !todo.important;
                });
                break;
            case "Done":
                this.todoList = this.tempList.filter((todo) => {
                    return todo.done;
                });
                break;
            case "Undone":
                this.todoList = this.tempList.filter((todo) => {
                    return !todo.done;
                });
                break;
            case "Starred":
                this.todoList = this.tempList.filter((todo) => {
                    return todo.starred;
                });
                break;
            case "Unstarred":
                this.todoList = this.tempList.filter((todo) => {
                    return !todo.starred;
                });
                break;
            default:
                break;
        }
        this.cdr.detectChanges();
    }
    masterToggle() {
        this.toggledItemNumber = 0;
        this.isMasterToggled = !this.isMasterToggled;
        if (this.isMasterToggled) {
            this.todoList.forEach((todo) => {
                todo.selected = true;
                this.toggledItemNumber++;
            });
        }
        else {
            this.todoList.forEach((todo) => {
                todo.selected = false;
                this.toggledItemNumber--;
            });
        }
        this.cdr.detectChanges();
    }
    toggleCheckBox(todo) {
        todo.selected = !todo.selected;
        if (todo.selected)
            this.toggledItemNumber++;
        else
            this.toggledItemNumber--;
        if (this.toggledItemNumber == this.todoList.length)
            this.isMasterToggled = true;
        else if (this.toggledItemNumber == 0)
            this.isMasterToggled = false;
    }
    toggleImportant(todo) {
        todo.important = !todo.important;
        this.todoService.updateTodo(todo);
    }
    toggleStar(todo) {
        todo.starred = !todo.starred;
        this.todoService.updateTodo(todo);
    }
    toggleRead(todo) {
        todo.read = !todo.read;
        this.todoService.updateTodo(todo);
    }
    toggleDone(todo) {
        todo.done = !todo.done;
        this.todoService.updateTodo(todo);
    }
};
TodoListComponent = __decorate([
    Component({
        selector: "app-todo-list",
        templateUrl: "./todo-list.component.html",
        styleUrls: ["./todo-list.component.scss"],
        changeDetection: ChangeDetectionStrategy.OnPush
    }),
    __metadata("design:paramtypes", [TodoService,
        ChangeDetectorRef])
], TodoListComponent);
export { TodoListComponent };
//# sourceMappingURL=todo-list.component.js.map
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
import { Component, Inject, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { TodoService } from '../todo.service';
let TagDialogueComponent = class TagDialogueComponent {
    constructor(cdr, todoService, dialogRef, data) {
        this.cdr = cdr;
        this.todoService = todoService;
        this.dialogRef = dialogRef;
        this.data = data;
    }
    ngOnInit() {
        this.todoService.getTagList().subscribe((tagList) => {
            this.tagList = tagList;
            this.cdr.markForCheck();
        });
    }
    addTag(tagName) {
        if (tagName) {
            let tag = {
                id: this.tagList.length + 1,
                name: tagName
            };
            this.tagList.push(tag);
            this.todoService.saveTag(tag).subscribe(res => { });
            this.cdr.markForCheck();
        }
    }
    deleteTag(tag) {
        this.todoService.deleteTag(tag);
    }
};
TagDialogueComponent = __decorate([
    Component({
        selector: 'app-tag-dialogue',
        templateUrl: './tag-dialogue.component.html',
        styleUrls: ['./tag-dialogue.component.scss'],
        changeDetection: ChangeDetectionStrategy.OnPush
    }),
    __param(3, Inject(MAT_DIALOG_DATA)),
    __metadata("design:paramtypes", [ChangeDetectorRef,
        TodoService,
        MatDialogRef, Object])
], TagDialogueComponent);
export { TagDialogueComponent };
//# sourceMappingURL=tag-dialogue.component.js.map
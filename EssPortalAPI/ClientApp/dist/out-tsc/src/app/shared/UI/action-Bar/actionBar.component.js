var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, Input, Output, EventEmitter } from '@angular/core';
let ActionBarComponent = class ActionBarComponent {
    constructor() {
        this.showActionBar = true;
        this.newAction = new EventEmitter();
        this.editAction = new EventEmitter();
        this.saveAction = new EventEmitter();
        this.deleteAction = new EventEmitter();
        this.cancelAction = new EventEmitter();
        this.onUploadFinishedFire = new EventEmitter();
        this.showAttachmentBTN = true;
        this.status = "10000";
    }
    ngOnInit() {
    }
    getStatus(index) {
        const x = this.status.substr(index, 1);
        return (x == "1" ? false : true);
    }
    newClick() {
        this.newAction.emit();
        this.status = "00101";
    }
    editClick() {
        this.status = "00101";
        this.editAction.emit();
        //this.didVote = true;
    }
    saveClick() {
        this.saveAction.emit();
        //this.didVote = true;
    }
    deleteClick() {
        this.deleteAction.emit();
        //this.didVote = true;
    }
    cancelClick() {
        this.status = "10000";
        this.cancelAction.emit();
        //this.didVote = true;
    }
    uploadFinishedFire(attachmentID) {
        this.onUploadFinishedFire.emit(attachmentID);
    }
    queryMode() {
        this.status = "10000";
    }
    editMode() {
        this.status = "11011";
    }
};
__decorate([
    Input(),
    __metadata("design:type", Boolean)
], ActionBarComponent.prototype, "disabled", void 0);
__decorate([
    Input(),
    __metadata("design:type", Boolean)
], ActionBarComponent.prototype, "showActionBar", void 0);
__decorate([
    Output(),
    __metadata("design:type", Object)
], ActionBarComponent.prototype, "newAction", void 0);
__decorate([
    Output(),
    __metadata("design:type", Object)
], ActionBarComponent.prototype, "editAction", void 0);
__decorate([
    Output(),
    __metadata("design:type", Object)
], ActionBarComponent.prototype, "saveAction", void 0);
__decorate([
    Output(),
    __metadata("design:type", Object)
], ActionBarComponent.prototype, "deleteAction", void 0);
__decorate([
    Output(),
    __metadata("design:type", Object)
], ActionBarComponent.prototype, "cancelAction", void 0);
__decorate([
    Output(),
    __metadata("design:type", Object)
], ActionBarComponent.prototype, "onUploadFinishedFire", void 0);
__decorate([
    Input(),
    __metadata("design:type", Boolean)
], ActionBarComponent.prototype, "statusFlages", void 0);
__decorate([
    Input(),
    __metadata("design:type", Number)
], ActionBarComponent.prototype, "referenceID", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], ActionBarComponent.prototype, "textUpload", void 0);
__decorate([
    Input(),
    __metadata("design:type", Boolean)
], ActionBarComponent.prototype, "showAttachmentBTN", void 0);
ActionBarComponent = __decorate([
    Component({
        selector: 'actionBar',
        templateUrl: './actionBar.component.html',
        styleUrls: ['./actionBar.component.scss']
    }),
    __metadata("design:paramtypes", [])
], ActionBarComponent);
export { ActionBarComponent };
//# sourceMappingURL=actionBar.component.js.map
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { BsModalService } from 'ngx-bootstrap/modal';
import { Attachment } from './../../../models/common.model';
import { Component, Output, EventEmitter, TemplateRef, ViewChild, Input } from '@angular/core';
import { UploadDownloadService } from '../service/upload-download.service';
import { ProgressStatusEnum } from '../models/progress-status.model';
import { MatDialog } from '@angular/material/dialog';
let MultiFilesManagerComponent = class MultiFilesManagerComponent {
    constructor(service, modalService, dialog) {
        this.service = service;
        this.modalService = modalService;
        this.dialog = dialog;
        this.files = [];
        this.canAddRemove = true;
        this.onUploadFinished = new EventEmitter();
    }
    ngOnChanges(changes) {
        this.getFiles();
    }
    ngOnInit() {
    }
    getFiles() {
        if (this.referenceID != undefined || this.referenceID != null) {
            this.service.getFiles(this.referenceID).subscribe(data => {
                this.files = data;
            });
        }
        else {
            this.files = [];
        }
    }
    downloadStatus(event) {
        switch (event.status) {
            case ProgressStatusEnum.START:
                this.showDownloadError = false;
                break;
            case ProgressStatusEnum.IN_PROGRESS:
                this.showProgress = true;
                this.percentage = event.percentage;
                break;
            case ProgressStatusEnum.COMPLETE:
                this.showProgress = false;
                break;
            case ProgressStatusEnum.ERROR:
                this.showProgress = false;
                this.showDownloadError = true;
                break;
        }
    }
    uploadStatus(event) {
        switch (event.status) {
            case ProgressStatusEnum.START:
                this.showUploadError = false;
                break;
            case ProgressStatusEnum.IN_PROGRESS:
                this.showProgress = true;
                this.percentage = event.percentage;
                break;
            case ProgressStatusEnum.COMPLETE:
                this.showProgress = false;
                const b = JSON.parse(event.body.toString());
                this.onUploadFinished.emit(b.results.attachmentID);
                //console.log(event.body);
                //debugger;
                var dtl = new Attachment;
                dtl.attachmentID = +b.results.attachmentID;
                dtl.fileName = b.results.fileName;
                this.files.push(dtl);
                break;
            case ProgressStatusEnum.ERROR:
                this.showProgress = false;
                this.showUploadError = true;
                this.message = event.body.error;
                break;
        }
    }
    removeRow() {
        this.getFiles();
    }
    clearItems() {
        this.files = [];
    }
    show() {
        this.modalRef = this.modalService.show(this.modal);
    }
    openPopUp() {
        this.dialog.open(this.modal, {
            width: '720px',
            disableClose: true
        });
    }
    closePopUp() {
        this.dialog.closeAll();
    }
};
__decorate([
    ViewChild('templateUploadFile', { static: true }),
    __metadata("design:type", TemplateRef)
], MultiFilesManagerComponent.prototype, "modal", void 0);
__decorate([
    Output(),
    __metadata("design:type", EventEmitter)
], MultiFilesManagerComponent.prototype, "onUploadFinished", void 0);
__decorate([
    Input(),
    __metadata("design:type", Boolean)
], MultiFilesManagerComponent.prototype, "disabled", void 0);
__decorate([
    Input(),
    __metadata("design:type", Boolean)
], MultiFilesManagerComponent.prototype, "canAddRemove", void 0);
__decorate([
    Input(),
    __metadata("design:type", Number)
], MultiFilesManagerComponent.prototype, "referenceID", void 0);
__decorate([
    Input(),
    __metadata("design:type", Boolean)
], MultiFilesManagerComponent.prototype, "clear", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], MultiFilesManagerComponent.prototype, "text", void 0);
MultiFilesManagerComponent = __decorate([
    Component({
        selector: 'app-MultiFilesManager',
        templateUrl: './UploadMultiFiles.component.html',
        styleUrls: ['./UploadMultiFiles.component.css']
    }),
    __metadata("design:paramtypes", [UploadDownloadService,
        BsModalService,
        MatDialog])
], MultiFilesManagerComponent);
export { MultiFilesManagerComponent };
//# sourceMappingURL=UploadMultiFiles.component.js.map
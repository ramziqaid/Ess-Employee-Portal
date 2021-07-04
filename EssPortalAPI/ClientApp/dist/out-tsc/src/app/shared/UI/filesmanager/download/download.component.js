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
import { HttpEventType } from '@angular/common/http';
import { UploadDownloadService } from '../service/upload-download.service';
import { ProgressStatusEnum } from '../models/progress-status.model';
let DownloadComponent = class DownloadComponent {
    constructor(service) {
        this.service = service;
        this.deleteFile = new EventEmitter();
        this.downloadStatus = new EventEmitter();
    }
    download() {
        this.downloadStatus.emit({ status: ProgressStatusEnum.START });
        this.service.downloadFile(this.attachmentID).subscribe(data => {
            switch (data.type) {
                case HttpEventType.DownloadProgress:
                    this.downloadStatus.emit({ status: ProgressStatusEnum.IN_PROGRESS, percentage: Math.round((data.loaded / data.total) * 100) });
                    break;
                case HttpEventType.Response:
                    this.downloadStatus.emit({ status: ProgressStatusEnum.COMPLETE });
                    const downloadedFile = new Blob([data.body], { type: data.body.type });
                    const a = document.createElement('a');
                    a.setAttribute('style', 'display:none;');
                    document.body.appendChild(a);
                    a.download = this.fileName;
                    a.href = URL.createObjectURL(downloadedFile);
                    a.target = '_blank';
                    a.click();
                    document.body.removeChild(a);
                    break;
            }
        }, error => {
            this.downloadStatus.emit({ status: ProgressStatusEnum.ERROR });
        });
    }
    removeFile() {
        this.service.RemoveFile(this.attachmentID).subscribe(data => {
            this.deleteFile.emit();
        }, error => { });
    }
};
__decorate([
    Input(),
    __metadata("design:type", Boolean)
], DownloadComponent.prototype, "disabled", void 0);
__decorate([
    Input(),
    __metadata("design:type", Boolean)
], DownloadComponent.prototype, "canRemove", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], DownloadComponent.prototype, "fileName", void 0);
__decorate([
    Input(),
    __metadata("design:type", Number)
], DownloadComponent.prototype, "attachmentID", void 0);
__decorate([
    Output(),
    __metadata("design:type", EventEmitter)
], DownloadComponent.prototype, "downloadStatus", void 0);
__decorate([
    Output(),
    __metadata("design:type", Object)
], DownloadComponent.prototype, "deleteFile", void 0);
DownloadComponent = __decorate([
    Component({
        selector: 'app-download',
        templateUrl: 'download.component.html',
        styleUrls: ['./download.component.css']
    }),
    __metadata("design:paramtypes", [UploadDownloadService])
], DownloadComponent);
export { DownloadComponent };
//# sourceMappingURL=download.component.js.map
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, Output, EventEmitter, Input, ViewChild, ElementRef } from '@angular/core';
import { HttpEventType } from '@angular/common/http';
import { UploadDownloadService } from '../service/upload-download.service';
import { ProgressStatusEnum } from '../models/progress-status.model';
let UploadComponent = class UploadComponent {
    constructor(service) {
        this.service = service;
        this.uploadStatus = new EventEmitter();
    }
    upload(event) {
        debugger;
        if (event.target.files && event.target.files.length > 0) {
            const file = event.target.files[0];
            this.uploadStatus.emit({ status: ProgressStatusEnum.START });
            this.service.uploadFile(file, (this.referenceID == undefined) ? 0 : this.referenceID).subscribe(data => {
                if (data) {
                    switch (data.type) {
                        case HttpEventType.UploadProgress:
                            this.uploadStatus.emit({ status: ProgressStatusEnum.IN_PROGRESS, percentage: Math.round((data.loaded / data.total) * 100) });
                            break;
                        case HttpEventType.Response:
                            this.inputFile.nativeElement.value = '';
                            this.uploadStatus.emit({ status: ProgressStatusEnum.COMPLETE, body: data.body });
                            break;
                    }
                }
            }, error => {
                this.inputFile.nativeElement.value = '';
                this.uploadStatus.emit({ status: ProgressStatusEnum.ERROR, body: error });
            });
        }
    }
};
__decorate([
    Input(),
    __metadata("design:type", Boolean)
], UploadComponent.prototype, "disabled", void 0);
__decorate([
    Output(),
    __metadata("design:type", EventEmitter)
], UploadComponent.prototype, "uploadStatus", void 0);
__decorate([
    ViewChild('inputFile', { static: true }),
    __metadata("design:type", ElementRef)
], UploadComponent.prototype, "inputFile", void 0);
__decorate([
    Input(),
    __metadata("design:type", Number)
], UploadComponent.prototype, "referenceID", void 0);
UploadComponent = __decorate([
    Component({
        selector: 'app-upload',
        templateUrl: 'upload.component.html',
        styles: [`  .upload { 
    float: right;
    height: 40px;
    width: 50px;
    margin: 10px;
  }`]
    }),
    __metadata("design:paramtypes", [UploadDownloadService])
], UploadComponent);
export { UploadComponent };
//# sourceMappingURL=upload.component.js.map
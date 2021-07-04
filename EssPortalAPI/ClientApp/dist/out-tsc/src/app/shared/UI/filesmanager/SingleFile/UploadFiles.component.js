var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { environment } from 'environments/environment';
import { Component, Output, EventEmitter } from '@angular/core';
import { HttpClient, HttpEventType } from '@angular/common/http';
let UploadFilesComponent = class UploadFilesComponent {
    constructor(http) {
        this.http = http;
        this.baseUrl = environment.apiUrl;
        this.onUploadFinished = new EventEmitter();
    }
    ngOnInit() {
    }
    uploadFile(files) {
        if (files.length === 0)
            return;
        let fileToUpload = files[0];
        const formData = new FormData();
        formData.append('file', fileToUpload, fileToUpload.name);
        this.http.post(`${this.baseUrl}Attachement/UploadFile`, formData, { reportProgress: true, observe: 'events' })
            .subscribe(event => {
            if (event.type === HttpEventType.UploadProgress)
                this.progress = Math.round(100 * event.loaded / event.total);
            else if (event.type === HttpEventType.Response) {
                this.message = 'Upload success.';
                const b = JSON.parse(event.body.toString());
                this.onUploadFinished.emit(b.results.id);
                //this.onUploadFinished.emit(event.body);
            }
        });
    }
};
__decorate([
    Output(),
    __metadata("design:type", Object)
], UploadFilesComponent.prototype, "onUploadFinished", void 0);
UploadFilesComponent = __decorate([
    Component({
        selector: 'app-UploadFiles',
        templateUrl: './UploadFiles.component.html',
        styleUrls: ['./UploadFiles.component.scss']
    }),
    __metadata("design:paramtypes", [HttpClient])
], UploadFilesComponent);
export { UploadFilesComponent };
//# sourceMappingURL=UploadFiles.component.js.map
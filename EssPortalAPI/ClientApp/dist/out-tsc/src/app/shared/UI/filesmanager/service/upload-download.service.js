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
import { HttpClient, HttpRequest, HttpEventType } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { environment } from 'environments/environment';
let UploadDownloadService = class UploadDownloadService {
    constructor(httpClient) {
        this.httpClient = httpClient;
        this.apiDownloadUrl = environment.apiUrl + 'Attachement/downloadFile';
        this.apiUploadUrl = environment.apiUrl + 'Attachement/UploadFile';
        this.apiFileUrl = environment.apiUrl + 'Attachement/files';
    }
    downloadFile(attachmentID) {
        return this.httpClient.request(new HttpRequest('GET', `${this.apiDownloadUrl}?AttachmentID=${attachmentID}`, null, {
            reportProgress: true,
            responseType: 'blob'
        }));
    }
    //Upload 
    uploadFile(file, referenceID) {
        const formData = new FormData();
        formData.append('file', file);
        return this.httpClient.request(new HttpRequest('POST', this.apiUploadUrl + '/' + referenceID, formData, {
            reportProgress: true
        }));
    }
    upload(data) {
        let uploadURL = `${this.apiUploadUrl}`;
        return this.httpClient.post(uploadURL, data, {
            reportProgress: true,
            observe: 'events'
        }).pipe(map((event) => {
            switch (event.type) {
                case HttpEventType.UploadProgress:
                    const progress = Math.round(100 * event.loaded / event.total);
                    return { status: 'progress', message: progress };
                case HttpEventType.Response:
                    var obj = JSON.parse(event.body.toString());
                    obj = obj.results;
                    //return { status: 'progress', message: progress };
                    //debugger;
                    return obj;
                default:
                    return `Unhandled event: ${event.type}`;
            }
        }));
    }
    getFiles(referenceID) {
        return this.httpClient.get(this.apiFileUrl + "/" + referenceID);
    }
    RemoveFile(attachmentID) {
        return this.httpClient.delete(environment.apiUrl + "Attachement/DeleteFile/" + attachmentID);
    }
};
UploadDownloadService = __decorate([
    Injectable({
        providedIn: 'root'
    }),
    __metadata("design:paramtypes", [HttpClient])
], UploadDownloadService);
export { UploadDownloadService };
//# sourceMappingURL=upload-download.service.js.map
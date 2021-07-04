import { Attachment } from './../../../models/common.model'; 
import { Injectable } from '@angular/core';
import { HttpClient, HttpEvent, HttpRequest, HttpEventType } from '@angular/common/http';
import { Observable } from 'rxjs'; 
import { map } from 'rxjs/operators';
import { environment } from 'environments/environment';


@Injectable({
  providedIn: 'root'
})
export class UploadDownloadService {
  private baseApiUrl: string;
  private apiDownloadUrl: string;
  private apiUploadUrl: string;
  private apiFileUrl: string;

  constructor(private httpClient: HttpClient) {
    this.apiDownloadUrl = environment.apiUrl + 'Attachement/downloadFile';
    this.apiUploadUrl = environment.apiUrl + 'Attachement/UploadFile';
    this.apiFileUrl = environment.apiUrl + 'Attachement/files';
  }


  public downloadFile(attachmentID: Number): Observable<HttpEvent<Blob>> {
    return this.httpClient.request(new HttpRequest(
      'GET',
      `${this.apiDownloadUrl}?AttachmentID=${attachmentID}`,
      null,
      {
        reportProgress: true,
        responseType: 'blob'
      }));
  }


  //Upload 

  public uploadFile(file: Blob, referenceID: Number): Observable<HttpEvent<void>> {
    const formData = new FormData();
    formData.append('file', file);

    return this.httpClient.request(new HttpRequest(
      'POST',
      this.apiUploadUrl + '/' + referenceID,
      formData,
      {
        reportProgress: true
      }));
  }

  public upload(data) {
    let uploadURL = `${this.apiUploadUrl}`;

    return this.httpClient.post<any>(uploadURL, data, {
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
    })
    );
  }


  public getFiles(referenceID: Number): Observable<Attachment[]> {
    return this.httpClient.get<Attachment[]>(this.apiFileUrl + "/" + referenceID);
  }

  RemoveFile(attachmentID: Number) {
    return this.httpClient.delete(environment.apiUrl + "Attachement/DeleteFile/" + attachmentID);
  }

}

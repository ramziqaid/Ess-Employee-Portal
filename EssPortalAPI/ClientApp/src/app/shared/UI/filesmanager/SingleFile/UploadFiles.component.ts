import { environment } from 'environments/environment';
import { Component, OnInit, Output, EventEmitter, ViewChild, TemplateRef } from '@angular/core';
import { HttpClient, HttpEventType, HttpRequest } from '@angular/common/http'; 

@Component({
  selector: 'app-UploadFiles',
  templateUrl: './UploadFiles.component.html',
  styleUrls: ['./UploadFiles.component.scss']
})
export class UploadFilesComponent implements OnInit {

  uploadedFiles: Array<File>;
  public progress: number;
  public message: string;
  private baseUrl: string = environment.apiUrl;
  @Output() public onUploadFinished = new EventEmitter();
  constructor(private http: HttpClient) { }

  ngOnInit() {
  }


  public uploadFile(files) {
    if (files.length === 0)
      return;

    let fileToUpload = <File>files[0];
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


  // fileChange(element) {
  //   debugger;
  //   this.uploadedFiles = element.target.files;
  // }

  // upload() {
  //   let formData = new FormData();
  //   for (var i = 0; i < this.uploadedFiles.length; i++) {
  //     formData.append("uploads[]", this.uploadedFiles[i], this.uploadedFiles[i].name);
  //   }
  //   this.http.post('/api/upload', formData)
  //     .subscribe((response) => {
  //       console.log('response received is ', response);
  //     })
  // }
}

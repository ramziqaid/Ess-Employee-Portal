import { Component, OnInit } from '@angular/core';
import { FileUploader } from 'ng2-file-upload';
const URL = 'http://localhost:49908/api/Attachement/UploadFile/1';
@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.css']
})
export class FileUploadComponent implements OnInit {
  uploader: FileUploader;
  // public uploader: FileUploader = new FileUploader({ url: 'http://localhost:49908/api/Attachement/UploadFile' });


  public hasBaseDropZoneOver: boolean = false;
  console = console;
  constructor() {

    this.uploader = new FileUploader({
      url: URL,
      disableMultipart: true, // 'DisableMultipart' must be 'true' for formatDataFunction to be called.
      formatDataFunctionIsAsync: true,
      authToken: 'Bearer ' + localStorage.getItem('jwtToken'),
      isHTML5: true,
      allowedFileType: ['image'],
      autoUpload: false,
      removeAfterUpload: true,
      maxFileSize: 10 * 1024 * 1024,
      formatDataFunction: async (item) => {
        return new Promise((resolve, reject) => {
          resolve({
            name: item._file.name,
            length: item._file.size,
            contentType: item._file.type,
            date: new Date()
          });
        });
      }
    });
  }

  ngOnInit() {
  }

  public fileOverBase(e: any): void {
    this.hasBaseDropZoneOver = e;
  }
}

import { Component, Output, EventEmitter, Input, ViewChild, ElementRef } from '@angular/core';

import { HttpEventType } from '@angular/common/http';

import { UploadDownloadService } from '../service/upload-download.service';
import { ProgressStatus, ProgressStatusEnum } from '../models/progress-status.model';

@Component({
  selector: 'app-upload',
  templateUrl: 'upload.component.html',
  styles: [`  .upload { 
    float: right;
    height: 40px;
    width: 50px;
    margin: 10px;
  }`]
})

export class UploadComponent {
  @Input() public disabled: boolean;
  @Output() public uploadStatus: EventEmitter<ProgressStatus>;
  @ViewChild('inputFile', { static: true }) inputFile: ElementRef;
  @Input() public referenceID: Number;

  constructor(private service: UploadDownloadService) {
    this.uploadStatus = new EventEmitter<ProgressStatus>();
  }

  public upload(event) {
    debugger;
    if (event.target.files && event.target.files.length > 0) {
      const file = event.target.files[0];
      this.uploadStatus.emit({ status: ProgressStatusEnum.START });
      this.service.uploadFile(file, (this.referenceID == undefined) ? 0 : this.referenceID).subscribe(
        data => {
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
        },
        error => {
          this.inputFile.nativeElement.value = '';
          this.uploadStatus.emit({ status: ProgressStatusEnum.ERROR, body: error });
        }
      );
    }
  }
}

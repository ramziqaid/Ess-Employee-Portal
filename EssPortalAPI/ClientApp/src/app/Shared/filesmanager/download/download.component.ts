import { Component, Input, Output, EventEmitter } from '@angular/core';
import { HttpEventType } from '@angular/common/http';
import { UploadDownloadService } from '../service/upload-download.service';
import { ProgressStatus, ProgressStatusEnum } from '../models/progress-status.model';
import { error } from 'protractor';

@Component({
  selector: 'app-download',
  templateUrl: 'download.component.html',
  styleUrls: ['./download.component.css']
})

export class DownloadComponent {
  @Input() public disabled: boolean;
  @Input() public canRemove: boolean;
  @Input() public fileName: string;
  @Input() public attachmentID: Number;
  @Output() public downloadStatus: EventEmitter<ProgressStatus>;
  @Output() public deleteFile = new EventEmitter();

  constructor(private service: UploadDownloadService) {
    this.downloadStatus = new EventEmitter<ProgressStatus>();
  }

  public download() {
    this.downloadStatus.emit({ status: ProgressStatusEnum.START });
    this.service.downloadFile(this.attachmentID).subscribe(
      data => {
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
      },
      error => {
        this.downloadStatus.emit({ status: ProgressStatusEnum.ERROR });
      }
    );
  }

  public removeFile() {
    this.service.RemoveFile(this.attachmentID).subscribe(
      data => {
        this.deleteFile.emit();
      }
      , error => { }
    );
  }

}

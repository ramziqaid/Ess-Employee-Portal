import { CollectionViewer } from '@angular/cdk/collections';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { Attachment } from './../../../models/common.model'; 
import { Component, OnInit, Output, EventEmitter, TemplateRef, ViewChild, Input, OnChanges, SimpleChanges } from '@angular/core';
import { UploadDownloadService } from '../service/upload-download.service';
import { ProgressStatus, ProgressStatusEnum } from '../models/progress-status.model';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
 

@Component({
  selector: 'app-MultiFilesManager',
  templateUrl: './UploadMultiFiles.component.html',
  styleUrls: ['./UploadMultiFiles.component.css']
})

export class MultiFilesManagerComponent implements OnInit, OnChanges {

  public files: Attachment[] = [];
  public fileInDownload: string;
  public percentage: number;
  public showProgress: boolean;
  public showDownloadError: boolean;
  public showUploadError: boolean;
  message: string;
  modalRef: BsModalRef;
  dialogRef: MatDialogRef<any> ;
  // Add Modal
  @ViewChild('templateUploadFile', { static: true }) modal: TemplateRef<any>;

  @Output() public onUploadFinished: EventEmitter<string>;
  @Input() disabled: boolean;
  @Input() canAddRemove: boolean = true;
  @Input() referenceID: Number;
  @Input() clear: boolean;
  @Input() text: string;

  constructor(private service: UploadDownloadService,
     private modalService: BsModalService,
     private dialog: MatDialog 
     ) {
    this.onUploadFinished = new EventEmitter<string>();
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.getFiles();
  }

  ngOnInit() {

  }

  private getFiles() {
    if (this.referenceID != undefined || this.referenceID != null) {
      this.service.getFiles(this.referenceID).subscribe(
        data => {
          this.files = data;
        }
      );
    } else {
      this.files = [];
    }
  }

  public downloadStatus(event: ProgressStatus) {
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

  public uploadStatus(event: ProgressStatus) {
   
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

  public clearItems() {
    this.files = [];
  }
  show() {
    this.modalRef = this.modalService.show(this.modal);
  } 

  openPopUp( ) { 
     this.dialog.open(this.modal, {
      width: '720px',
      disableClose: true 
    })  
  }
  closePopUp( ) {
    this.dialog.closeAll();
  }
  
}

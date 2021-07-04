import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'actionBar',
  templateUrl: './actionBar.component.html',
  styleUrls: ['./actionBar.component.scss']
})
export class ActionBarComponent implements OnInit {

  @Input() disabled: boolean;
  @Input() showActionBar: boolean=true;
  @Input() showNew: boolean=true;
  @Input() showEdit: boolean=true;
  @Input() showSave: boolean=true;
  @Input() showDelete: boolean=true;
  @Input() showCancel: boolean=true;
  @Input() showPrint: boolean=true;

  @Output() newAction = new EventEmitter();
  @Output() editAction = new EventEmitter();
  @Output() saveAction = new EventEmitter();
  @Output() deleteAction = new EventEmitter();
  @Output() cancelAction = new EventEmitter();
  @Output() printAction = new EventEmitter();
  
  @Output() onUploadFinishedFire =new EventEmitter<string>();
  @Input() statusFlages: boolean;
  @Input() referenceID: Number;
  @Input() textUpload: string;
  @Input() showAttachmentBTN: boolean=true;


  status: string = "10000";
  constructor() { }

  ngOnInit() {

  }

   getStatus(index: number): boolean {
    const x = this.status.substr(index, 1);
    return (x == "1" ? false : true);
  }
  newClick() {
    this.newAction.emit();
    this.status = "00101";
  }

  editClick() {
    this.status = "00101";
    this.editAction.emit();
    //this.didVote = true;
  }
  saveClick() {
    this.saveAction.emit();

    //this.didVote = true;
  }
  deleteClick() {
    this.deleteAction.emit();
    //this.didVote = true;
  }
  cancelClick() {
    this.status = "10000";
    this.cancelAction.emit();
    //this.didVote = true;
  }
  printClick() { 
    this.printAction.emit();
    //this.didVote = true;
  }
  
  uploadFinishedFire(attachmentID: string) {
   this.onUploadFinishedFire.emit(attachmentID);
  }
 

  public queryMode() {
    this.status = "10000";
  }

  public editMode() {
    this.status = "11011";
  }


}

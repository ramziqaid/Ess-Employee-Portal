import { ActionTypeID } from './../../../Shared/_sharedEnum.enum';
import { Component, OnInit, ElementRef, ViewChild, TemplateRef } from '@angular/core';
import { Subject } from 'rxjs';
import { PurchasesService } from '../Services/Purchases.service';
import * as XLSX from 'xlsx';
import * as model from '../Models/Purchases';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { DataTableDirective } from 'angular-datatables';
import { EssPortalService, AlertifyService, AuthService } from '../../../core';

@Component({
  selector: 'listPurchases',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListPurchasesComponent implements OnInit {

  // Datatables Properties
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject();
  @ViewChild('TABLE', { static: false }) table: ElementRef;
  // Add Modal
  @ViewChild('template', { static: true }) modal: TemplateRef<any>;
  @ViewChild(DataTableDirective, { static: true }) dtElement: DataTableDirective;

  data: any[];
  oldObj: any;
  purchasesDetails: model.PurchasesDetails[];
  modalRef: BsModalRef;

  // For the FormControl - Adding Action
  actionForm: FormGroup;
  description: FormControl;
  actionName: string;
  IsApproved: boolean;
  IsRejected: boolean;

  constructor(
    private alertify: AlertifyService,
    private purchasesService: PurchasesService,
    private modalService: BsModalService,
    private fb: FormBuilder
  ) { }


  ngOnInit() {
    this.loadRequestList();

    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 20,
      autoWidth: true,
      order: [[1, 'desc']],
      rowCallback: (row: Node, data: any[] | Object, index: number) => {
        const self = this;
        $('td', row).unbind('click');
        $('td', row).bind('click', () => {
          // self.someClickHandler(data);
        });
        return row;
      }
    };

  }

  message = '';
  someClickHandler(info: any): void {
    this.message = info[2];
    this.loadPurchasewithDetails(info[2]);
  }

  //#region load 

  loadRequestList() {
    this.purchasesService.loadPurchaseRequestList().subscribe(
      result => {
        this.data = result;
        this.dtTrigger.next();
      },
      error => { this.alertify.error(error); }
    );
  }


  loadPurchasewithDetails(PurchaseNumber: string) {
    this.purchasesService.loadPurchaseRequestByNumber(PurchaseNumber).subscribe(
      result => {
        this.oldObj = result;
      },
      error => { this.alertify.error(error); }
    );
  }

  //#endregion 

  ExportTOExcel() {
    const ws: XLSX.WorkSheet = XLSX.utils.table_to_sheet(this.table.nativeElement);
    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');
    /* save to file */
    XLSX.writeFile(wb, 'PurchasesList.xlsx');
  }

  DoneRequest(PurchaseID: number): void {
    this.actionName = "Done";
    this.IsApproved = true;
    this.IsRejected = undefined;
    // Initializing Add Confirm properties   
    this.description = new FormControl('');
    this.actionForm = this.fb.group(
      {
        'description': this.description,
      });
    this.modalRef = this.modalService.show(this.modal);
  }

  RejectedRequest(PurchaseID: number): void {
    this.actionName = "Reject";
    this.IsApproved = undefined;
    this.IsRejected = true;
    this.description = new FormControl('', [Validators.required, Validators.maxLength(150)]);
    this.actionForm = this.fb.group(
      {
        'description': this.description,
      });
    this.modalRef = this.modalService.show(this.modal);

  }

  Offers(PurchaseID: number): void {

  }

  ActionSubmit() {
    if (this.oldObj != undefined) {
      let purchaseAction: model.PurchasesStage = {
        purchasesStageID: this.oldObj.purchases.purchasesStageID,
        purchasesStageTypeID: this.oldObj.purchases.purchasesStageTypeID,
        purchaseID: this.oldObj.purchases.purchaseID,
        userID: -1,
        isApproved: this.IsApproved,
        isRejected: this.IsRejected,
        justification: this.actionForm.value.description
      }
      debugger;
      this.purchasesService.ActionPurchase(purchaseAction).subscribe(
        result => {
          this.alertify.success("Done ...");
          this.dtElement.dtInstance.then((dtInstance: DataTables.Api) => {
            // Destroy the table first in the current context
            dtInstance.destroy();

            // Call the dtTrigger to rerender again
            this.dtTrigger.next();

          });
          this.loadRequestList();
          this.oldObj = [];
        },
        error => { this.alertify.error(error); }
      );

      this.modalRef.hide();
      this.actionForm.reset();
    }

  }
}

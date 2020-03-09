import { Attachment } from '../../../Shared/_models';
import { Component, OnInit, ViewChild } from '@angular/core';
import { EssPortalService, AlertifyService, AuthService } from '../../../core';
import { PurchasesService } from '../Services/Purchases.service';
import * as model from '../Models/Purchases';
import { DataTableDirective } from 'angular-datatables';
import { MatDialogRef } from '@angular/material/dialog';



@Component({
  selector: 'app-Offer',
  templateUrl: './Offer.component.html',
  styleUrls: ['./Offer.component.scss']
})
export class PurchaseOfferComponent implements OnInit {

  // Update Modal 
  @ViewChild('heroForm', { static: false }) heroForm: any;
  @ViewChild(DataTableDirective, { static: false }) dtElement: DataTableDirective;


  attachment: Attachment[] = [];
  PurchaseOffers: model.PurchaseOffers[] = [];
  VendList: any[];

  newObj: any;
  listObj: any;
  canAddRemove: boolean = true;
  canSelectdOffer: boolean = false;

  title: string = "New";
  vendId: string;
  itemPrice: Number;
  justification: string;
  purchasesDetailsData: any;

  constructor(
    public dialogRef: MatDialogRef<PurchaseOfferComponent>,
    private purchasesService: PurchasesService,
    private authService: AuthService,
    private sharedService: EssPortalService,
    private alertify: AlertifyService) {

    this.purchasesDetailsData = this.purchasesService.purchasesDetailsData;
    this.loadPurchaseOffers(this.purchasesDetailsData.purchasesDetailsID);
    // }
    this.loadVend();
    this.title = this.purchasesDetailsData.productName;
    this.canAddRemove = this.purchasesDetailsData.canAddRemove;
    this.canSelectdOffer = this.purchasesDetailsData.canSelectdOffer;

  }

  ngOnInit() {
    this.newObj = this.getEmptyObject();
  }

  private getEmptyObject(): any {
    const obj = {
      purchaseOffers: {
        purchaseID: this.purchasesDetailsData.purchaseID,
        purchasesDetailsID: this.purchasesDetailsData.purchasesDetailsID,
        userID: this.authService.logginUserID(),
        createdDate: this.sharedService.getCurrentDate(),
      },
      attachments: this.attachment
    };
    return obj;
  };

  private loadVend() {
    this.purchasesService.loadVend().subscribe(
      result => {
        this.VendList = result;
      },
      error => { this.alertify.error(error); }
    );
  }


  //#endregion 

  // Method to Add new Product

  onSubmit() {

    if (this.heroForm.valid) {
      // if (this.newObj.attachments === undefined || this.newObj.attachments === null || this.newObj.attachments.length == 0) {
      //   this.alertify.error('You Must Enter Attachments');
      //   return;
      // }
      this.newObj.purchaseOffers.vendNumber = this.vendId;
      this.newObj.purchaseOffers.price = this.itemPrice;
      this.newObj.purchaseOffers.selectedByUserID = undefined;
      this.newObj.purchaseOffers.justification = this.justification;
      this.newObj.purchaseOffers.userID = this.authService.logginUserID();

      this.purchasesService.savePurchaseOffers(this.newObj).subscribe(
        (data) => {
          this.alertify.success('Save successful');
          this.loadPurchaseOffers(this.purchasesDetailsData.purchasesDetailsID);
          this.heroForm.reset();
        }, error => {
          this.alertify.error(error);
          //this.newObj.purchaseOffers.pop();
        }
      );
    }
  }

  onClose() {
    this.heroForm.reset();
    this.dialogRef.close();
  }

  //#region load 

  loadPurchaseOffers(purchasesDetailsID: Number) {

    if (purchasesDetailsID != undefined) {
      this.purchasesService.loadPurchaseOffers(purchasesDetailsID).subscribe(
        result => {
          this.listObj = result;
        },
        error => { this.alertify.error(error); }
      );
    }
  }

  onDelete(purchaseOfferID: number, index: number): void {
    if (purchaseOfferID != undefined) {
      this.alertify.confirm('Are you sure you want to delete?', () => {
        this.purchasesService.deletePurchaseOffers(purchaseOfferID).subscribe(
          result => {
            this.listObj.splice(index, 1);
            this.alertify.success("Done . . .");
            //this.loadPurchaseOffers(this.purchasesDetailsData.purchasesDetailsID);
          },
          error => { this.alertify.error(error); }
        );
      });
    }

  }

  //#endregion

  public uploadFinished(attachmentID: string) {
    if (attachmentID != undefined) {
      var dtl = new Attachment;
      dtl.attachmentID = +attachmentID;
      dtl.fileName = "fileName";
      dtl.fileType = "fileType";
      if (this.newObj.attachments === undefined || this.newObj.attachments === null) {
        this.newObj.attachments = this.attachment;
      }
      this.newObj.attachments.push(dtl);
      //console.log(attachmentID);
    }

  }

  changeSelectOffer(purchaseOfferID: Number, purchasesDetailsID: Number, checked: boolean): void {

    if (purchaseOfferID != undefined) {
      this.alertify.confirm('Are you sure you want to Select Offer?', () => {
        this.purchasesService.selectPurchaseOffers(purchaseOfferID, purchasesDetailsID, checked).subscribe(
          result => {
            this.alertify.success("Done . . .");
            this.loadPurchaseOffers(this.purchasesDetailsData.purchasesDetailsID);
          },
          error => { this.alertify.error(error); }
        );
      });
    }
  }


  // We will use this method to destroy old table and re-render new table


  //help
  get diagnostic() { return JSON.stringify(this.newObj); }

}

import { SystemCode, Attachment, StatusTypeID } from './../../../Shared/index';
import { Component, OnInit, ViewChild, TemplateRef, ChangeDetectorRef, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PurchasesService } from '../Services/Purchases.service';
import * as model from '../Models/Purchases';
import { Subject, Observable } from 'rxjs';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';
import { ActionBarComponent } from '../../actionBar/actionBar.component';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA, MatDialogConfig } from '@angular/material/dialog';
import { PurchaseOfferComponent } from '../offers/Offer.component';
import { MatTableDataSource } from '@angular/material';
import { STEPPER_GLOBAL_OPTIONS } from '@angular/cdk/stepper';
import { EssPortalService, AlertifyService, AuthService } from '../../../core';

const ELEMENT_DATA: model.PurchasesDetails[] = [];
@Component({
  selector: 'app-Requset',
  templateUrl: './Requset.component.html',
  styleUrls: ['./Requset.component.scss'],
  providers: [{
    provide: STEPPER_GLOBAL_OPTIONS, useValue: { showError: true }
  }]
})
export class RequsetPurchasesComponent implements OnInit, OnDestroy {
  // Add Modal
  @ViewChild('template', { static: true }) modal: TemplateRef<any>;
  @ViewChild('heroForm', { static: false }) heroForm: any;
  @ViewChild(ActionBarComponent, { static: false }) actionBar: ActionBarComponent;

  // For the FormControl - Adding products
  insertForm: FormGroup;
  itemTypeID: FormControl;
  mainGroupID: FormControl;
  subGroupID: FormControl;
  itemNumber: FormControl;
  QTY: FormControl;
  Price: FormControl;
  description: FormControl;

  // Modal properties 
  modalRef: BsModalRef;
  selectedProduct: model.Product;
  productsListGroup: model.ProductGroup[] = [];
  productsListMainGroup: model.ProductGroup[] = [];
  productsListSubGroup: model.ProductGroup[] = [];
  productsList: model.Product[] = [];
  productsListAfterFilter: model.Product[] = [];

  // For the FormControl - Confirm Action
  @ViewChild('templateConfirm', { static: true }) modalConfirm: TemplateRef<any>;
  actionForm: FormGroup;
  description2: FormControl;
  actionName: string;
  IsApproved: boolean;
  IsRejected: boolean;

  // Datatables Properties
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject();

  reasonType: SystemCode[];
  TypeProductList: SystemCode[];
  StatusRequest: SystemCode[];
  ProjectList: any[];
  purchasesDetails: model.PurchasesDetails[] = [];
  attachment: Attachment[] = [];

  newObj: any;
  newOfferObj: any;
  editMode: boolean = true;
  canAddOffer: boolean = false;
  title: string = "New";
  PurchaseID: number;
  showActionColumn: boolean = true;

  displayedColumns: string[] = ['itemNumber', 'itemNameEN', 'description', 'price', 'Qty', 'Actions'];
  dataSource = new MatTableDataSource(this.purchasesDetails);

  constructor(
    private sharedService: EssPortalService,
    private purchasesService: PurchasesService,
    private authService: AuthService,
    private _avRoute: ActivatedRoute,
    private alertify: AlertifyService,
    private modalService: BsModalService,
    private fb: FormBuilder,
    public dialog: MatDialog) {

    if (this._avRoute.snapshot.params["PurchaseID"]) {
      this.PurchaseID = this._avRoute.snapshot.params["PurchaseID"];
    }
  }

  ngOnInit() {

    this.newObj = this.getEmptyObject();
    this.loadSystemCode();
    this.loadProject();

    // Initializing Add product properties 

    this.itemTypeID = new FormControl('', [Validators.required]);
    this.mainGroupID = new FormControl('', [Validators.required]);
    this.subGroupID = new FormControl('', [Validators.required]);
    this.itemNumber = new FormControl('', [Validators.required]);
    this.Price = new FormControl('', [Validators.required, Validators.min(0), Validators.max(1000000)]);
    this.QTY = new FormControl('', [Validators.required, Validators.min(1), Validators.max(1000)]);
    this.description = new FormControl('', [Validators.required, Validators.maxLength(2000)]);

    this.insertForm = this.fb.group(
      {
        'itemTypeID': this.itemTypeID,
        'mainGroupID': this.mainGroupID,
        'subGroupID': this.subGroupID,
        'itemNumber': this.itemNumber,
        'QTY': this.QTY,
        'Price': this.Price,
        'description': this.description,
      });

    if (this.PurchaseID > 0) {
      this.title = "Edit";
      this.loadPurchase(this.PurchaseID);
    }

  }


  ngOnDestroy() {
    // Do not forget to unsubscribe
    this.dtTrigger.unsubscribe();
  }

  queryMode() {
    this.editMode = true;
    this.actionBar.queryMode();
  }

  private getEmptyObject(): any {
    this.purchasesDetails = [];
    this.attachment = [];
    const obj = {
      purchases: {
        // purchaseID: -1,
        purchaseNumber: null,
        purchaseName: null,
        userID: -1,
        statusID: 4,
        typeID: -1,
        projectID: null,
        createdBy: null,
        createdDate: this.sharedService.getCurrentDate(),
        userName: null,
        isNeedOffer: 0
      },
      purchasesDetails: this.purchasesDetails,
      attachments: this.attachment
    };
    this.authService.currentUserName.subscribe(user => { obj.purchases.userName = user });
    return obj;
  };

  getTotalCost() {
    return this.newObj.purchasesDetails.map(t => t.price).reduce((acc, value) => acc + value, 0);
  }

  //#region "actionBar"

  newClick() {
    this.editMode = false;
    this.newObj = this.getEmptyObject();
    this.showActionColumn = true;
    this.dataSource = new MatTableDataSource(this.newObj.purchasesDetails);
  }

  edit() {
    this.editMode = false;
  }

  save() {
    if (this.newObj.purchases.statusID != StatusTypeID.NewRequest) {
      this.alertify.error('This order is approved, cannot be modified ');
      return;
    }
    if (this.heroForm.valid) {
      if (this.newObj.purchasesDetails == undefined || this.newObj.purchasesDetails.length == 0) {
        this.alertify.error('You Must Enter Product');
        return;
      }
      // if (this.newObj.purchases.purchaseNumber == undefined) this.newObj.purchases.purchaseNumber = "-1";
      this.purchasesService.savePurchaseRequest(this.newObj).subscribe(
        (data) => {
          this.alertify.success('Save successful');
          this.newObj = data;
          this.PurchaseID = this.newObj.purchases.purchaseID;
          this.loadPurchase(this.newObj.purchases.purchaseID);
          this.actionBar.editMode();
          this.editMode = true;
        }, error => {
          this.alertify.error(error);
        }
      );
    }

  }

  delete() {

  }

  reset() {
    this.editMode = true;
    //this.heroForm.reset();
    this.newObj = this.getEmptyObject();
    this.insertForm.reset();
    this.PurchaseID = -1;
    this.loadSystemCode();
    this.canAddOffer = false;
  }

  //#endregion


  //#region "Load Add New product Modal"
  onAddProduct() {
    this.loadProductGroup();
    this.loadProduct();
    this.modalRef = this.modalService.show(this.modal);
  }

  onSubmit() {

    if (this.insertForm.valid) {
      let newProduct = this.insertForm.value;
      var dtl = new model.PurchasesDetails;
      dtl.itemNumber = newProduct.itemNumber;
      dtl.itemNameEN = newProduct.name;
      if (this.productsList.filter(p => p.Code == newProduct.itemNumber).length > 0) {
        let p = this.productsList.filter(p => p.Code == newProduct.itemNumber)[0];
        dtl.itemNameEN = p.NameEN;
      }
      dtl.itemTypeID = newProduct.itemTypeID;
      dtl.subGroupID = newProduct.subGroupID;
      dtl.mainGroupID = newProduct.mainGroupID;
      dtl.qty = newProduct.QTY;
      dtl.price = newProduct.Price;
      dtl.description = newProduct.description;

      this.newObj.purchasesDetails.push(dtl);
      this.dataSource = new MatTableDataSource(this.newObj.purchasesDetails);
      this.modalRef.hide();
      this.insertForm.reset();
    }
  }

  SelectMainGroup() {
    let newProduct = this.insertForm.value;
    if (newProduct.mainGroupID != "") {
      this.productsListSubGroup = this.productsListGroup.filter(p => p.MainGroupID == newProduct.mainGroupID);
    }
    else {
      this.productsListSubGroup = [];
    }
  }

  SelectItemGroup() {
    let newProduct = this.insertForm.value;
    if (newProduct.subGroupID != "") {
      this.productsListAfterFilter = this.productsList.filter(p => p.SubGroupID == newProduct.subGroupID);
    }
    else {
      this.productsListAfterFilter = [];
    }
  }


  SelectItemNumber() {
    let newProduct = this.insertForm.value;
    if (this.productsList.filter(p => p.Code == newProduct.itemNumber).length > 0) {
      let p = this.productsList.filter(p => p.Code == newProduct.itemNumber)[0].Price;
      const Price = this.insertForm.get('Price');
      Price.setValue(p);
    }
  }

  itemType: number = 7;
  SelectTypeProduct() {
    // const mainGroupID = this.insertForm.get('mainGroupID'); 

    let newProduct = this.insertForm.value;
    if (newProduct.itemTypeID == 8) {
      this.insertForm.controls['mainGroupID'].clearValidators();
      this.insertForm.controls['subGroupID'].clearValidators();
      this.insertForm.controls['itemNumber'].clearValidators();
      this.insertForm.controls['mainGroupID'].disable();
      this.insertForm.controls['subGroupID'].disable();
      this.insertForm.controls['itemNumber'].disable();
      this.insertForm.controls['mainGroupID'].setValue(null);
      this.insertForm.controls['mainGroupID'].markAsPristine();
    } else {
      this.insertForm.controls['mainGroupID'].setValidators([Validators.required]);
      this.insertForm.controls['subGroupID'].setValidators([Validators.required]);
      this.insertForm.controls['itemNumber'].setValidators([Validators.required]);
      this.insertForm.controls['mainGroupID'].enable();
      this.insertForm.controls['subGroupID'].enable();
      this.insertForm.controls['itemNumber'].enable();
    }
    this.insertForm.controls['mainGroupID'].updateValueAndValidity({
      onlySelf: true
    });
    this.insertForm.controls['subGroupID'].updateValueAndValidity({
      onlySelf: true
    });
    this.insertForm.controls['itemNumber'].updateValueAndValidity({
      onlySelf: true
    });
    this.itemType = newProduct.itemTypeID;
  }


  onDelete(index: number): void {
    this.newObj.purchasesDetails.splice(index, 1);
    this.dataSource = new MatTableDataSource(this.newObj.purchasesDetails);
  }

  plues(index: number): void {
    if (this.newObj.purchasesDetails[index].qty < 100) {
      this.newObj.purchasesDetails[index].qty = this.newObj.purchasesDetails[index].qty + 1;
    }

  }
  minus(index: number): void {
    if (this.newObj.purchasesDetails[index].qty > 1) {
      this.newObj.purchasesDetails[index].qty = this.newObj.purchasesDetails[index].qty - 1;
    }
  }

  //#endregion

  //#region load 

  private loadPurchase(PurchaseID: number) {

    this.purchasesService.loadPurchaseRequestByID(PurchaseID).subscribe(
      result => {
        this.newObj = result;
        this.dataSource = new MatTableDataSource(this.newObj.purchasesDetails);

        if (this.newObj.purchases.userID == this.authService.logginUserID() && this.newObj.purchases.statusID == StatusTypeID.NewRequest) {
          this.showActionColumn = true;
          if (this.actionBar) { this.actionBar.editMode() };
        } else {
          this.showActionColumn = false;
        }
      },
      error => { this.alertify.error(error); }
    );
  }


  private loadSystemCode() {
    this.sharedService.getSystemCodeCategory('PUR').subscribe(
      result => {
        this.reasonType = result;
      },
      error => { this.alertify.error(error); }
    );

    this.sharedService.getSystemCodeCategory('TYR').subscribe(
      result => {
        this.TypeProductList = result;
      },
      error => { this.alertify.error(error); }
    );

    this.sharedService.getSystemCodeCategory('STU').subscribe(
      result => {
        this.StatusRequest = result;
      },
      error => { this.alertify.error(error); }
    );

  }

  private loadProductGroup() {
    this.purchasesService.loadProductGroup().subscribe(
      result => {
        this.productsListMainGroup = result.filter(
          (thing, i, arr) => arr.findIndex(t => t.MainGroupID === thing.MainGroupID) === i
        );
        this.productsListGroup = result;
      },
      error => { this.alertify.error(error); }
    );
  }


  private loadProduct() {
    this.purchasesService.loadProduct().subscribe(
      result => {
        this.productsList = result;
        //console.log(this.productsList);
      },
      error => { this.alertify.error(error); }
    );
  }

  private loadProject() {
    this.purchasesService.loadProject().subscribe(
      result => {
        this.ProjectList = result;
      },
      error => { this.alertify.error(error); }
    );
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

  //#region "Confirm MODAL START"

  ActionConfirmSubmit() {

    if (this.newObj != undefined) {
      let purchaseAction: model.PurchasesStage = {
        purchasesStageID: this.newObj.purchases.purchasesStageID,
        purchasesStageTypeID: this.newObj.purchases.purchasesStageTypeID,
        purchaseID: this.newObj.purchases.purchaseID,
        userID: -1,
        isApproved: this.IsApproved,
        isRejected: this.IsRejected,
        justification: this.actionForm.value.description2
      }
      this.purchasesService.ActionPurchase(purchaseAction).subscribe(
        result => {
          this.alertify.success("Done ...");
          this.loadPurchase(this.PurchaseID);
        },
        error => { this.alertify.error(error); }
      );

      this.modalRef.hide();
      this.actionForm.reset();
    }

  }

  DoneRequest(): void {
    this.actionName = "Done";
    this.IsApproved = true;
    this.IsRejected = undefined;
    // Initializing Add Confirm properties   
    this.description2 = new FormControl('');
    this.actionForm = this.fb.group(
      {
        'description2': this.description2,
      });
    this.modalRef = this.modalService.show(this.modalConfirm);
  }

  RejectedRequest(): void {
    this.actionName = "Reject";
    this.IsApproved = undefined;
    this.IsRejected = true;
    this.description2 = new FormControl('', [Validators.required, Validators.maxLength(150)]);
    this.actionForm = this.fb.group(
      {
        'description2': this.description2,
      });
    this.modalRef = this.modalService.show(this.modalConfirm);

  }
  //#endregion

  //#region "Offer"

  // For the FormControl - Offer Action

  // PurchaseOffers: model.PurchaseOffers[] = [];
  // offerAttachment: Attachment[] = []; 
  // ProductNameSelectForOffer: string;


  OpenOfferForm(purchasesDetailsID: Number, productName: string, canAddRemove: boolean, isNeedSelectOffer: boolean) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.width = "70%";
    dialogConfig.autoFocus = true;
    this.purchasesService.purchasesDetailsData = {
      purchaseID: this.PurchaseID,
      purchasesDetailsID: purchasesDetailsID,
      productName: productName,
      canAddRemove: canAddRemove,
      canSelectdOffer: isNeedSelectOffer
    };
    this.dialog.open(PurchaseOfferComponent, dialogConfig);
  }

  //#endregion

  //help
  get diagnostic() { return JSON.stringify(this.newObj); }

}

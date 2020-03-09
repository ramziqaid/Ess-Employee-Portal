import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PurchasesService } from '../Services/Purchases.service';

@Component({
  selector: 'app-invoice',
  templateUrl: './invoice.component.html',
  styleUrls: ['./invoice.component.scss']
})
export class PrintInvoiceComponent implements OnInit {

  PurchaseID: number;
  newObj: any;
  load: boolean = false;

  displayDate: string;
  constructor(
    private _avRoute: ActivatedRoute,
    private purchasesService: PurchasesService) {
    if (this._avRoute.snapshot.params["PurchaseID"]) {
      // 
      this.PurchaseID = this._avRoute.snapshot.params["PurchaseID"];
    }
    this.displayDate = new Date().toLocaleDateString();
  }

  ngOnInit() {
    if (this.PurchaseID > 0) {
      this.purchasesService.loadPurchaseRequestByID(this.PurchaseID).subscribe(
        result => {
          this.newObj = result;
          this.load = true;
          //debugger;
        },
        //error => { this.alertify.error(error); }
      );
    }
  }

  myFunction() {
    window.print();
  }
}

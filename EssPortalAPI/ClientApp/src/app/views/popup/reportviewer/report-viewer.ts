import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Component, Inject, OnInit, ViewEncapsulation } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from 'app/core/services';
 
@Component({
  selector: 'report-viewer',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './report-viewer.html',
  styleUrls: [
    "../../../../../node_modules/jquery-ui/themes/base/all.css",
    "../../../../../node_modules/devextreme/dist/css/dx.common.css",
    "../../../../../node_modules/devextreme/dist/css/dx.light.css",
    "../../../../../node_modules/@devexpress/analytics-core/dist/css/dx-analytics.common.css",
    "../../../../../node_modules/@devexpress/analytics-core/dist/css/dx-analytics.light.css",
    "../../../../../node_modules/devexpress-reporting/dist/css/dx-webdocumentviewer.css"
  ]
})
export class ReportViewerComponent implements OnInit{
  reportUrl: string = "InvoiceReport";
  invokeAction: string = '/DXXRDV';
  PurchaseID: number;
  hostUrl: string = environment.apiReportUrl;

  constructor(
    private _avRoute: ActivatedRoute,
    private authService: AuthService,
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<ReportViewerComponent>) 
    { 
      
  }
  ngOnInit() { 
    this.buildItemForm(this.data);
  }
  buildItemForm(item) {   

    switch(item.Id){
     case 1:       
          this.reportUrl = `EvaluationReport?EvaluationID=${item.EvaluationID}&UserID=${this.authService.logginUserID()}`
      break;

      case 2:
        this.PurchaseID =40; this._avRoute.snapshot.params["PurchaseID"];
        this.reportUrl = `InvoiceReport?PurchaseID=${this.PurchaseID}&UserID=${this.authService.logginUserID()}`
      break;
    }
    
   
  }

}
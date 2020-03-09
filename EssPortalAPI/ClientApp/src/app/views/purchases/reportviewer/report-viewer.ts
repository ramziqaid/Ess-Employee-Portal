import { Component, Inject, ViewEncapsulation } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { ActivatedRoute } from '@angular/router';
import { EssPortalService, AlertifyService, AuthService } from '../../../core';
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
export class ReportViewerComponent {
  reportUrl: string = "InvoiceReport";
  invokeAction: string = '/DXXRDV';
  PurchaseID: number;
  hostUrl: string = environment.apiReportUrl;

  constructor(private _avRoute: ActivatedRoute,
    private authService: AuthService) {
    this.PurchaseID = this._avRoute.snapshot.params["PurchaseID"];
    this.reportUrl = `InvoiceReport?PurchaseID=${this.PurchaseID}&UserID=${this.authService.logginUserID()}`
  }

}
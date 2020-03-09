
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { RequsetPurchasesComponent } from './requset/Requset.component';
import { ListPurchasesComponent } from './list/list.component';
import { PrintInvoiceComponent } from './printInvoice/invoice.component';
import { PurchaseOfferComponent } from './offers/Offer.component';
import { ReportViewerComponent } from './reportviewer/report-viewer';

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Purchases '
    },
    children: [
      {
        path: 'NewRequset',
        data: {
          title: 'New '
        },
        // canActivate: [AuthGuard],
        children: [
          {
            path: '', component: RequsetPurchasesComponent,
            data: {
              title: 'New'
            }
          },
          { path: ':PurchaseID', component: RequsetPurchasesComponent }
        ]
      },
      {
        path: 'ListRequset',
        component: ListPurchasesComponent,
        data: {
          title: 'List Request'
        }
      }
      ,
      {
        path: 'PrintInvoice/:PurchaseID',
        component: ReportViewerComponent,// PrintInvoiceComponent,
        data: {
          title: 'Invoice Print'
        },
      },
      {
        path: 'Offers/:PurchaseID',
        component: PurchaseOfferComponent,
        data: {
          title: 'Purchase Offer'
        },
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})


export class PurchasesRoutesModule { } 

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { DxReportViewerModule, DxReportDesignerModule } from 'devexpress-reporting-angular';
import { ReportViewerComponent } from './reportviewer/report-viewer';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  imports: [
    CommonModule,    
    DxReportViewerModule,
    DxReportDesignerModule,
    MatButtonModule,
    TranslateModule
  ],
  declarations: [ReportViewerComponent],
  providers: [ 
    TranslateService, 
    ], 
})
export class PopupModule { }

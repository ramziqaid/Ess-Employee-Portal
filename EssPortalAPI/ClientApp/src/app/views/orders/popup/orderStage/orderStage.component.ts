import { Component, OnInit, Inject, ViewChild } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { RequestService } from '../../Services/Request.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-ngx-table-popup',
  templateUrl: './orderStage.component.html'
})
export class OrderStagePopupComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  
  displayedColumns: string[] = ['index','employeeName','action','createdDate','note'];
  public dataSource: any;
   
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<OrderStagePopupComponent>, 
    private requestService: RequestService,
  ) { }

  ngOnInit() { 
    this.buildItemForm(this.data);
  }
  ngAfterViewInit() {
    
  }
  
  buildItemForm(item) {
    this.requestService.getRequestStage(item.RequestID).subscribe(
      result => {   
        this.dataSource = new MatTableDataSource(result);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      },
       
      );  
  }

  
}

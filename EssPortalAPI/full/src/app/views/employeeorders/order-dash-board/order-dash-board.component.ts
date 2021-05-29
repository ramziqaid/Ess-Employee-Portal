import { Component, OnInit } from '@angular/core';
import { RequestService } from '../Services/Request.service';
import { RequestType } from '../Models/Request';

@Component({
  selector: 'app-orderDashBoard',
  templateUrl: './order-Dash-Board.component.html',
  styleUrls: ['./order-Dash-Board.component.scss']
})
export class OrderDashBoardComponent implements OnInit {

  requestType: RequestType[];
  General: RequestType[];
  Government: RequestType[];
  Letters: RequestType[];
  constructor(private requestService: RequestService) { }

  ngOnInit() {
    this.loadRequestType();
  }

  loadRequestType() {
    this.requestService.getRequestType().subscribe(
      result => {
        this.requestType = result;
        this.General = this.requestType.filter(p => p.requestGroupID == 1 && p.isActive);
        this.Government = this.requestType.filter(p => p.requestGroupID == 2 && p.isActive);
        this.Letters = this.requestType.filter(p => p.requestGroupID == 3 && p.isActive);

      },
      error => console.log(error)
    );
  }
}

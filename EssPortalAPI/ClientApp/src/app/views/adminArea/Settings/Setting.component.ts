import { Component, OnInit } from '@angular/core';
import { AdminService } from '../Services/admin.service';
import { UserModel } from '../Models/adminModel';

@Component({
  selector: 'app-Setting',
  templateUrl: './Setting.component.html',
  styleUrls: ['./Setting.component.scss']
})
export class SettingComponent implements OnInit {

  UserModel: UserModel[];
  PurchasesStageType: any[];

  constructor(
    private adminService: AdminService,
    private userService: AdminService) { }

  ngOnInit() {
    this.loadUsers();
    this.getPurchasesStageType();
  }
  loadUsers() {
    this.adminService.GetAllUsers().subscribe(
      result => {
        this.UserModel = result;
      },
      error => console.log(error)
    );
  }



  getPurchasesStageType() {
    this.userService.GetPurchasesStageType().subscribe(
      result => {
        this.PurchasesStageType = result.filter(x => x.purchasesTypeID == 7);
      },
      error => console.log(error)
    );
  }

}

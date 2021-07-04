var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, Output, EventEmitter, Input } from '@angular/core';
import { FormControl, FormBuilder } from '@angular/forms';
import { Employee } from 'app/shared/models/common.model';
import { EssPortalService, AuthService } from '../../../core';
let EmployeeComponent = class EmployeeComponent {
    constructor(emp, fb, authService) {
        // this.patientCategory = this.fb.group({
        //   patientCategory: [null, Validators.required]
        // });
        this.emp = emp;
        this.fb = fb;
        this.authService = authService;
        this.required = false;
        this.editMode = true;
        this.loadAllEmployee = false;
        this.labelName = "EMPLOYEE";
        this.addAllText = false;
        this.employee = "";
        this.employeeSelect = new EventEmitter();
        this.myControl = new FormControl();
    }
    ngOnChanges(changes) {
        if (this.employee != undefined && this.empoyeeList != undefined) {
            if (this.empoyeeList.filter(c => c.employeeID == Number(this.employee)).length > 0) {
                this.employeeID = Number(this.employee);
            }
            ;
            // this.patientCategory.get('patientCategory').setValue(toSelect);
        }
    }
    ngOnInit() {
        // this.getEmployees();  
    }
    // private _filter(value: string): string[] {
    //   if (value ) {
    //     return [];
    //   }
    //   const filterValue = value.toLowerCase();     
    //   return this.empoyeeList.filter(option => option.englishName.toLowerCase().indexOf(filterValue) === 0);
    // }
    // private _filter2(value: string): string[] {
    //   const filterValue = value.toLowerCase();
    //   return this.options.filter(option => option.toLowerCase().indexOf(filterValue) === 0);
    // }
    getEmployees() {
        var element = new Employee();
        element.employeeID = -1;
        element.personnelnumber = "";
        element.englishName = "All";
        element.arabicName = "الكل";
        if (this.loadAllEmployee) {
            this.emp.getEmployees().subscribe(result => {
                this.empoyeeList = result;
                if (this.addAllText) {
                    this.empoyeeList.unshift(element);
                }
                this.ngOnChanges(undefined);
            }, error => console.log(error));
        }
        else {
            this.emp.getEmployeeByManagerId(this.authService.logginEmployeeId()).subscribe(result => {
                this.empoyeeList = result;
                if (this.addAllText) {
                    this.empoyeeList.unshift(element);
                }
                this.ngOnChanges(undefined);
            }, error => console.log(error));
        }
    }
    SelectEmoployee() {
        //console.log(this.employeeID);
        this.employeeSelect.emit(this.employeeID);
    }
};
__decorate([
    Input(),
    __metadata("design:type", Array)
], EmployeeComponent.prototype, "empoyeeList", void 0);
__decorate([
    Input(),
    __metadata("design:type", Boolean)
], EmployeeComponent.prototype, "required", void 0);
__decorate([
    Input(),
    __metadata("design:type", Boolean)
], EmployeeComponent.prototype, "editMode", void 0);
__decorate([
    Input(),
    __metadata("design:type", Boolean)
], EmployeeComponent.prototype, "loadAllEmployee", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], EmployeeComponent.prototype, "labelName", void 0);
__decorate([
    Input(),
    __metadata("design:type", Boolean)
], EmployeeComponent.prototype, "addAllText", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], EmployeeComponent.prototype, "employee", void 0);
__decorate([
    Output(),
    __metadata("design:type", Object)
], EmployeeComponent.prototype, "employeeSelect", void 0);
EmployeeComponent = __decorate([
    Component({
        selector: 'employeeList',
        templateUrl: './employee.component.html',
        styleUrls: ['./employee.component.css']
    }),
    __metadata("design:paramtypes", [EssPortalService,
        FormBuilder,
        AuthService])
], EmployeeComponent);
export { EmployeeComponent };
//# sourceMappingURL=employee.component.js.map
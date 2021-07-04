var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { JwtAuthService } from "app/shared/services/auth/jwt-auth.service";
let ProfileComponent = class ProfileComponent {
    constructor(router, jwtAuth) {
        this.router = router;
        this.jwtAuth = jwtAuth;
        this.activeView = "overview";
        // Doughnut
        this.doughnutChartColors = [
            {
                backgroundColor: ["#fff", "rgba(0, 0, 0, .24)"],
            },
        ];
        this.total1 = 500;
        this.data1 = 200;
        this.doughnutChartData1 = [this.data1, this.total1 - this.data1];
        this.total2 = 1000;
        this.data2 = 400;
        this.doughnutChartData2 = [this.data2, this.total2 - this.data2];
        this.doughnutChartType = "doughnut";
        this.doughnutOptions = {
            cutoutPercentage: 85,
            responsive: true,
            maintainAspectRatio: true,
            legend: {
                display: false,
                position: "bottom",
            },
            elements: {
                arc: {
                    borderWidth: 0,
                },
            },
            tooltips: {
                enabled: false,
            },
        };
    }
    ngOnInit() {
        this.activeView = this.router.snapshot.params["view"];
        this.user = this.jwtAuth.user$;
    }
};
ProfileComponent = __decorate([
    Component({
        selector: "app-profile",
        templateUrl: "./profile.component.html",
    }),
    __metadata("design:paramtypes", [ActivatedRoute, JwtAuthService])
], ProfileComponent);
export { ProfileComponent };
//# sourceMappingURL=profile.component.js.map
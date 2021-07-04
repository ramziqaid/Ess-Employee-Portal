var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { EssPortalService } from './../../../core/services/EssPortal.service';
import { AuthService } from 'app/core/services';
import { DashBoardService } from './../Services/DashBoard.service';
import { Component } from '@angular/core';
import { egretAnimations } from 'app/shared/animations/egret-animations';
import { ThemeService } from 'app/shared/services/theme.service';
import tinyColor from 'tinycolor2';
let DefaultDashboardComponent = class DefaultDashboardComponent {
    constructor(themeService, dashservice, EssPortalService, authService) {
        this.themeService = themeService;
        this.dashservice = dashservice;
        this.EssPortalService = EssPortalService;
        this.authService = authService;
        this.lineChartSteppedData = [{
                data: [1, 8, 4, 8, 2, 2, 9],
                label: 'Order',
                borderWidth: 0,
                fill: true,
            }, {
                data: [6, 2, 9, 3, 8, 2, 1],
                label: 'New client',
                borderWidth: 1,
                fill: true,
            }];
        this.lineChartLabels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July'];
        /*
        * Full width Chart Options
        */
        this.lineChartOptions = {
            responsive: true,
            maintainAspectRatio: false,
            legend: {
                display: false,
                position: 'bottom'
            },
            scales: {
                xAxes: [{
                        display: false,
                        gridLines: {
                            color: 'rgba(0,0,0,0.02)',
                            zeroLineColor: 'rgba(0,0,0,0.02)'
                        }
                    }],
                yAxes: [{
                        display: false,
                        gridLines: {
                            color: 'rgba(0,0,0,0.02)',
                            zeroLineColor: 'rgba(0,0,0,0.02)'
                        },
                        ticks: {
                            beginAtZero: true,
                            suggestedMax: 9,
                        }
                    }]
            }
        };
        this.lineChartColors = [];
        this.lineChartLegend = false;
        this.lineChartType = 'line';
        // Chart grid options
        this.doughnutChartColors1 = [{
                backgroundColor: ['#fff', 'rgba(0, 0, 0, .24)',]
            }];
        this.doughnutChartColors2 = [{
                backgroundColor: ['rgba(0, 0, 0, .5)', 'rgba(0, 0, 0, .15)',]
            }];
        this.total1 = 500;
        this.data1 = 200;
        this.doughnutChartData1 = [this.data1, (this.total1 - this.data1)];
        this.total2 = 600;
        this.data2 = 400;
        this.doughnutChartData2 = [this.data2, (this.total2 - this.data2)];
        this.doughnutLabels = ['Spent', 'Remaining'];
        this.doughnutChartType = 'doughnut';
        this.doughnutOptions = {
            cutoutPercentage: 85,
            responsive: true,
            legend: {
                display: false,
                position: 'bottom'
            },
            elements: {
                arc: {
                    borderWidth: 0,
                }
            },
            tooltips: {
                enabled: true
            }
        };
        this.photos = [{
                name: 'Photo 1',
                url: 'assets/images/sq-15.jpg'
            }, {
                name: 'Photo 2',
                url: 'assets/images/sq-8.jpg'
            }, {
                name: 'Photo 3',
                url: 'assets/images/sq-9.jpg'
            }, {
                name: 'Photo 4',
                url: 'assets/images/sq-10.jpg'
            }, {
                name: 'Photo 5',
                url: 'assets/images/sq-11.jpg'
            }, {
                name: 'Photo 6',
                url: 'assets/images/sq-12.jpg'
            }];
        this.tickets = [{
                img: 'assets/images/face-1.jpg',
                name: 'Mike Dake',
                text: 'Excerpt pipe is used.',
                date: new Date('07/12/2017'),
                isOpen: true
            }, {
                img: 'assets/images/face-5.jpg',
                name: 'Jhone Doe',
                text: 'My dashboard is not working.',
                date: new Date('07/7/2017'),
                isOpen: false
            }, {
                img: 'assets/images/face-3.jpg',
                name: 'Jhonson lee',
                text: 'Fix stock issue',
                date: new Date('04/10/2017'),
                isOpen: false
            }, {
                img: 'assets/images/face-4.jpg',
                name: 'Mikie Jyni',
                text: 'Renew my subscription.',
                date: new Date('07/7/2017'),
                isOpen: false
            }];
        // users
        this.users = [
            {
                "name": "Snow Benton",
                "membership": "Paid Member",
                "phone": "+1 (956) 486-2327",
                "photo": "assets/images/face-4.jpg",
                "address": "329 Dictum Court, Minnesota",
                "registered": "2016-07-09"
            },
            {
                "name": "Kay Sellers",
                "membership": "Paid Member",
                "phone": "+1 (929) 406-3172",
                "photo": "assets/images/face-2.jpg",
                "address": "893 Garden Place, American Samoa",
                "registered": "2017-02-16"
            }
        ];
        this.projects = [{
                name: 'User Story',
                user: 'Watson Joyce',
                progress: 100,
                leader: 'Snow Benton'
            }, {
                name: 'Design Data Model',
                user: 'Morris Adams',
                progress: 30,
                leader: 'Watson Joyce'
            }, {
                name: 'Develop CR Algorithm',
                user: 'Jhone Doe',
                progress: 70,
                leader: 'Ada Kidd'
            }, {
                name: 'Payment Module',
                user: 'Ada Kidd',
                progress: 50,
                leader: 'Snow Benton'
            }, {
                name: 'Discount Module',
                user: 'Workman Floyd',
                progress: 50,
                leader: 'Robert Middleton'
            }];
        //varabiles
        this.totalLoan = 0;
        this.totalLoanPiad = 0;
        this.assestCount = 0;
        this.checkin = "00:00";
        this.checkout = "00:00";
        this.vacationBalance = 0;
    }
    ngOnInit() {
        this.themeService.onThemeChange.subscribe(activeTheme => {
            this.setChartColor(activeTheme);
        });
        this.setChartColor(this.themeService.activatedTheme);
        this.loadData();
    }
    loadData() {
        this.EssPortalService.getLoansInfo(this.authService.logginEmployeeId()).subscribe(result => {
            let data;
            data = result;
            this.totalLoan = data.loanSum.loan;
            this.totalLoanPiad = data.loanSum.loanpaid;
        });
        this.EssPortalService.getAssestInfo(this.authService.logginEmployeeId()).subscribe(result => {
            this.assestCount = result.length;
        }, error => console.log(error));
        var vm = {
            employeeID: this.authService.logginEmployeeId(),
            fromDate: this.EssPortalService.getCurrentDate(),
            toDate: this.EssPortalService.getCurrentDate()
        };
        this.EssPortalService.getAttendeesInfo(vm).subscribe(result => {
            let data;
            data = result;
            var attendees;
            attendees = data.attendeesToDay;
            if (attendees.length > 0) {
                this.checkin = attendees.filter(x => x.type.toUpperCase() == 'CHECKIN')[0].time;
                this.checkout = attendees.filter(x => x.type.toUpperCase() == 'CHECKOUT')[0].time;
            }
        }, error => console.log(error));
        this.EssPortalService.getVacationBalanceInfo(vm).subscribe(result => {
            this.vacationBalance = result[0].Balance;
        }, error => console.log(error));
    }
    setChartColor(theme) {
        console.log(theme);
        this.lineChartColors = [{
                backgroundColor: tinyColor(theme.baseColor).setAlpha(.6),
                borderColor: 'rgba(0,0,0,0)',
                pointBackgroundColor: tinyColor(theme.baseColor).setAlpha(.4),
                pointBorderColor: 'rgba(0, 0, 0, 0)',
                pointHoverBackgroundColor: theme.baseColor,
                pointHoverBorderColor: theme.baseColor
            }, {
                backgroundColor: 'rgba(0, 0, 0, .08)',
                borderColor: 'rgba(0,0,0,0)',
                pointBackgroundColor: 'rgba(0, 0, 0, 0.06)',
                pointBorderColor: 'rgba(0, 0, 0, 0)',
                pointHoverBackgroundColor: 'rgba(0, 0, 0, 0.1)',
                pointHoverBorderColor: 'rgba(0, 0, 0, 0)'
            }];
    }
};
DefaultDashboardComponent = __decorate([
    Component({
        selector: 'app-default-dashboard',
        templateUrl: './default-dashboard.component.html',
        styleUrls: ['./default-dashboard.component.scss'],
        animations: egretAnimations
    }),
    __metadata("design:paramtypes", [ThemeService,
        DashBoardService,
        EssPortalService,
        AuthService])
], DefaultDashboardComponent);
export { DefaultDashboardComponent };
//# sourceMappingURL=default-dashboard.component.js.map
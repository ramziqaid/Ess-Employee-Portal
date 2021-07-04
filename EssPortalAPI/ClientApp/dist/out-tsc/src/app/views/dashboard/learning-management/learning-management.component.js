var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
let LearningManagementComponent = class LearningManagementComponent {
    constructor() {
        this.welcomeProgressChart = {
            series: [76],
            chartOptions: {
                chart: {
                    type: 'radialBar',
                    offsetY: -20,
                    sparkline: {
                        enabled: true,
                    },
                },
                grid: {
                    padding: {
                        left: 0,
                        right: 0,
                        bottom: 10,
                    },
                },
                plotOptions: {
                    radialBar: {
                        startAngle: -90,
                        endAngle: 90,
                        offsetY: 0,
                        hollow: {
                            margin: 0,
                            size: '60%',
                        },
                        dataLabels: {
                            showOn: 'always',
                            name: {
                                show: true,
                                fontSize: '13px',
                                fontWeight: '600',
                                offsetY: -5,
                                color: '#828D99',
                            },
                            value: {
                                color: '#055959',
                                fontSize: '24px',
                                fontWeight: '600',
                                offsetY: -40,
                                show: true,
                            },
                        },
                        track: {
                            background: '#eee',
                            strokeWidth: '100%',
                        },
                    },
                },
                colors: ['#0081FF', '#eee'],
                stroke: {
                    lineCap: 'round',
                },
                labels: ['Progress'],
                responsive: [
                    {
                        breakpoint: 767,
                        options: {
                            chart: {
                                offsetX: 0,
                                offsetY: 0,
                            },
                        },
                    },
                ],
            },
        };
        this.studyChart = {
            series: [
                {
                    name: 'Angular',
                    data: [50, 50, 80, 80, 80, 60, 70],
                    type: 'bar',
                    itemStyle: {
                        barBorderRadius: [0, 0, 10, 10],
                    },
                    stack: 'one',
                },
                {
                    name: 'React',
                    data: [70, 80, 90, 100, 70, 80, 65],
                    type: 'bar',
                    stack: 'one',
                },
                {
                    name: 'Javascript',
                    data: [65, 80, 70, 100, 90, 70, 55],
                    type: 'bar',
                    itemStyle: {
                        barBorderRadius: [10, 10, 0, 0],
                    },
                    stack: 'one',
                },
            ],
            chartOptions: {
                chart: {
                    type: 'bar',
                    height: 300,
                    stacked: true,
                    toolbar: {
                        show: false,
                    },
                },
                legend: {
                    position: 'top',
                    horizontalAlign: 'left',
                    offsetX: -35,
                    itemMargin: {
                        horizontal: 10,
                    },
                    markers: {
                        width: 10,
                        height: 10,
                        radius: 40
                    }
                },
                plotOptions: {
                    bar: {
                        horizontal: false,
                        columnWidth: '20px',
                    },
                },
                dataLabels: {
                    enabled: false,
                },
                colors: ['#0081ff', '#e95455', '#e97d23'],
                xaxis: {
                    axisBorder: {
                        show: false,
                    },
                    categories: ['Sat', 'Sun', 'Mon', 'Tue', 'Wed', 'Thur'],
                },
                yaxis: {
                    show: false,
                },
                grid: {
                    show: false,
                },
            },
        };
        this.courses = [
            {
                icon: 'assets/images/logos/angular.png',
                date: new Date('20 May, 2020'),
                name: 'Angular Beyond The Basics',
                progress: 90
            },
            {
                icon: 'assets/images/logos/react.png',
                date: new Date('10 June, 2020'),
                name: 'React Development Course',
                progress: 60
            },
            {
                icon: 'assets/images/logos/vue.png',
                date: new Date('20 July, 2020'),
                name: 'Vue for busy developers',
                progress: 50
            },
            {
                icon: 'assets/images/logos/sass.png',
                date: new Date('20 July, 2020'),
                name: 'Complete SASS Course',
                progress: 100
            },
            {
                icon: 'assets/images/logos/bootstrap.png',
                date: new Date('20 July, 2020'),
                name: 'Bootstrap for everyone',
                progress: 100
            }
        ];
        this.results = [
            {
                name: 'React',
                color: 'primary',
                date: '24 March',
                completed: 60,
            },
            {
                name: 'Angular',
                color: 'accent',
                date: '04 Feb',
                completed: 20,
            },
            {
                name: 'Vue',
                color: 'warn',
                date: '02 Feb',
                completed: 10,
            },
            {
                name: 'CSS',
                color: 'primary',
                date: '02 Feb',
                completed: 10,
            },
            {
                name: 'HTML',
                color: 'primary',
                date: '02 Jan',
                completed: 96,
            },
        ];
        this.reminders = [
            {
                title: 'Data structure test',
                date: '23 December 2019',
                icon: 'view_week'
            },
            {
                title: 'Design pattern test',
                date: '24 December 2019',
                icon: 'library_books'
            },
            {
                title: 'Algorithm test',
                date: '24 December 2019',
                icon: 'games'
            },
            {
                title: 'Code organizing test',
                date: '27 December 2019',
                icon: 'library_books'
            }
        ];
    }
    ngOnInit() { }
};
LearningManagementComponent = __decorate([
    Component({
        selector: 'app-learning-management',
        templateUrl: './learning-management.component.html',
        styleUrls: ['./learning-management.component.scss'],
    }),
    __metadata("design:paramtypes", [])
], LearningManagementComponent);
export { LearningManagementComponent };
//# sourceMappingURL=learning-management.component.js.map
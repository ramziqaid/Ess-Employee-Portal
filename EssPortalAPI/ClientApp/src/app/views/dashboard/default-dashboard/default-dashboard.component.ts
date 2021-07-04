import { EssPortalService } from './../../../core/services/EssPortal.service';
import { AuthService } from 'app/core/services';
import { DashBoardService } from './../Services/DashBoard.service';
import { Component, OnInit } from '@angular/core';
import { egretAnimations } from 'app/shared/animations/egret-animations';
import { ThemeService } from 'app/shared/services/theme.service'; 
import tinyColor from 'tinycolor2';


@Component({
  selector: 'app-default-dashboard',
  templateUrl: './default-dashboard.component.html',
  styleUrls: ['./default-dashboard.component.scss'],
  animations: egretAnimations
})
export class DefaultDashboardComponent implements OnInit {

  lineChartSteppedData: Array <any> = [{
    data: [1, 8, 4, 8, 2, 2, 9],
    label: 'Order',
    borderWidth: 0,
    fill: true,
    // steppedLine: true
  }, {
    data: [6, 2, 9, 3, 8, 2, 1],
    label: 'New client',
    borderWidth: 1,
    fill: true,
    // steppedLine: true
  }];
  public lineChartLabels: Array<any> = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July'];
  /*
  * Full width Chart Options
  */
  public lineChartOptions: any = {
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

  public lineChartColors: Array<any> = [];
  public lineChartLegend: boolean = false;
  public lineChartType: string = 'line';
  

  // Chart grid options
  doughnutChartColors1: any[] = [{
    backgroundColor: ['#fff', 'rgba(0, 0, 0, .24)',]
  }];
    doughnutChartColors2: any[] = [{
    backgroundColor: ['rgba(0, 0, 0, .5)', 'rgba(0, 0, 0, .15)',]
  }];
  total1: number = 500;
  data1: number = 200;
  doughnutChartData1: number[] = [this.data1, (this.total1 - this.data1)];

  total2: number = 600;
  data2: number = 400;
  doughnutChartData2: number[] = [this.data2, (this.total2 - this.data2)];
  doughnutLabels = ['Spent', 'Remaining']
  doughnutChartType = 'doughnut';
  doughnutOptions: any = {
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

  photos = [{
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
  }]
  tickets = [{
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
  }]
  // users
  users = [
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
  ]

  projects = [{
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
  }]

  //varabiles
 totalLoan:number=0;
 totalLoanPiad:number=0;
 assestCount:number=0;
checkin:string="00:00";
checkout:string="00:00";
vacationBalance:number=0;

  constructor(
    private themeService: ThemeService,
    private dashservice:DashBoardService,
    private EssPortalService: EssPortalService,
    private authService: AuthService
  ) { }

  ngOnInit() {
    this.themeService.onThemeChange.subscribe(activeTheme => {
      this.setChartColor(activeTheme);
    });
    this.setChartColor(this.themeService.activatedTheme);  
    
    this.loadData();
  }

  private loadData(){

    this.EssPortalService.getLoansInfo(this.authService.logginEmployeeId()).subscribe(
      result => {
        let data; 
        data = result; 
       this.totalLoan= data.loanSum.loan;
       this.totalLoanPiad= data.loanSum.loanpaid; 
      },
      //error => console.log(error)
    );

    this.EssPortalService.getAssestInfo(this.authService.logginEmployeeId()).subscribe(
      result => {  
       this.assestCount= result.length; 
      },
      error => console.log(error)
    );
    var vm:any={
      employeeID:this.authService.logginEmployeeId(),
      fromDate:this.EssPortalService.getCurrentDate(),
      toDate:this.EssPortalService.getCurrentDate()
      };
    this.EssPortalService.getAttendeesInfo(vm).subscribe(
      result => {
        let data; 
        data = result;  
        var  attendees:any[];
       attendees= data.attendeesToDay; 
      
       if(attendees.length>0){
        this.checkin= attendees.filter(x => x.type.toUpperCase() == 'CHECKIN')[0].time  ;
        this.checkout= attendees.filter(x => x.type.toUpperCase() == 'CHECKOUT')[0].time  ; 
       }
      },
      error => console.log(error)
    );
  
    this.EssPortalService.getVacationBalanceInfo(vm).subscribe(
      result => {   
       this.vacationBalance= result[0].Balance; 
      },
      error => console.log(error)
    );


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
    }]    
  }

}

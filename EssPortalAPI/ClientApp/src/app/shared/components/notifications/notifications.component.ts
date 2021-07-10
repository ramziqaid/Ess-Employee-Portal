import { NotificationService } from './../../../core/services/Notification.service';
import { Component, OnInit, ViewChild, Input, OnDestroy } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { Router, NavigationEnd } from '@angular/router';
import { AuthService } from 'app/core/services/auth.service'; 
import { BehaviorSubject, Observable, of } from 'rxjs';

@Component({
  selector: 'app-notifications', 
  templateUrl: './notifications.component.html',
  styles:[`
  .mat-nav-list .mat-list-item {
    cursor: default !important; 
      } 
        `]
})
export class NotificationsComponent implements OnInit  {
  @Input() notificPanel;
 
  NotificationArray01$: Observable<any[]>;
  NotificationArray02$: Observable<any[]>;

  // Dummy notifications
  notifications = [{
    message: 'New contact added',
    icon: 'assignment_ind',
    time: '1 min ago',
    route: '/inbox',
    color: 'primary'
  }, {
    message: 'New message',
    icon: 'chat',
    time: '4 min ago',
    route: '/chat',
    color: 'accent'
  }, {
    message: 'Server rebooted',
    icon: 'settings_backup_restore',
    time: '12 min ago',
    route: '/charts',
    color: 'warn'
  }]
 

  
  constructor(private router: Router, 
    private authService: AuthService,
    private notService: NotificationService) {       
    }

  ngOnInit() {
    this.router.events.subscribe((routeChange) => {
        if (routeChange instanceof NavigationEnd) {
          this.notificPanel.close();
        }
    });
   
    this.loadAllNotification();
  }

   count01: number=0;
   count02: number=0;
   count03: number=0;

  private loadAllNotification() {      

    this.NotificationArray01$=this.notService.getNotificationNOT01(); 
    this.NotificationArray01$.subscribe(
      result => {          
        this.count01=result.length;  
        this.notService.setNotificationCount(this.count01+this.count02+this.count03);   
      }
    );

    this.NotificationArray02$=this.notService.getNotificationNOT02(); 
    this.NotificationArray02$.subscribe(
      result => {          
        this.count02=result.length;  
        this.notService.setNotificationCount(this.count01+this.count02+this.count03);    
      }
    );    

  }
 
  hideNotification(Id:number){ 
    this.notService.hideNotification(Id).subscribe(
      result => {     
        this.notService.setNotificationCount( this.notService.getNotificationCount());
      },       
      );      
  }
  
  
  clearAll(e) {   
    this.notService.hideAllNotification().subscribe(
      result => {     
        e.preventDefault();
        this.NotificationArray01$= of(<any>[]);
        this.NotificationArray02$= of(<any>[]);
        this.notService.setNotificationCount(0);  
      },       
      );   
    
  }

  
}

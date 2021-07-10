 
import { ApiService } from './api.service';
import { Injectable, OnDestroy } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { AuthService } from './auth.service';
import { Observable, of, Subject, timer } from 'rxjs';
import { takeUntil, switchMap, catchError, retry, share, tap, shareReplay } from 'rxjs/operators';
@Injectable()

export class NotificationService implements OnDestroy  {

  NotificationCount = new BehaviorSubject<number>(0);
  private tempCount:number=0;
  private NotificationArray01$: Observable<any[]>;
  private NotificationArray02$: Observable<any[]>;

  private stopPolling = new Subject();
  private timerValue=1000 * 30;

  constructor(
    private apiService: ApiService,
    private _authService: AuthService) 
    { 
      const UserId = this._authService.logginUserID();

      this.NotificationArray01$ = timer(1, this.timerValue).pipe(
        switchMap(() => this.apiService.get(`Notification/GetNotification/${UserId}/${"NOT01"}`)),
        retry(),
        share(),
        takeUntil(this.stopPolling)
      );
  
      this.NotificationArray02$ = timer(1, this.timerValue).pipe(
        switchMap(() => this.apiService.get(`Notification/GetNotification/${UserId}/${"NOT02"}`)),
        retry(),
        share(),
        takeUntil(this.stopPolling)
      );
    }

  
  getNotificationNOT01(): Observable<any[]> {    
    return this.NotificationArray01$.pipe(
      //tap(() => console.log('data sent to subscriber'))
    );
  }

  getNotificationNOT02(): Observable<any[]> {
    return this.NotificationArray02$.pipe();
  }
 
  setNotificationCount(n:number){
  this.NotificationCount.next(n);
  this.tempCount=n;
  }
 
  getNotificationCount():number{
   return this.tempCount;
    }


  hideNotification(Id:number){ 
    return this.apiService.post(`Notification/HideNotification/${Id}`).pipe(
      tap(()=>{ 
        this.tempCount=this.tempCount-1; 
      }    
      )
      ); 
  }

  hideAllNotification(){ 
    return this.apiService.post(`Notification/HideAllNotification/${this._authService.logginUserID()}`).pipe(
      tap(()=>{   
      }    
      )
      ); 
  }

  ngOnDestroy(){
      this.stopPolling.next();
  }
}

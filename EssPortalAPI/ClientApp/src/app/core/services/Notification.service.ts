import { ApiService } from './api.service';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Notification } from '../../shared/_models';
import { AuthService } from './auth.service';
@Injectable()
export class NotificationService {

  constructor(private apiService: ApiService,
    private _authService: AuthService) { }

  getNotification(): Observable<Notification[]> {
    const UserId = this._authService.logginUserID();
    return this.apiService.get(`Notification/GetNotification/${UserId}`).pipe();
  }

}

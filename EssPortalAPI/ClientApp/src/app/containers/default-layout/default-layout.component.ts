import { AlertifyService } from './../../core/services/Alertify.service';
import { NotificationService } from './../../core/services/Notification.service';
import { Component, OnDestroy, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { navItems } from '../../_nav';


@Component({
  selector: 'app-dashboard',
  templateUrl: './default-layout.component.html'
})
export class DefaultLayoutComponent implements OnDestroy {
  public navItems = navItems;
  public sidebarMinimized = true;
  private changes: MutationObserver;
  public element: HTMLElement;
  NotificationCount: Number;
  NotificationArray: any[];

  constructor(private notService: NotificationService,
    private alertify: AlertifyService,
    @Inject(DOCUMENT) _document?: any) {

    this.changes = new MutationObserver((mutations) => {
      this.sidebarMinimized = _document.body.classList.contains('sidebar-minimized');
    });
    this.element = _document.body;
    this.changes.observe(<Element>this.element, {
      attributes: true,
      attributeFilter: ['class']
    });

    this.loadNotification();
  }

  private loadNotification() {

    this.notService.getNotification().subscribe(
      result => {
        this.NotificationArray = result;
        if (this.NotificationArray.length > 0) {
          this.NotificationCount = this.NotificationArray[0].notiCount;
          this.alertify.warning(this.NotificationArray[0].messageAR);
        }
      }
    );

  }

  ngOnDestroy(): void {
    this.changes.disconnect();
  }
}

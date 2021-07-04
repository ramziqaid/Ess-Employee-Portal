var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { MediaObserver } from "@angular/flex-layout";
import { MatDialog } from '@angular/material/dialog';
import { MatSidenav } from '@angular/material/sidenav';
import { TranslateService } from '@ngx-translate/core';
import { AppInboxService } from './app-inbox.service';
import { MailComposeComponent } from './mail-compose.component';
let AppInboxComponent = class AppInboxComponent {
    constructor(router, mediaObserver, composeDialog, inboxService, translate) {
        this.router = router;
        this.mediaObserver = mediaObserver;
        this.composeDialog = composeDialog;
        this.inboxService = inboxService;
        this.translate = translate;
        this.isSidenavOpen = true;
        this.selectToggleFlag = false;
    }
    ngOnInit() {
        this.inboxSideNavInit();
        this.messages = this.inboxService.messages;
    }
    ngOnDestroy() {
        if (this.screenSizeWatcher) {
            this.screenSizeWatcher.unsubscribe();
        }
    }
    openComposeDialog() {
        const dialogRef = this.composeDialog.open(MailComposeComponent);
        dialogRef.afterClosed().subscribe(result => { });
    }
    selectToggleAll() {
        this.selectToggleFlag = !this.selectToggleFlag;
        this.messages.forEach((msg) => { msg.selected = this.selectToggleFlag; });
    }
    stopProp(e) {
        e.stopPropagation();
    }
    updateSidenav() {
        let self = this;
        setTimeout(() => {
            self.isSidenavOpen = !self.isMobile;
            self.sideNav.mode = self.isMobile ? 'over' : 'side';
        });
    }
    inboxSideNavInit() {
        this.isMobile = this.mediaObserver.isActive('xs') || this.mediaObserver.isActive('sm');
        this.updateSidenav();
        this.screenSizeWatcher = this.mediaObserver.media$.subscribe((change) => {
            this.isMobile = (change.mqAlias == 'xs') || (change.mqAlias == 'sm');
            this.updateSidenav();
        });
    }
};
__decorate([
    ViewChild(MatSidenav),
    __metadata("design:type", MatSidenav)
], AppInboxComponent.prototype, "sideNav", void 0);
AppInboxComponent = __decorate([
    Component({
        selector: 'app-inbox',
        templateUrl: './app-inbox.component.html',
        styleUrls: ['./app-inbox.component.css'],
        providers: [AppInboxService]
    }),
    __metadata("design:paramtypes", [Router,
        MediaObserver,
        MatDialog,
        AppInboxService,
        TranslateService])
], AppInboxComponent);
export { AppInboxComponent };
//# sourceMappingURL=app-inbox.component.js.map
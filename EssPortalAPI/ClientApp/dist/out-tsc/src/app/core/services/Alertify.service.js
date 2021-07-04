var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
let AlertifyService = class AlertifyService {
    constructor(translate) {
        this.translate = translate;
    }
    confirm(message, okCallback) {
        var title;
        this.translate.get("TITLE_CONFIRM").subscribe((text) => { title = text; });
        var oktitle;
        this.translate.get("OK").subscribe((text) => { oktitle = text; });
        var canceltitle;
        this.translate.get("CANCEL").subscribe((text) => { canceltitle = text; });
        this.translate.get(message).subscribe((text) => {
            alertify.defaults.theme.ok = "btn mat-flat-button confirm-primary ";
            alertify.defaults.theme.cancel = "btn mat-flat-button confirm-default";
            alertify.defaults.theme.input = "form-control";
            alertify.confirm(text, function (e) {
                if (e) {
                    okCallback();
                }
                else {
                }
            }).set('closable', false)
                .setHeader(title)
                .set('labels', { ok: oktitle, cancel: canceltitle });
        }, error => {
            alertify.confirm(message, function (e) {
                if (e) {
                    okCallback();
                }
                else {
                }
            }).set('closable', false)
                .setHeader(title)
                .set('labels', { ok: oktitle, cancel: canceltitle });
        });
    }
    success(message) {
        alertify.set('notifier', 'position', 'top-center');
        //alertify.success(message);
        this.translate.get(message).subscribe((text) => {
            alertify.success(text);
        }, error => {
            alertify.success(message);
        });
    }
    error(message) {
        alertify.set('notifier', 'position', 'top-center');
        let parametres = message.split('#');
        if (parametres.length > 0) {
            let message2 = "";
            message = parametres[0];
            parametres = parametres.splice(1, parametres.length - 1);
            this.translate.get(message, parametres).subscribe((res) => {
                message2 += res;
                alertify.error(message2);
            });
        }
        else {
            this.translate.get(message).subscribe((text) => {
                alertify.error(text);
            }, error => {
                alertify.error(message);
            });
        }
    }
    warning(message) {
        alertify.set('notifier', 'position', 'top-center');
        this.translate.get(message).subscribe((text) => {
            alertify.warning(text);
        }, error => {
            alertify.warning(message);
        });
    }
    message(message) {
        alertify.set('notifier', 'position', 'top-center');
        //alertify.message(message);
        this.translate.get(message).subscribe((text) => {
            alertify.message(text);
        }, error => {
            alertify.message(message);
        });
    }
    LoadTextNotififBar(message) {
        this.translate.get(message).subscribe((text) => {
            this.msg = text;
        }, error => {
            return undefined;
        });
    }
};
AlertifyService = __decorate([
    Injectable({
        providedIn: 'root'
    }),
    __metadata("design:paramtypes", [TranslateService])
], AlertifyService);
export { AlertifyService };
//# sourceMappingURL=Alertify.service.js.map
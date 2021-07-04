import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { title } from 'node:process';
import { Observable } from 'rxjs';
declare let alertify: any;
@Injectable({
  providedIn: 'root'
})
export class AlertifyService {

  msg:string;
  constructor(private translate: TranslateService) {
    
   }

   confirm(message: string, okCallback: () => any) {

   var title;
     this.translate.get("TITLE_CONFIRM").subscribe( (text: string) => {title=text;} ); 

    var oktitle;
     this.translate.get("OK").subscribe( (text: string) => {oktitle=text;} ); 
 
    var canceltitle;
      this.translate.get("CANCEL").subscribe( (text: string) => {canceltitle=text;} ); 
     
 
    this.translate.get(message).subscribe( (text: string) => { 
     
      alertify.defaults.theme.ok = "btn mat-flat-button confirm-primary ";
      alertify.defaults.theme.cancel = "btn mat-flat-button confirm-default";
      alertify.defaults.theme.input = "form-control";
      alertify.confirm(text, function (e) {
        if (e) {
          okCallback();
        } else {
        }
      }).set('closable', false)
      .setHeader(title)
      .set('labels', {ok:oktitle, cancel:canceltitle});

    }, error => {
      alertify.confirm(message, function (e) {
        if (e) {
          okCallback();
        } else {
        }
      }).set('closable', false)
      .setHeader(title)
      .set('labels', {ok:oktitle, cancel:canceltitle});

    });
    
  
  }


  success(message: string) {
    alertify.set('notifier', 'position', 'top-center');
    //alertify.success(message);
    this.translate.get(message).subscribe( (text: string) => { 
      alertify.success(text);
    }, error => {
      alertify.success(message);
    }); 
  }

  error(message: string) {
     alertify.set('notifier', 'position', 'top-center'); 
          
      let parametres = message.split('#');
      if(parametres.length>0){
        let message2:string = "";
        message=parametres[0];
        parametres=parametres.splice(1,parametres.length-1);
        this.translate.get(message, parametres).subscribe((res:string) => {
          message2 += res;
          alertify.error(message2);
      });
      }else{
        this.translate.get(message).subscribe( (text: string) => { 
            alertify.error(text);
          }, error => {
            alertify.error(message);
          }); 
      }

  }
 
  warning(message: string) {
    alertify.set('notifier', 'position', 'top-center');
    this.translate.get(message).subscribe( (text: string) => { 
      alertify.warning(text);
    }, error => {
      alertify.warning(message);
    });   
  }

  message(message: string) {
    alertify.set('notifier', 'position', 'top-center');
    //alertify.message(message);
    this.translate.get(message).subscribe( (text: string) => { 
      alertify.message(text);
    }, error => {
      alertify.message(message);
    }); 
  }

  private LoadTextNotififBar(message: string) {
    this.translate.get(message).subscribe( (text: string) => {
      this.msg=text;  
    }, error => {
      return undefined;
    }); 
  }

}

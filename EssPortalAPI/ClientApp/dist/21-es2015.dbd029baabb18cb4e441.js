(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{EvD3:function(t,e,c){"use strict";c.r(e),c.d(e,"AppDialogsModule",function(){return M});var n=c("SVse"),i=c("iInd"),o=c("s7LF"),a=c("Dxy4"),r=c("PDjf"),l=c("e6WT"),d=c("SqCe"),s=c("PCNd"),g=c("3kSh"),h=c("8Y7J"),p=c("BSbQ"),m=c("Q2Ze");let u=(()=>{class t{constructor(t,e){this.confirmService=t,this.cdr=e,this.title="Confirm dialog",this.text="Just click a button!"}ngOnInit(){}openDialog(){this.confirmService.confirm({title:this.title,message:this.text}).subscribe(t=>{this.selectedOption=t,this.cdr.markForCheck()})}}return t.\u0275fac=function(e){return new(e||t)(h.bc(g.a),h.bc(h.i))},t.\u0275cmp=h.Vb({type:t,selectors:[["app-confirm-dialog"]],decls:17,vars:3,consts:[[1,"p-0"],[1,""],[1,"card-title-text"],[1,"pb-16"],[1,"full-width"],["matInput","","name","title","placeholder","Title",3,"ngModel","ngModelChange"],["matInput","","name","text","placeholder","Text",3,"ngModel","ngModelChange"],["mat-raised-button","","color","primary",1,"mb-16",3,"click"]],template:function(t,e){1&t&&(h.hc(0,"mat-card",0),h.hc(1,"mat-card-title",1),h.hc(2,"div",2),h.hc(3,"span"),h.fd(4,"Confirm Dialog"),h.gc(),h.gc(),h.cc(5,"mat-divider"),h.gc(),h.hc(6,"mat-card-content"),h.hc(7,"div",3),h.hc(8,"mat-form-field",4),h.hc(9,"input",5),h.pc("ngModelChange",function(t){return e.title=t}),h.gc(),h.gc(),h.gc(),h.hc(10,"div",3),h.hc(11,"mat-form-field",4),h.hc(12,"input",6),h.pc("ngModelChange",function(t){return e.text=t}),h.gc(),h.gc(),h.gc(),h.hc(13,"button",7),h.pc("click",function(){return e.openDialog()}),h.fd(14,"Open dialog"),h.gc(),h.hc(15,"p"),h.fd(16),h.gc(),h.gc(),h.gc()),2&t&&(h.Nb(9),h.Bc("ngModel",e.title),h.Nb(3),h.Bc("ngModel",e.text),h.Nb(4),h.hd("You selected: ",e.selectedOption,""))},directives:[r.a,r.i,p.a,r.d,m.c,l.b,o.c,o.r,o.u,a.b],styles:[""]}),t})();var f=c("3sEA");const b=[{path:"",children:[{path:"confirm",component:u,data:{title:"Confirm",breadcrumb:"CONFIRM"}},{path:"loader",component:(()=>{class t{constructor(t){this.loader=t,this.loadingTime=3e3,this.title="Please wait"}ngOnInit(){}openLoader(){this.loader.open(this.title),setTimeout(()=>{this.loader.close()},this.loadingTime)}}return t.\u0275fac=function(e){return new(e||t)(h.bc(f.a))},t.\u0275cmp=h.Vb({type:t,selectors:[["app-loader-dialog"]],decls:15,vars:2,consts:[[1,"p-0"],[1,""],[1,"card-title-text"],[1,"pb-16"],[1,"full-width"],["matInput","","name","title","placeholder","Loader text",3,"ngModel","ngModelChange"],["matInput","","name","time","type","number","placeholder","Loading time (ms)",3,"ngModel","ngModelChange"],["mat-raised-button","","color","primary",1,"",3,"click"]],template:function(t,e){1&t&&(h.hc(0,"mat-card",0),h.hc(1,"mat-card-title",1),h.hc(2,"div",2),h.hc(3,"span"),h.fd(4,"Loader Dialog"),h.gc(),h.gc(),h.cc(5,"mat-divider"),h.gc(),h.hc(6,"mat-card-content"),h.hc(7,"div",3),h.hc(8,"mat-form-field",4),h.hc(9,"input",5),h.pc("ngModelChange",function(t){return e.title=t}),h.gc(),h.gc(),h.gc(),h.hc(10,"div",3),h.hc(11,"mat-form-field",4),h.hc(12,"input",6),h.pc("ngModelChange",function(t){return e.loadingTime=t}),h.gc(),h.gc(),h.gc(),h.hc(13,"button",7),h.pc("click",function(){return e.openLoader()}),h.fd(14,"Show loader"),h.gc(),h.gc(),h.gc()),2&t&&(h.Nb(9),h.Bc("ngModel",e.title),h.Nb(3),h.Bc("ngModel",e.loadingTime))},directives:[r.a,r.i,p.a,r.d,m.c,l.b,o.c,o.r,o.u,o.w,a.b],styles:[""]}),t})(),data:{title:"Loader",breadcrumb:"LOADER"}}]}];let M=(()=>{class t{}return t.\u0275mod=h.Zb({type:t}),t.\u0275inj=h.Yb({factory:function(e){return new(e||t)},imports:[[n.c,o.l,l.c,r.g,a.c,d.e,s.a,i.k.forChild(b)]]}),t})()}}]);
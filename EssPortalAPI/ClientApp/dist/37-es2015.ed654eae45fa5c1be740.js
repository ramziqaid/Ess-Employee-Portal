(window.webpackJsonp=window.webpackJsonp||[]).push([[37],{VVaf:function(t,e,n){"use strict";n.r(e),n.d(e,"SessionsModule",function(){return R});var r=n("aLe/"),c=n("SVse"),o=n("s7LF"),s=n("iInd"),i=n("zMWy"),a=n("u9T3"),d=n("TSSN"),l=n("8Y7J");const u=function(){return["/dashboard/default"]};let g=(()=>{class t{constructor(){}ngOnInit(){this.h1Message="403",this.h2Message="Access Denied"}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=l.Vb({type:t,selectors:[["app-access-denied"]],decls:10,vars:7,consts:[["id","notfound"],[1,"notfound"],[1,"notfound-403"],[3,"routerLink"]],template:function(t,e){1&t&&(l.hc(0,"div",0),l.hc(1,"div",1),l.hc(2,"div",2),l.hc(3,"h1"),l.fd(4),l.gc(),l.gc(),l.hc(5,"h2"),l.fd(6),l.gc(),l.hc(7,"a",3),l.fd(8),l.uc(9,"translate"),l.gc(),l.gc(),l.gc()),2&t&&(l.Nb(4),l.gd(e.h1Message),l.Nb(2),l.gd(e.h2Message),l.Nb(1),l.Bc("routerLink",l.Gc(6,u)),l.Nb(1),l.gd(l.vc(9,4,"BACK_TO_DASHBOARD")))},directives:[s.j],pipes:[d.c],styles:["*[_ngcontent-%COMP%]{box-sizing:border-box}#notfound[_ngcontent-%COMP%]{position:relative;height:100vh}#notfound[_ngcontent-%COMP%]   .notfound[_ngcontent-%COMP%]{position:absolute;left:50%;top:40%;transform:translate(-50%,-50%)}.notfound[_ngcontent-%COMP%]{max-width:410px;width:100%;text-align:center}.notfound[_ngcontent-%COMP%]   .notfound-403[_ngcontent-%COMP%]{height:280px;position:relative;z-index:-1}.notfound[_ngcontent-%COMP%]   .notfound-403[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{font-size:230px;margin:0;font-weight:900;position:absolute;left:50%;transform:translateX(-50%);-webkit-text-fill-color:transparent}.notfound[_ngcontent-%COMP%]   .notfound-403[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%], .notfound[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-family:Montserrat,sans-serif;background:linear-gradient(180deg,#ff6ec4,#7873f5);-webkit-background-clip:text;background-size:cover;background-position:50%}.notfound[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{color:#000;font-size:40px;font-weight:700;text-transform:uppercase;margin-top:0;-webkit-text-fill-color:transparent}.notfound[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{font-family:Montserrat,sans-serif;font-size:14px;text-decoration:none;text-transform:uppercase;background:#de6262;background:linear-gradient(180deg,#ff6ec4,#7873f5);display:inline-block;padding:15px 30px;color:#fff;font-weight:700;box-shadow:0 4px 15px -5px #0046d5}@media only screen and (max-width:767px){.notfound[_ngcontent-%COMP%]   .notfound-404[_ngcontent-%COMP%]{height:142px}.notfound[_ngcontent-%COMP%]   .notfound-404[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{font-size:112px}}"]}),t})();var f=n("Dxy4"),h=n("BTe0"),m=n("PDjf"),p=n("Q2Ze"),b=n("e6WT"),v=n("VDRc");function w(t,e){1&t&&(l.hc(0,"small",17),l.fd(1," Email is required "),l.gc())}let x=(()=>{class t{constructor(){}ngOnInit(){}submitEmail(){this.submitButton.disabled=!0,this.progressBar.mode="indeterminate"}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=l.Vb({type:t,selectors:[["app-forgot-password"]],viewQuery:function(t,e){if(1&t&&(l.jd(h.a,!0),l.jd(f.b,!0)),2&t){let t;l.Pc(t=l.qc())&&(e.progressBar=t.first),l.Pc(t=l.qc())&&(e.submitButton=t.first)}},decls:24,vars:5,consts:[[1,"page-wrap","h-full","slate"],[1,"session-form-hold"],["mode","determinate",1,"session-progress"],[1,"text-center","pt-8","pb-16"],["width","60px","src","assets/images/logo.png","alt","",1,"mb-8"],[1,"text-muted","m-0"],[3,"ngSubmit"],["fpForm","ngForm"],[1,""],[1,"full-width"],["matInput","","name","email","required","","placeholder","Email","value","",3,"ngModel","ngModelChange"],["email","ngModel"],["class","form-error-msg",4,"ngIf"],["mat-raised-button","",1,"mat-primary","full-width","mb-16",3,"disabled"],[1,"text-center"],[1,"mat-primary","text-center","full-width",3,"routerLink"],["fxFlex",""],[1,"form-error-msg"]],template:function(t,e){if(1&t&&(l.hc(0,"div",0),l.hc(1,"div",1),l.cc(2,"mat-progress-bar",2),l.hc(3,"mat-card"),l.hc(4,"mat-card-content"),l.hc(5,"div",3),l.cc(6,"img",4),l.hc(7,"p",5),l.fd(8,"New password will be sent to your email address"),l.gc(),l.gc(),l.hc(9,"form",6,7),l.pc("ngSubmit",function(){return e.submitEmail()}),l.hc(11,"div",8),l.hc(12,"mat-form-field",9),l.hc(13,"input",10,11),l.pc("ngModelChange",function(t){return e.userEmail=t}),l.gc(),l.gc(),l.dd(15,w,2,0,"small",12),l.gc(),l.hc(16,"button",13),l.fd(17,"Submit"),l.gc(),l.hc(18,"div",14),l.hc(19,"a",15),l.fd(20,"Sign in"),l.gc(),l.cc(21,"span",16),l.hc(22,"a",15),l.fd(23,"Create a new account"),l.gc(),l.gc(),l.gc(),l.gc(),l.gc(),l.gc(),l.gc()),2&t){const t=l.Qc(10),n=l.Qc(14);l.Nb(13),l.Bc("ngModel",e.userEmail),l.Nb(2),l.Bc("ngIf",n.errors&&(n.dirty||n.touched)&&(null==n||null==n.errors?null:n.errors.required)),l.Nb(1),l.Bc("disabled",t.invalid),l.Nb(3),l.Bc("routerLink","/sessions/signin"),l.Nb(3),l.Bc("routerLink","/sessions/signup")}},directives:[h.a,m.a,m.d,o.D,o.s,o.t,p.c,b.b,o.c,o.z,o.r,o.u,c.q,f.b,s.j,v.b],styles:[""]}),t})();function y(t,e){1&t&&(l.hc(0,"small",17),l.fd(1," Password is required "),l.gc())}let M=(()=>{class t{constructor(){this.lockscreenData={password:""}}ngOnInit(){}unlock(){console.log(this.lockscreenData),this.submitButton.disabled=!0,this.progressBar.mode="indeterminate"}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=l.Vb({type:t,selectors:[["app-lockscreen"]],viewQuery:function(t,e){if(1&t&&(l.jd(h.a,!0),l.jd(f.b,!0)),2&t){let t;l.Pc(t=l.qc())&&(e.progressBar=t.first),l.Pc(t=l.qc())&&(e.submitButton=t.first)}},decls:23,vars:4,consts:[[1,"page-wrap","h-full","mat-bg-default"],[1,"session-form-hold","session-lockscreen"],["mode","determinate",1,"session-progress"],["fxFlex","column","fxFlexWrap","wrap"],["fxFlexWrap","wrap",1,"lockscreen-user"],["src","assets/images/face-3.jpg","alt","",1,"lockscreen-face"],[1,"m-0","font-normal"],[1,"text-muted"],[3,"ngSubmit"],["lockscreenForm","ngForm"],[1,""],[1,"full-width"],["type","password","name","password","required","","matInput","","placeholder","Password",3,"ngModel","ngModelChange"],["password","ngModel"],["class","form-error-msg",4,"ngIf"],["mat-raised-button","",1,"mat-primary","full-width","mb-8",3,"disabled"],["mat-raised-button","","color","accent",1,"mat-primary","full-width",3,"routerLink"],[1,"form-error-msg"]],template:function(t,e){if(1&t&&(l.hc(0,"div",0),l.hc(1,"div",1),l.cc(2,"mat-progress-bar",2),l.hc(3,"mat-card"),l.hc(4,"mat-card-content"),l.hc(5,"div",3),l.hc(6,"div",4),l.cc(7,"img",5),l.hc(8,"h5",6),l.fd(9,"John Doe"),l.gc(),l.hc(10,"small",7),l.fd(11,"Last seen 1 hour ago"),l.gc(),l.gc(),l.hc(12,"form",8,9),l.pc("ngSubmit",function(){return e.unlock()}),l.hc(14,"div",10),l.hc(15,"mat-form-field",11),l.hc(16,"input",12,13),l.pc("ngModelChange",function(t){return e.lockscreenData.password=t}),l.gc(),l.gc(),l.dd(18,y,2,0,"small",14),l.gc(),l.hc(19,"button",15),l.fd(20,"Unlock"),l.gc(),l.hc(21,"button",16),l.fd(22,"It's not me!"),l.gc(),l.gc(),l.gc(),l.gc(),l.gc(),l.gc(),l.gc()),2&t){const t=l.Qc(13),n=l.Qc(17);l.Nb(16),l.Bc("ngModel",e.lockscreenData.password),l.Nb(2),l.Bc("ngIf",n.errors&&(n.dirty||n.touched)&&(null==n||null==n.errors?null:n.errors.required)),l.Nb(1),l.Bc("disabled",t.invalid),l.Nb(2),l.Bc("routerLink","/sessions/signin")}},directives:[h.a,m.a,m.d,v.b,o.D,o.s,o.t,p.c,b.b,o.c,o.z,o.r,o.u,c.q,f.b,s.h],styles:[""]}),t})();var k=n("Tj54");const _=function(){return["/"]};let O=(()=>{class t{constructor(){}ngOnInit(){}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=l.Vb({type:t,selectors:[["app-not-found"]],decls:16,vars:5,consts:[[1,"d-flex","align-items-center","h-full","mat-bg-default"],[1,"app-error"],[1,"fix"],["color","warn",1,"error-icon"],[1,"error-text"],[1,"error-title"],[1,"error-subtitle"],[1,"error-actions"],["mat-raised-button","","color","primary",1,"mb-16","mr-8",3,"routerLink"],["mat-raised-button","","color","warn"]],template:function(t,e){1&t&&(l.hc(0,"div",0),l.hc(1,"div",1),l.hc(2,"div",2),l.hc(3,"mat-icon",3),l.fd(4,"error"),l.gc(),l.hc(5,"div",4),l.hc(6,"h1",5),l.fd(7,"404"),l.gc(),l.hc(8,"div",6),l.fd(9,"Page Not Found!"),l.gc(),l.gc(),l.gc(),l.hc(10,"div",7),l.hc(11,"button",8),l.fd(12),l.uc(13,"translate"),l.gc(),l.hc(14,"button",9),l.fd(15,"Report this Problem"),l.gc(),l.gc(),l.gc(),l.gc()),2&t&&(l.Nb(11),l.Bc("routerLink",l.Gc(4,_)),l.Nb(1),l.hd("",l.vc(13,2,"BACK_TO_DASHBOARD")," "))},directives:[k.a,f.b,s.h],pipes:[d.c],styles:[""]}),t})();const P=function(){return["/"]};let C=(()=>{class t{constructor(){}ngOnInit(){}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=l.Vb({type:t,selectors:[["app-error"]],decls:16,vars:5,consts:[[1,"page-wrap","h-full","mat-bg-default"],[1,"app-error"],[1,"fix"],["color","warn",1,"error-icon"],[1,"error-text"],[1,"error-title"],[1,"error-subtitle"],[1,"error-actions"],["mat-raised-button","","color","primary",1,"mb-16","mr-8",3,"routerLink"],["mat-raised-button","","color","warn"]],template:function(t,e){1&t&&(l.hc(0,"div",0),l.hc(1,"div",1),l.hc(2,"div",2),l.hc(3,"mat-icon",3),l.fd(4,"warning"),l.gc(),l.hc(5,"div",4),l.hc(6,"h1",5),l.fd(7,"500"),l.gc(),l.hc(8,"div",6),l.fd(9,"Server Error!"),l.gc(),l.gc(),l.gc(),l.hc(10,"div",7),l.hc(11,"button",8),l.fd(12),l.uc(13,"translate"),l.gc(),l.hc(14,"button",9),l.fd(15,"Report this Problem"),l.gc(),l.gc(),l.gc(),l.gc()),2&t&&(l.Nb(11),l.Bc("routerLink",l.Gc(4,P)),l.Nb(1),l.gd(l.vc(13,2,"BACK_TO_DASHBOARD")))},directives:[k.a,f.b,s.h],pipes:[d.c],styles:[""]}),t})();var N=n("8M/b"),B=n("ey9i");class S{constructor(){this.Username="",this.Password="",this.Token="",this.UserType=1}}var L=n("LFK6"),I=n("BSbQ");const D=function(){return{}};let U=(()=>{class t{constructor(t,e,n,r,c){this.fb=t,this.alertify=e,this._loginservice=n,this.navService=r,this._Route=c,this.LoginModel=new S,this.hide=!0}ngOnInit(){this._loginservice.LogoutUser();const t=new o.f("",o.B.required);new o.f("",N.a.equalTo(t)),this.signupForm=this.fb.group({Username:["",[o.B.required]],Password:t})}onSubmit(){this.signupForm.invalid||(this.LoginModel=Object.assign({},this.signupForm.value),this.LoginModel.Token="",this.LoginModel.UserType=1,this._loginservice.Login(this.LoginModel).subscribe(t=>{null==t.Token&&"0"==t.Usertype&&(this.alertify.error("Invalid Username and Password"),this._Route.navigate(["Login"]));let e=this._loginservice.redirectUrl?this._Route.parseUrl(this._loginservice.redirectUrl):"/dashboard/default";this.navService.generateMenu(),this._Route.navigateByUrl(e)},t=>{this.alertify.error(t.error)}))}}return t.\u0275fac=function(e){return new(e||t)(l.bc(o.e),l.bc(B.a),l.bc(B.b),l.bc(L.a),l.bc(s.g))},t.\u0275cmp=l.Vb({type:t,selectors:[["app-signin2"]],decls:32,vars:18,consts:[[1,"seciton-left"],[1,"section-left-content"],[1,"text-36","font-weight-light"],[1,"mb-24","text-small"],["mat-flat-button","","color","accent",3,"routerLink"],[1,"form-holder","h-full-screen","mat-bg-card","mat-elevation-z4",3,"perfectScrollbar"],["fxLayout","column",1,"signup-form",3,"formGroup","ngSubmit"],[1,"form-headline","text-center","mb-32"],[1,"font-weight-light"],["fxLayout","row wrap","fxLayoutAlign","center center",1,"mb-48"],["width","200px","src","assets/images/illustrations/breaking_barriers.svg","alt",""],["appearance","outline",1,"full-width"],["matInput","","formControlName","Username","type","text","name","username","placeholder","Email"],["matInput","","formControlName","Password","type","password","name","password","placeholder","********",3,"type"],["matSuffix","",3,"click"],["mat-raised-button","","color","primary",1,"background2"],[1,"my-32"]],template:function(t,e){1&t&&(l.hc(0,"div",0),l.hc(1,"div",1),l.hc(2,"h1",2),l.fd(3,"Don't have an account?"),l.gc(),l.hc(4,"p",3),l.fd(5,"Stop wasting time and money. It's free!"),l.gc(),l.hc(6,"button",4),l.fd(7,"Sign Up"),l.gc(),l.gc(),l.gc(),l.hc(8,"div",5),l.hc(9,"form",6),l.pc("ngSubmit",function(){return e.onSubmit()}),l.hc(10,"div",7),l.hc(11,"h1",8),l.fd(12),l.uc(13,"translate"),l.gc(),l.gc(),l.hc(14,"div",9),l.cc(15,"img",10),l.gc(),l.hc(16,"mat-form-field",11),l.hc(17,"mat-label"),l.fd(18),l.uc(19,"translate"),l.gc(),l.cc(20,"input",12),l.gc(),l.hc(21,"mat-form-field",11),l.hc(22,"mat-label"),l.fd(23),l.uc(24,"translate"),l.gc(),l.cc(25,"input",13),l.hc(26,"mat-icon",14),l.pc("click",function(){return e.hide=!e.hide}),l.fd(27),l.gc(),l.gc(),l.hc(28,"button",15),l.fd(29),l.uc(30,"translate"),l.gc(),l.cc(31,"mat-divider",16),l.gc(),l.gc()),2&t&&(l.Nb(6),l.Bc("routerLink","/sessions/signup2"),l.Nb(2),l.Bc("perfectScrollbar",l.Gc(17,D)),l.Nb(1),l.Bc("formGroup",e.signupForm),l.Nb(3),l.gd(l.vc(13,9,"SIGN_IN_ACCOUNT")),l.Nb(6),l.gd(l.vc(19,11,"Username")),l.Nb(5),l.gd(l.vc(24,13,"PASSWORD")),l.Nb(2),l.Bc("type",e.hide?"password":"text"),l.Nb(2),l.gd(e.hide?"visibility_off":"visibility"),l.Nb(2),l.hd(" ",l.vc(30,15,"SIGNIN")," "))},directives:[f.b,s.h,r.b,o.D,o.s,v.d,o.j,v.c,p.c,p.g,b.b,o.c,o.r,o.h,k.a,p.i,I.a],pipes:[d.c],styles:[""]}),t})();var F=n("7dP1"),q=n("nwYR");const T=[{path:"",children:[{path:"login",component:U,data:{title:"Login"}},{path:"forgot-password",component:x,data:{title:"Forgot password"}},{path:"lockscreen",component:M,data:{title:"Lockscreen"}},{path:"404",component:O,data:{title:"Not Found"}},{path:"error",component:C,data:{title:"Error"}},{path:"access-denied",component:g,data:{title:"access-denied"}},{path:"UserLogout",component:(()=>{class t{constructor(t,e,n,r){this._Route=t,this.navService=e,this.notService=n,this.loginservice=r}ngOnInit(){this.navService.clearMenu(),this.notService.ngOnDestroy(),this.loginservice.LogoutUser(),this._Route.navigate(["/sessions/login"])}}return t.\u0275fac=function(e){return new(e||t)(l.bc(s.g),l.bc(L.a),l.bc(q.a),l.bc(F.a))},t.\u0275cmp=l.Vb({type:t,selectors:[["ng-component"]],decls:0,vars:0,template:function(t,e){},encapsulation:2}),t})()}]}];let R=(()=>{class t{}return t.\u0275mod=l.Zb({type:t}),t.\u0275inj=l.Yb({factory:function(e){return new(e||t)},imports:[[c.c,o.l,d.b,o.y,i.a,a.a,r.c,s.k.forChild(T)]]}),t})()}}]);
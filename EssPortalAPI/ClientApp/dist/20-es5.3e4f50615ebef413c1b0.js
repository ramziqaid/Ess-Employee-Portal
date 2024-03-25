!function(){function t(t){return function(t){if(Array.isArray(t))return c(t)}(t)||function(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}(t)||function(t,e){if(!t)return;if("string"==typeof t)return c(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return c(t,e)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function c(t,c){(null==c||c>t.length)&&(c=t.length);for(var e=0,n=new Array(c);e<c;e++)n[e]=t[e];return n}function e(t,c){for(var e=0;e<c.length;e++){var n=c[e];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function n(t,c,n){return c&&e(t.prototype,c),n&&e(t,n),t}function a(t,c){if(!(t instanceof c))throw new TypeError("Cannot call a class as a function")}(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{qTjg:function(c,e,i){"use strict";i.r(e),i.d(e,"AppChatsModule",function(){return lt});var r,o=i("SVse"),s=i("iInd"),u=i("s7LF"),l=i("Dxy4"),h=i("PDjf"),d=i("Tj54"),f=i("e6WT"),g=i("SqCe"),v=i("rJgo"),m=i("q7Ft"),b=i("l0rg"),p=i("u9T3"),C=i("2Vo4"),y=i("XNiG"),S=i("itXk"),I=i("LRne"),k=i("eIep"),U=i("lJxs"),x=i("8Y7J"),B=i("IheW"),w=function t(){a(this,t)},N=((r=function(){function t(c){a(this,t),this.http=c,this.onContactSelected=new C.a(null),this.onUserUpdated=new y.a,this.onChatSelected=new C.a(null),this.onChatsUpdated=new y.a}return n(t,[{key:"loadChatData",value:function(){var t=this;return Object(S.b)(this.getAllContacts(),this.getAllChats(),this.getCurrentUser(),function(c,e,n){t.contacts=c,t.chats=e,t.user=n,t.onUserUpdated.next(n)})}},{key:"getChatByContact",value:function(t){var c=this,e=this.user.chatInfo.find(function(c){return c.contactId===t});return this.collectionLoading=!0,e?this.getAllChats().pipe(Object(k.a)(function(n){var a=n.find(function(t){return t.id===e.chatId}),i=c.contacts.find(function(c){return c.id===t});return c.onChatSelected.next({chatCollection:a,contact:i}),c.collectionLoading=!1,Object(I.a)(a)})):this.createChatCollection(t).pipe(Object(k.a)(function(e){return c.getChatByContact(t)}))}},{key:"createChatCollection",value:function(t){var c=this,e=this.contacts.find(function(c){return c.id===t}),n=(1e9*Math.random()).toString(),a={id:n,chats:[]},i={chatId:n,lastChatTime:new Date,contactId:e.id,contactName:e.name,unread:null};return this.http.post("api/chat-collections",Object.assign({},a)).pipe(Object(k.a)(function(t){return c.user.chatInfo.push(i),c.updateUser(c.user).pipe(Object(k.a)(function(t){return c.getCurrentUser().pipe(Object(U.a)(function(t){c.user=t,c.onUserUpdated.next(t)}))}))}))}},{key:"getAllContacts",value:function(){return this.http.get("api/contacts")}},{key:"getAllChats",value:function(){return this.http.get("api/chat-collections")}},{key:"getCurrentUser",value:function(){return this.http.get("api/chat-user").pipe(Object(U.a)(function(t){return t[0]}))}},{key:"updateUser",value:function(t){return this.http.put("api/chat-user/"+t.id,Object.assign({},t))}},{key:"updateChats",value:function(t,c){return this.http.put("api/chat-collections",{id:t,chats:c})}},{key:"autoReply",value:function(t){var c=this;setTimeout(function(){c.onChatsUpdated.next(t)},1500)}}]),t}()).\u0275fac=function(t){return new(t||r)(x.lc(B.c))},r.\u0275prov=x.Xb({token:r,factory:r.\u0275fac}),r),O=i("/q54"),F=i("aLe/"),j=i("BSbQ"),L=i("ura0"),A=i("UhP/"),T=i("YyUd"),M=function(t){return{online:t}};function D(t,c){if(1&t){var e=x.ic();x.hc(0,"mat-list-item",8),x.pc("click",function(){x.Uc(e);var t=c.$implicit;return x.tc().getChatByContact(t.contactId)}),x.hc(1,"a",9),x.uc(2,"getValueByKey"),x.cc(3,"img",2),x.uc(4,"getValueByKey"),x.cc(5,"span",3),x.gc(),x.hc(6,"h6",10),x.fd(7),x.gc(),x.hc(8,"p",11),x.fd(9),x.uc(10,"date"),x.gc(),x.gc()}if(2&t){var n=c.$implicit,a=x.tc();x.Nb(1),x.Bc("ngClass",x.Hc(14,M,"online"===x.xc(2,4,a.contacts,n.contactId,"status"))),x.Nb(2),x.Bc("src",x.xc(4,8,a.contacts,n.contactId,"avatar"),x.Wc),x.Nb(4),x.gd(n.contactName),x.Nb(2),x.gd(x.vc(10,12,n.lastChatTime))}}function q(t,c){if(1&t){var e=x.ic();x.hc(0,"mat-list-item",8),x.pc("click",function(){x.Uc(e);var t=c.$implicit;return x.tc().getChatByContact(t.id)}),x.hc(1,"a",9),x.cc(2,"img",2),x.cc(3,"span",3),x.gc(),x.hc(4,"h6",10),x.fd(5),x.gc(),x.gc()}if(2&t){var n=c.$implicit;x.Nb(1),x.Bc("ngClass",x.Hc(3,M,"online"===n.status)),x.Nb(1),x.Bc("src",n.avatar,x.Wc),x.Nb(3),x.gd(n.name)}}var W,V=((W=function(){function t(c,e){a(this,t),this.chatService=c,this.cdr=e,this.isSidenavOpen=!0,this.currentUser=new w}return n(t,[{key:"ngOnInit",value:function(){var t=this;this.userUpdateSub=this.chatService.onUserUpdated.subscribe(function(c){t.currentUser=c}),this.loadDataSub=this.chatService.loadChatData().subscribe(function(c){t.currentUser=t.chatService.user,t.contacts=t.chatService.contacts,t.cdr.markForCheck()})}},{key:"ngOnDestroy",value:function(){this.userUpdateSub&&this.userUpdateSub.unsubscribe(),this.loadDataSub&&this.loadDataSub.unsubscribe()}},{key:"getChatByContact",value:function(t){this.chatService.getChatByContact(t).subscribe(function(t){},function(t){console.log(t)})}}]),t}()).\u0275fac=function(t){return new(t||W)(x.bc(N),x.bc(x.i))},W.\u0275cmp=x.Vb({type:W,selectors:[["app-chat-left-sidenav"]],decls:12,vars:4,consts:[["color","primary",1,"chat-sidebar-toolbar"],["href","",1,"toolbar-avatar","online"],["alt","",3,"src"],[1,"status-dot"],[1,"m-0","pl-16","font-normal","fz-1"],[1,"chat-sidebar-scroll",3,"perfectScrollbar"],["role","list",1,"inbox-nav-list"],[3,"click",4,"ngFor","ngForOf"],[3,"click"],["mat-list-avatar","",1,"toolbar-avatar",3,"ngClass"],["matLine",""],["matLine","",1,"text-muted"]],template:function(t,c){1&t&&(x.hc(0,"mat-toolbar",0),x.hc(1,"a",1),x.cc(2,"img",2),x.cc(3,"span",3),x.gc(),x.hc(4,"h6",4),x.fd(5),x.gc(),x.gc(),x.hc(6,"div",5),x.hc(7,"mat-nav-list",6),x.dd(8,D,11,16,"mat-list-item",7),x.gc(),x.cc(9,"mat-divider"),x.hc(10,"mat-nav-list",6),x.dd(11,q,6,5,"mat-list-item",7),x.gc(),x.gc()),2&t&&(x.Nb(2),x.Bc("src",c.currentUser.avatar,x.Wc),x.Nb(3),x.gd(c.currentUser.name),x.Nb(3),x.Bc("ngForOf",null==c.currentUser?null:c.currentUser.chatInfo),x.Nb(3),x.Bc("ngForOf",c.contacts))},directives:[b.a,F.b,g.g,o.p,j.a,g.d,g.b,o.o,L.a,A.k],pipes:[T.a,o.f],styles:[""]}),W),H=i("VDRc"),P=i("Q2Ze"),$=i("336X"),z=["msgForm"],J=["msgInput"],Q=function(t){return{online:t}};function R(t,c){if(1&t&&(x.hc(0,"div",10),x.hc(1,"a",11),x.cc(2,"img",12),x.cc(3,"span",13),x.gc(),x.hc(4,"div",14),x.hc(5,"h6",15),x.fd(6),x.gc(),x.gc(),x.gc()),2&t){var e=x.tc();x.Nb(1),x.Bc("ngClass",x.Hc(3,Q,"online"===e.activeContact.status)),x.Nb(1),x.Bc("src",e.activeContact.avatar,x.Wc),x.Nb(4),x.gd(e.activeContact.name)}}function Y(t,c){if(1&t&&(x.hc(0,"a",30),x.cc(1,"img",31),x.cc(2,"span",13),x.gc()),2&t){var e=x.tc(3);x.Bc("ngClass",x.Hc(3,Q,"online"===e.user.status)),x.Nb(1),x.Bc("src",null==e.user?null:e.user.avatar,x.Wc)("alt",null==e.user?null:e.user.name)}}function G(t,c){if(1&t&&(x.hc(0,"a",30),x.cc(1,"img",31),x.cc(2,"span",13),x.gc()),2&t){var e=x.tc(3);x.Bc("ngClass",x.Hc(3,Q,"online"===e.activeContact.status)),x.Nb(1),x.Bc("src",null==e.activeContact?null:e.activeContact.avatar,x.Wc)("alt",null==e.activeContact?null:e.activeContact.name)}}function X(t,c){if(1&t&&(x.hc(0,"h5",32),x.fd(1),x.gc()),2&t){var e=x.tc(3);x.Nb(1),x.gd(null==e.activeContact?null:e.activeContact.name)}}function _(t,c){if(1&t&&(x.hc(0,"h5",32),x.fd(1),x.gc()),2&t){var e=x.tc(3);x.Nb(1),x.gd(null==e.user?null:e.user.name)}}var E=function(t,c){return{sender:t,me:c}};function K(t,c){if(1&t&&(x.hc(0,"div",25),x.dd(1,Y,3,5,"a",26),x.dd(2,G,3,5,"a",26),x.hc(3,"div"),x.dd(4,X,2,1,"h5",27),x.dd(5,_,2,1,"h5",27),x.hc(6,"div",28),x.fd(7),x.gc(),x.hc(8,"p",29),x.fd(9),x.uc(10,"relativeTime"),x.gc(),x.gc(),x.gc()),2&t){var e=c.$implicit,n=x.tc(2);x.Bc("ngClass",x.Ic(9,E,e.contactId===n.activeContact.id,e.contactId!==n.activeContact.id)),x.Nb(1),x.Bc("ngIf",e.contactId!==n.activeContact.id),x.Nb(1),x.Bc("ngIf",e.contactId===n.activeContact.id),x.Nb(2),x.Bc("ngIf",e.contactId===n.activeContact.id),x.Nb(1),x.Bc("ngIf",e.contactId!==n.activeContact.id),x.Nb(2),x.hd(" ",e.text," "),x.Nb(2),x.gd(x.vc(10,7,e.time))}}function Z(t,c){if(1&t){var e=x.ic();x.hc(0,"div"),x.hc(1,"div",16),x.dd(2,K,11,12,"div",17),x.gc(),x.cc(3,"mat-divider"),x.hc(4,"div",18),x.hc(5,"form",19,20),x.pc("ngSubmit",function(t){return x.Uc(e),x.tc().sendMessage(t)})("keydown.enter",function(t){return x.Uc(e),x.tc().sendMessage(t)}),x.hc(7,"mat-form-field",21),x.cc(8,"textarea",22,23),x.gc(),x.hc(10,"button",24),x.hc(11,"mat-icon"),x.fd(12,"send"),x.gc(),x.gc(),x.gc(),x.gc(),x.gc()}if(2&t){var n=x.tc();x.Nb(2),x.Bc("ngForOf",null==n.chatCollection?null:n.chatCollection.chats)}}function tt(t,c){1&t&&(x.hc(0,"div",33),x.hc(1,"div",34),x.hc(2,"div",35),x.cc(3,"div",36),x.cc(4,"div",37),x.gc(),x.gc(),x.gc())}var ct=function(){return{height:"220px",width:"220px",borderRadius:"50%"}},et=function(){return{height:"60px",width:"60px"}};function nt(t,c){1&t&&(x.hc(0,"div",38),x.hc(1,"mat-card",39),x.hc(2,"mat-icon",40),x.fd(3,"chat"),x.gc(),x.gc(),x.hc(4,"h6"),x.fd(5,"Select a contact!"),x.gc(),x.gc()),2&t&&(x.Nb(1),x.Bc("ngStyle",x.Gc(2,ct)),x.Nb(1),x.Bc("ngStyle",x.Gc(3,et)))}var at,it,rt,ot=((at=function(){function c(t,e){a(this,c),this.chatService=t,this.cdr=e,this.user=new w,this.activeContact=new w}return n(c,[{key:"ngOnInit",value:function(){var t=this;this.userUpdateSub=this.chatService.onUserUpdated.subscribe(function(c){t.user=c,t.cdr.markForCheck()}),this.chatSelectSub=this.chatService.onChatSelected.subscribe(function(c){c&&(t.chatCollection=c.chatCollection,t.activeContact=c.contact,t.initMsgForm(),t.cdr.markForCheck())}),this.chatUpdateSub=this.chatService.onChatsUpdated.subscribe(function(c){t.chatCollection.chats.push(c),t.scrollToBottom(),t.cdr.markForCheck()})}},{key:"ngOnDestroy",value:function(){this.userUpdateSub&&this.userUpdateSub.unsubscribe(),this.chatSelectSub&&this.chatSelectSub.unsubscribe(),this.chatUpdateSub&&this.chatUpdateSub.unsubscribe()}},{key:"sendMessage",value:function(c){var e=this;if(this.msgForm.form.value.message&&this.msgForm.form.value.message.trim().length){var n={contactId:this.chatService.user.id,text:this.msgForm.form.value.message,time:(new Date).toISOString()};this.chatCollection.chats.push(n),this.chatService.updateChats(this.chatCollection.id,t(this.chatCollection.chats)).subscribe(function(t){e.initMsgForm(),e.cdr.markForCheck()}),this.chatService.autoReply({contactId:this.activeContact.id,text:"Hi, I'm ".concat(this.activeContact.name,". Your imaginary friend."),time:(new Date).toISOString()})}}},{key:"initMsgForm",value:function(){var t=this;setTimeout(function(){t.msgForm&&t.msgForm.reset(),t.msgInput&&t.msgInput.first&&t.msgInput.first.nativeElement.focus(),t.scrollToBottom()})}},{key:"scrollToBottom",value:function(){var t=this;setTimeout(function(){t.psContainer&&t.psContainer.update(),t.psContainer&&t.psContainer.scrollToBottom(0,400)})}}]),c}()).\u0275fac=function(t){return new(t||at)(x.bc(N),x.bc(x.i))},at.\u0275cmp=x.Vb({type:at,selectors:[["app-chat-contents"]],viewQuery:function(t,c){var e;1&t&&(x.jd(F.b,!0),x.jd(z,!0),x.jd(J,!0)),2&t&&(x.Pc(e=x.qc())&&(c.psContainer=e.first),x.Pc(e=x.qc())&&(c.msgForm=e.first),x.Pc(e=x.qc())&&(c.msgInput=e))},inputs:{matSidenav:"matSidenav"},decls:26,vars:9,consts:[["color","primary",1,"chat-toolbar"],["mat-icon-button","",1,"mr-16",3,"click"],["class","active-chat-user","fxLayout","row","fxLayoutAlign","start center",4,"ngIf"],["fxFlex",""],["mat-icon-button","",1,"topbar-button-right","hidden-on-open",3,"matMenuTriggerFor"],["toolbarDDMenu","matMenu"],["mat-menu-item",""],[4,"ngIf"],["class","chat-intro",4,"ngIf"],["class","chat-intro","fxLayout","column","fxLayoutAlign","center center",4,"ngIf"],["fxLayout","row","fxLayoutAlign","start center",1,"active-chat-user"],[1,"toolbar-avatar","mr-16",3,"ngClass"],["alt","",3,"src"],[1,"status-dot"],["fxLayout","column"],[1,"m-0","font-normal","fz-1"],[1,"conversations-hold",3,"perfectScrollbar"],["class","single-conversation","fxLayout","row",3,"ngClass",4,"ngFor","ngForOf"],[1,"chat-input-actions"],["fxLayout","row",1,"inputForm",3,"ngSubmit","keydown.enter"],["msgForm","ngForm"],[1,"full-width","mr-16"],["matInput","","required","","ngModel","","placeholder","Type your message","name","message","value","",1,"inputText"],["msgInput",""],["mat-fab","","color","primary","type","submit"],["fxLayout","row",1,"single-conversation",3,"ngClass"],["href","","class","toolbar-avatar",3,"ngClass",4,"ngIf"],["class","chat-username text-muted",4,"ngIf"],[1,"conversation-msg"],[1,"chat-date","text-muted"],["href","",1,"toolbar-avatar",3,"ngClass"],[3,"src","alt"],[1,"chat-username","text-muted"],[1,"chat-intro"],[1,"chat-loader"],[1,"spinner"],[1,"double-bounce1","mat-bg-accent"],[1,"double-bounce2","mat-bg-primary"],["fxLayout","column","fxLayoutAlign","center center",1,"chat-intro"],["fxLayout","row","fxLayoutAlign","center center",1,"text-center",3,"ngStyle"],["color","primary",1,"text-60",3,"ngStyle"]],template:function(t,c){if(1&t&&(x.hc(0,"mat-toolbar",0),x.hc(1,"button",1),x.pc("click",function(){return c.matSidenav.toggle()}),x.hc(2,"mat-icon"),x.fd(3,"short_text"),x.gc(),x.gc(),x.dd(4,R,7,5,"div",2),x.cc(5,"span",3),x.hc(6,"button",4),x.hc(7,"mat-icon"),x.fd(8,"more_vert"),x.gc(),x.gc(),x.hc(9,"mat-menu",null,5),x.hc(11,"button",6),x.hc(12,"mat-icon"),x.fd(13,"account_circle"),x.gc(),x.fd(14,"Contact info"),x.gc(),x.hc(15,"button",6),x.hc(16,"mat-icon"),x.fd(17,"volume_mute"),x.gc(),x.fd(18,"Mute"),x.gc(),x.hc(19,"button",6),x.hc(20,"mat-icon"),x.fd(21,"delete"),x.gc(),x.fd(22,"Clear chat"),x.gc(),x.gc(),x.gc(),x.dd(23,Z,13,1,"div",7),x.dd(24,tt,5,0,"div",8),x.dd(25,nt,6,4,"div",9)),2&t){var e=x.Qc(10);x.Nb(1),x.ad("align-self","center"),x.Nb(3),x.Bc("ngIf",c.activeContact.id),x.Nb(2),x.ad("align-self","center"),x.Bc("matMenuTriggerFor",e),x.Nb(17),x.Bc("ngIf",c.chatCollection&&!c.chatService.collectionLoading),x.Nb(1),x.Bc("ngIf",c.chatService.collectionLoading),x.Nb(1),x.Bc("ngIf",!c.chatCollection&&!c.chatService.collectionLoading)}},directives:[b.a,l.b,d.a,o.q,H.b,v.d,v.a,v.b,H.d,H.c,o.o,L.a,F.b,o.p,j.a,u.D,u.s,u.t,P.c,f.b,u.c,u.z,u.r,u.u,h.a,o.r,L.c],pipes:[$.a],styles:[""]}),at),st=[{path:"",component:(it=function(){function t(c,e){a(this,t),this.mediaObserver=c,this.chatService=e,this.isSidenavOpen=!0,this.activeChatUser={name:"Gevorg Spartak",photo:"assets/images/face-2.jpg",isOnline:!0,lastMsg:"Hello!"},this.user=e.user}return n(t,[{key:"ngOnInit",value:function(){this.chatSideBarInit()}},{key:"ngOnDestroy",value:function(){this.screenSizeWatcher&&this.screenSizeWatcher.unsubscribe()}},{key:"changeActiveUser",value:function(t){this.activeChatUser=t}},{key:"updateSidenav",value:function(){var t=this;setTimeout(function(){t.isSidenavOpen=!t.isMobile,t.sideNav.mode=t.isMobile?"over":"side"})}},{key:"chatSideBarInit",value:function(){var t=this;this.isMobile=this.mediaObserver.isActive("xs")||this.mediaObserver.isActive("sm"),this.updateSidenav(),this.screenSizeWatcher=this.mediaObserver.media$.subscribe(function(c){t.isMobile="xs"===c.mqAlias||"sm"===c.mqAlias,t.updateSidenav()})}}]),t}(),it.\u0275fac=function(t){return new(t||it)(x.bc(O.g),x.bc(N))},it.\u0275cmp=x.Vb({type:it,selectors:[["app-chats"]],viewQuery:function(t,c){var e;1&t&&x.jd(m.d,!0),2&t&&x.Pc(e=x.qc())&&(c.sideNav=e.first)},decls:6,vars:2,consts:[[1,"p-0"],[1,"chat-container"],["mode","side",1,"chat-sidenav",3,"opened"],[1,"chats-wrap"],[3,"matSidenav"]],template:function(t,c){1&t&&(x.hc(0,"mat-card",0),x.hc(1,"mat-sidenav-container",1),x.hc(2,"mat-sidenav",2),x.cc(3,"app-chat-left-sidenav"),x.gc(),x.hc(4,"div",3),x.cc(5,"app-chat-contents",4),x.gc(),x.gc(),x.gc()),2&t&&(x.Nb(2),x.Bc("opened",c.isSidenavOpen),x.Nb(3),x.Bc("matSidenav",c.sideNav))},directives:[h.a,m.e,m.d,V,ot],styles:[""],changeDetection:0}),it),data:{title:"Chat"}}],ut=i("aYsj"),lt=((rt=function t(){a(this,t)}).\u0275mod=x.Zb({type:rt}),rt.\u0275inj=x.Yb({factory:function(t){return new(t||rt)},providers:[N],imports:[[o.c,u.l,m.g,v.c,f.c,d.b,l.c,g.e,b.b,h.g,p.a,F.c,ut.a,s.k.forChild(st)]]}),rt)}}])}();
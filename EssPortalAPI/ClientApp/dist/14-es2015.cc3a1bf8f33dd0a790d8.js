(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{"8/JR":function(e,t,n){"use strict";var r=n("8T9/"),o=n("Ibf7");e.exports=function(e,t){var n=t||{},i={};return void 0===e&&(e={}),e.on=function(t,n){return i[t]?i[t].push(n):i[t]=[n],e},e.once=function(t,n){return n._once=!0,e.on(t,n),e},e.off=function(t,n){var r=arguments.length;if(1===r)delete i[t];else if(0===r)i={};else{var o=i[t];if(!o)return e;o.splice(o.indexOf(n),1)}return e},e.emit=function(){var t=r(arguments);return e.emitterSnapshot(t.shift()).apply(this,t)},e.emitterSnapshot=function(t){var a=(i[t]||[]).slice(0);return function(){var i=r(arguments),c=this||e;if("error"===t&&!1!==n.throws&&!a.length)throw 1===i.length?i[0]:i;return a.forEach(function(r){n.async?o(r,i,c):r.apply(c,i),r._once&&e.off(t,r)}),e}},e}},"8T9/":function(e,t){e.exports=function(e,t){return Array.prototype.slice.call(e,t)}},Gjsa:function(e,t){var n="function"==typeof setImmediate;e.exports=n?function(e){setImmediate(e)}:function(e){setTimeout(e,0)}},Ibf7:function(e,t,n){"use strict";var r=n("Gjsa");e.exports=function(e,t,n){e&&r(function(){e.apply(n||null,t||[])})}},PzH3:function(e,t,n){"use strict";var r=n("bBst"),o=n("Ys8N"),i=global.document,a=function(e,t,n,r){return e.addEventListener(t,n,r)},c=function(e,t,n,r){return e.removeEventListener(t,n,r)},s=[];function d(e,t,n){var r=function(e,t,n){var r,o;for(r=0;r<s.length;r++)if((o=s[r]).element===e&&o.type===t&&o.fn===n)return r}(e,t,n);if(r){var o=s[r].wrapper;return s.splice(r,1),o}}global.addEventListener||(a=function(e,t,n){return e.attachEvent("on"+t,function(e,t,n){var r=d(e,t,n)||function(e,t,n){return function(t){var r=t||global.event;r.target=r.target||r.srcElement,r.preventDefault=r.preventDefault||function(){r.returnValue=!1},r.stopPropagation=r.stopPropagation||function(){r.cancelBubble=!0},r.which=r.which||r.keyCode,n.call(e,r)}}(e,0,n);return s.push({wrapper:r,element:e,type:t,fn:n}),r}(e,t,n))},c=function(e,t,n){var r=d(e,t,n);if(r)return e.detachEvent("on"+t,r)}),e.exports={add:a,remove:c,fabricate:function(e,t,n){var a=-1===o.indexOf(t)?new r(t,{detail:n}):function(){var e;return i.createEvent?(e=i.createEvent("Event")).initEvent(t,!0,!0):i.createEventObject&&(e=i.createEventObject()),e}();e.dispatchEvent?e.dispatchEvent(a):e.fireEvent("on"+t,a)}}},YS7c:function(e,t,n){"use strict";var r=n("8/JR"),o=n("PzH3"),i=n("n6yW"),a=document,c=a.documentElement;function s(e,t,n,r){global.navigator.pointerEnabled?o[t](e,{mouseup:"pointerup",mousedown:"pointerdown",mousemove:"pointermove"}[n],r):global.navigator.msPointerEnabled?o[t](e,{mouseup:"MSPointerUp",mousedown:"MSPointerDown",mousemove:"MSPointerMove"}[n],r):(o[t](e,{mouseup:"touchend",mousedown:"touchstart",mousemove:"touchmove"}[n],r),o[t](e,n,r))}function d(e){if(void 0!==e.touches)return e.touches.length;if(void 0!==e.which&&0!==e.which)return e.which;if(void 0!==e.buttons)return e.buttons;var t=e.button;return void 0!==t?1&t?1:2&t?3:4&t?2:0:void 0}function l(e){var t=e.getBoundingClientRect();return{left:t.left+u("scrollLeft","pageXOffset"),top:t.top+u("scrollTop","pageYOffset")}}function u(e,t){return void 0!==global[t]?global[t]:c.clientHeight?c[e]:a.body[e]}function f(e,t,n){var r,o=(e=e||{}).className||"";return e.className+=" gu-hide",r=a.elementFromPoint(t,n),e.className=o,r}function h(){return!1}function p(){return!0}function m(e){return e.width||e.right-e.left}function g(e){return e.height||e.bottom-e.top}function v(e){return e.parentNode===a?null:e.parentNode}function b(e){return"INPUT"===e.tagName||"TEXTAREA"===e.tagName||"SELECT"===e.tagName||y(e)}function y(e){return!!e&&"false"!==e.contentEditable&&("true"===e.contentEditable||y(v(e)))}function w(e){return e.nextElementSibling||function(){var t=e;do{t=t.nextSibling}while(t&&1!==t.nodeType);return t}()}function x(e,t){var n=function(e){return e.targetTouches&&e.targetTouches.length?e.targetTouches[0]:e.changedTouches&&e.changedTouches.length?e.changedTouches[0]:e}(t),r={pageX:"clientX",pageY:"clientY"};return e in r&&!(e in n)&&r[e]in n&&(e=r[e]),n[e]}e.exports=function(e,t){var n,u,y,M,S,C,E,O,k,D,N,T=arguments.length;1===T&&!1===Array.isArray(e)&&(t=e,e=[]);var I,Y=null,R=t||{};void 0===R.moves&&(R.moves=p),void 0===R.accepts&&(R.accepts=p),void 0===R.invalid&&(R.invalid=H),void 0===R.containers&&(R.containers=e||[]),void 0===R.isContainer&&(R.isContainer=h),void 0===R.copy&&(R.copy=!1),void 0===R.copySortSource&&(R.copySortSource=!1),void 0===R.revertOnSpill&&(R.revertOnSpill=!1),void 0===R.removeOnSpill&&(R.removeOnSpill=!1),void 0===R.direction&&(R.direction="vertical"),void 0===R.ignoreInputTextSelection&&(R.ignoreInputTextSelection=!0),void 0===R.mirrorContainer&&(R.mirrorContainer=a.body);var F=r({containers:R.containers,start:W,end:K,cancel:Q,remove:_,destroy:X,canMove:J,dragging:!1});return!0===R.removeOnSpill&&F.on("over",oe).on("out",ie),$(),F;function B(e){return-1!==F.containers.indexOf(e)||R.isContainer(e)}function $(e){var t=e?"remove":"add";s(c,t,"mousedown",V),s(c,t,"mouseup",Z)}function j(e){s(c,e?"remove":"add","mousemove",G)}function P(e){var t=e?"remove":"add";o[t](c,"selectstart",L),o[t](c,"click",L)}function X(){$(!0),Z({})}function L(e){I&&e.preventDefault()}function V(e){if(C=e.clientX,E=e.clientY,1===d(e)&&!e.metaKey&&!e.ctrlKey){var t=e.target,n=A(t);n&&(I=n,j(),"mousedown"===e.type&&(b(t)?t.focus():e.preventDefault()))}}function G(e){if(I)if(0!==d(e)){if(!(void 0!==e.clientX&&Math.abs(e.clientX-C)<=(R.slideFactorX||0)&&void 0!==e.clientY&&Math.abs(e.clientY-E)<=(R.slideFactorY||0))){if(R.ignoreInputTextSelection){var t=x("clientX",e)||0,n=x("clientY",e)||0;if(b(a.elementFromPoint(t,n)))return}var r=I;j(!0),P(),K(),z(r);var o=l(y);M=x("pageX",e)-o.left,S=x("pageY",e)-o.top,i.add(D||y,"gu-transit"),ae(),re(e)}}else Z({})}function A(e){if(!(F.dragging&&n||B(e))){for(var t=e;v(e)&&!1===B(v(e));){if(R.invalid(e,t))return;if(!(e=v(e)))return}var r=v(e);if(r&&!R.invalid(e,t)&&R.moves(e,r,t,w(e)))return{item:e,source:r}}}function J(e){return!!A(e)}function W(e){var t=A(e);t&&z(t)}function z(e){le(e.item,e.source)&&(D=e.item.cloneNode(!0),F.emit("cloned",D,e.item,"copy")),u=e.source,y=e.item,O=k=w(e.item),F.dragging=!0,F.emit("drag",y,u)}function H(){return!1}function K(){if(F.dragging){var e=D||y;q(e,v(e))}}function U(){I=!1,j(!0),P(!0)}function Z(e){if(U(),F.dragging){var t=D||y,r=x("clientX",e)||0,o=x("clientY",e)||0,i=ne(f(n,r,o),r,o);i&&(D&&R.copySortSource||!D||i!==u)?q(t,i):R.removeOnSpill?_():Q()}}function q(e,t){var n=v(e);D&&R.copySortSource&&t===u&&n.removeChild(y),te(t)?F.emit("cancel",e,u,u):F.emit("drop",e,t,u,k),ee()}function _(){if(F.dragging){var e=D||y,t=v(e);t&&t.removeChild(e),F.emit(D?"cancel":"remove",e,t,u),ee()}}function Q(e){if(F.dragging){var t=arguments.length>0?e:R.revertOnSpill,n=D||y,r=v(n),o=te(r);!1===o&&t&&(D?r&&r.removeChild(D):u.insertBefore(n,O)),o||t?F.emit("cancel",n,u,u):F.emit("drop",n,r,u,k),ee()}}function ee(){var e=D||y;U(),ce(),e&&i.rm(e,"gu-transit"),N&&clearTimeout(N),F.dragging=!1,Y&&F.emit("out",e,Y,u),F.emit("dragend",e),u=y=D=O=k=N=Y=null}function te(e,t){var r;return r=void 0!==t?t:n?k:w(D||y),e===u&&r===O}function ne(e,t,n){for(var r=e;r&&!o();)r=v(r);return r;function o(){if(!1===B(r))return!1;var o=se(r,e),i=de(r,o,t,n);return!!te(r,i)||R.accepts(y,r,u,i)}}function re(e){if(n){e.preventDefault();var t=x("clientX",e)||0,r=x("clientY",e)||0,o=r-S;n.style.left=t-M+"px",n.style.top=o+"px";var i=D||y,a=f(n,t,r),c=ne(a,t,r),s=null!==c&&c!==Y;(s||null===c)&&(Y&&p("out"),Y=c,s&&p("over"));var d=v(i);if(c!==u||!D||R.copySortSource){var l,h=se(c,a);if(null!==h)l=de(c,h,t,r);else{if(!0!==R.revertOnSpill||D)return void(D&&d&&d.removeChild(i));l=O,c=u}(null===l&&s||l!==i&&l!==w(i))&&(k=l,c.insertBefore(i,l),F.emit("shadow",i,c,u))}else d&&d.removeChild(i)}function p(e){F.emit(e,i,Y,u)}}function oe(e){i.rm(e,"gu-hide")}function ie(e){F.dragging&&i.add(e,"gu-hide")}function ae(){if(!n){var e=y.getBoundingClientRect();(n=y.cloneNode(!0)).style.width=m(e)+"px",n.style.height=g(e)+"px",i.rm(n,"gu-transit"),i.add(n,"gu-mirror"),R.mirrorContainer.appendChild(n),s(c,"add","mousemove",re),i.add(R.mirrorContainer,"gu-unselectable"),F.emit("cloned",n,y,"mirror")}}function ce(){n&&(i.rm(R.mirrorContainer,"gu-unselectable"),s(c,"remove","mousemove",re),v(n).removeChild(n),n=null)}function se(e,t){for(var n=t;n!==e&&v(n)!==e;)n=v(n);return n===c?null:n}function de(e,t,n,r){var o,i="horizontal"===R.direction;return t!==e?(o=t.getBoundingClientRect(),(i?n>o.left+m(o)/2:r>o.top+g(o)/2)?w(t):t):function(){var t,o,a,c=e.children.length;for(t=0;t<c;t++){if(a=(o=e.children[t]).getBoundingClientRect(),i&&a.left+a.width/2>n)return o;if(!i&&a.top+a.height/2>r)return o}return null}()}function le(e,t){return"boolean"==typeof R.copy?R.copy:R.copy(e,t)}}},Ys8N:function(e,t,n){"use strict";var r=[],o="",i=/^on/;for(o in global)i.test(o)&&r.push(o.slice(2));e.exports=r},bBst:function(e,t){var n=global.CustomEvent;e.exports=function(){try{var e=new n("cat",{detail:{foo:"bar"}});return"cat"===e.type&&"bar"===e.detail.foo}catch(t){}return!1}()?n:"undefined"!=typeof document&&"function"==typeof document.createEvent?function(e,t){var n=document.createEvent("CustomEvent");return t?n.initCustomEvent(e,t.bubbles,t.cancelable,t.detail):n.initCustomEvent(e,!1,!1,void 0),n}:function(e,t){var n=document.createEventObject();return n.type=e,t?(n.bubbles=Boolean(t.bubbles),n.cancelable=Boolean(t.cancelable),n.detail=t.detail):(n.bubbles=!1,n.cancelable=!1,n.detail=void 0),n}},kLM2:function(e,t,n){"use strict";n.r(t),n.d(t,"DragndropModule",function(){return Y});var r=n("SVse"),o=n("iInd"),i=n("PDjf"),a=n("Tj54"),c=n("SqCe"),s=n("u9T3"),d=n("YS7c"),l=n.n(d),u=n("8Y7J"),f=n("XNiG"),h=n("quSY"),p=n("pLZG"),m=n("lJxs");class g{constructor(e,t,n){this.name=e,this.drake=t,this.options=n,this.initEvents=!1}}const v={Cancel:"cancel",Cloned:"cloned",Drag:"drag",DragEnd:"dragend",Drop:"drop",Out:"out",Over:"over",Remove:"remove",Shadow:"shadow",DropModel:"dropModel",RemoveModel:"removeModel"},b=Object.keys(v).map(e=>v[e]),y=l.a||d;class w{constructor(e=y){this.build=e}}const x=(e,t,n)=>r=>r.pipe(Object(p.a)(({event:n,name:r})=>n===e&&(void 0===t||r===t)),Object(m.a)(({name:e,args:t})=>n(e,t))),M=(e,[t,n,r])=>({name:e,el:t,container:n,source:r});let S=(()=>{class e{constructor(e=null){this.drakeFactory=e,this.dispatch$=new f.a,this.drag=e=>this.dispatch$.pipe(x(v.Drag,e,(e,[t,n])=>({name:e,el:t,source:n}))),this.dragend=e=>this.dispatch$.pipe(x(v.DragEnd,e,(e,[t])=>({name:e,el:t}))),this.drop=e=>this.dispatch$.pipe(x(v.Drop,e,(e,[t,n,r,o])=>({name:e,el:t,target:n,source:r,sibling:o}))),this.elContainerSource=e=>t=>this.dispatch$.pipe(x(e,t,M)),this.cancel=this.elContainerSource(v.Cancel),this.remove=this.elContainerSource(v.Remove),this.shadow=this.elContainerSource(v.Shadow),this.over=this.elContainerSource(v.Over),this.out=this.elContainerSource(v.Out),this.cloned=e=>this.dispatch$.pipe(x(v.Cloned,e,(e,[t,n,r])=>({name:e,clone:t,original:n,cloneType:r}))),this.dropModel=e=>this.dispatch$.pipe(x(v.DropModel,e,(e,[t,n,r,o,i,a,c,s,d])=>({name:e,el:t,target:n,source:r,sibling:o,item:i,sourceModel:a,targetModel:c,sourceIndex:s,targetIndex:d}))),this.removeModel=e=>this.dispatch$.pipe(x(v.RemoveModel,e,(e,[t,n,r,o,i,a])=>({name:e,el:t,container:n,source:r,item:o,sourceModel:i,sourceIndex:a}))),this.groups={},null===this.drakeFactory&&(this.drakeFactory=new w)}add(e){if(this.find(e.name))throw new Error('Group named: "'+e.name+'" already exists.');return this.groups[e.name]=e,this.handleModels(e),this.setupEvents(e),e}find(e){return this.groups[e]}destroy(e){let t=this.find(e);t&&(t.drake&&t.drake.destroy(),delete this.groups[e])}createGroup(e,t){return this.add(new g(e,this.drakeFactory.build([],t),t))}handleModels({name:e,drake:t,options:n}){let r,o,i;t.on("remove",(n,r,i)=>{if(!t.models)return;let a=t.models[t.containers.indexOf(i)];a=a.slice(0);const c=a.splice(o,1)[0];this.dispatch$.next({event:v.RemoveModel,name:e,args:[n,r,i,c,a,o]})}),t.on("drag",(e,n)=>{t.models&&(r=e,o=this.domIndexOf(e,n))}),t.on("drop",(a,c,s,d)=>{if(!t.models||!c)return;i=this.domIndexOf(a,c);let l,u=t.models[t.containers.indexOf(s)],f=t.models[t.containers.indexOf(c)];if(c===s)u=u.slice(0),l=u.splice(o,1)[0],u.splice(i,0,l),f=u;else{let e=r!==a;if(l=u[o],e){if(!n.copyItem)throw new Error("If you have enabled `copy` on a group, you must provide a `copyItem` function.");l=n.copyItem(l)}if(e||(u=u.slice(0),u.splice(o,1)),f=f.slice(0),f.splice(i,0,l),e)try{c.removeChild(a)}catch(h){}}this.dispatch$.next({event:v.DropModel,name:e,args:[a,c,s,d,l,u,f,o,i]})})}setupEvents(e){if(e.initEvents)return;e.initEvents=!0;const t=e.name;b.forEach(n=>{e.drake.on(n,(...e)=>{this.dispatch$.next({event:n,name:t,args:e})})})}domIndexOf(e,t){return Array.prototype.indexOf.call(t.children,e)}}return e.\u0275fac=function(t){return new(t||e)(u.lc(w,8))},e.\u0275prov=u.Xb({token:e,factory:e.\u0275fac}),e})(),C=(()=>{class e{constructor(e,t){this.el=e,this.dragulaService=t,this.dragulaModelChange=new u.r}get container(){return this.el&&this.el.nativeElement}ngOnChanges(e){if(e&&e.dragula){const{previousValue:t,currentValue:n}=e.dragula;let r=!!n;!!t&&this.teardown(t),r&&this.setup()}else if(e&&e.dragulaModel){const{previousValue:t,currentValue:n}=e.dragulaModel,{drake:r}=this.group;if(this.dragula&&r){r.models=r.models||[];let e=r.models.indexOf(t);-1!==e?(r.models.splice(e,1),n&&r.models.splice(e,0,n)):n&&r.models.push(n)}}}setup(){let e=this.dragulaService.find(this.dragula);e||(e=this.dragulaService.createGroup(this.dragula,{})),(e=>{this.dragulaModel&&(e.drake.models?e.drake.models.push(this.dragulaModel):e.drake.models=[this.dragulaModel])})(e),e.drake.containers.push(this.container),this.subscribe(this.dragula),this.group=e}subscribe(e){this.subs=new h.a,this.subs.add(this.dragulaService.dropModel(e).subscribe(({source:e,target:t,sourceModel:n,targetModel:r})=>{e===this.el.nativeElement?this.dragulaModelChange.emit(n):t===this.el.nativeElement&&this.dragulaModelChange.emit(r)})),this.subs.add(this.dragulaService.removeModel(e).subscribe(({source:e,sourceModel:t})=>{e===this.el.nativeElement&&this.dragulaModelChange.emit(t)}))}teardown(e){this.subs&&this.subs.unsubscribe();const t=this.dragulaService.find(e);if(t){const e=t.drake.containers.indexOf(this.el.nativeElement);if(-1!==e&&t.drake.containers.splice(e,1),this.dragulaModel&&t.drake&&t.drake.models){let e=t.drake.models.indexOf(this.dragulaModel);-1!==e&&t.drake.models.splice(e,1)}}}ngOnDestroy(){this.teardown(this.dragula)}}return e.\u0275fac=function(t){return new(t||e)(u.bc(u.o),u.bc(S))},e.\u0275dir=u.Wb({type:e,selectors:[["","dragula",""]],inputs:{dragula:"dragula",dragulaModel:"dragulaModel"},outputs:{dragulaModelChange:"dragulaModelChange"},features:[u.Lb]}),e})(),E=(()=>{class e{static forRoot(){return{ngModule:e,providers:[S]}}}return e.\u0275mod=u.Zb({type:e}),e.\u0275inj=u.Yb({factory:function(t){return new(t||e)}}),e})();new w((e,t)=>new O(e,t));class O{constructor(e=[],t={},n){this.containers=e,this.options=t,this.models=n,this.dragging=!1,this.emitter$=new f.a,this.subs=new h.a}start(e){this.dragging=!0}end(){this.dragging=!1}cancel(e){this.dragging=!1}remove(){this.dragging=!1}on(e,t){this.subs.add(this.emitter$.pipe(Object(p.a)(({eventType:t})=>t===e)).subscribe(({args:e})=>{t(...e)}))}destroy(){this.subs.unsubscribe()}emit(e,...t){this.emitter$.next({eventType:e,args:t})}}var k=n("VDRc"),D=n("BSbQ"),N=n("UhP/");function T(e,t){if(1&e&&(u.hc(0,"mat-list-item",7),u.hc(1,"div",8),u.hc(2,"mat-icon",9),u.fd(3,"folder"),u.gc(),u.hc(4,"div",10),u.hc(5,"h4",11),u.fd(6),u.gc(),u.hc(7,"p",12),u.fd(8),u.uc(9,"date"),u.gc(),u.gc(),u.gc(),u.gc()),2&e){const e=t.$implicit;u.Nb(2),u.Bc("color",e.color||"primary"),u.Nb(4),u.gd(e.name),u.Nb(2),u.hd(" ",u.vc(9,3,e.updated)," ")}}const I=[{path:"",component:(()=>{class e{constructor(e,t){this.dragulaService=e,this.cdr=t,this.folders=[{name:"Backups",updated:new Date("2/2/17"),color:"primary"},{name:"Payments",updated:new Date("2/2/17"),color:"warn"},{name:"Orders",updated:new Date("2/20/17"),color:"accent"},{name:"Photos",updated:new Date("1/2/17"),color:"warn"},{name:"Recipes",updated:new Date("1/17/17"),color:"primary"},{name:"Work",updated:new Date("1/24/17"),color:"accent"}],this.notes=[{name:"Vacation Itinerary",updated:new Date("2/20/16")},{name:"Kitchen Remodel",updated:new Date("1/18/16")}],e.drag().subscribe(e=>{this.cdr.markForCheck()}),e.dragend().subscribe(e=>{this.cdr.markForCheck()})}ngOnInit(){}}return e.\u0275fac=function(t){return new(t||e)(u.bc(S),u.bc(u.i))},e.\u0275cmp=u.Vb({type:e,selectors:[["app-dragndrop"]],features:[u.Mb([S])],decls:21,vars:8,consts:[["fxLayout","row","fxLayoutWrap","wrap"],["fxFlex","100","fxFlex.gt-xs","50"],[1,"p-0"],[1,""],[1,"card-title-text"],[3,"dragula","dragulaModel","dragulaModelChange"],["class","mb-16 dnd-item",4,"ngFor","ngForOf"],[1,"mb-16","dnd-item"],["fxFlex","row","fxLayoutWrap","wrap"],["mat-list-icon","",1,"mr-16","icon-circle",3,"color"],["fxFlex","column"],["matLine","",1,"m-0","font-normal","fz-1"],["matLine","",1,"m-0"]],template:function(e,t){1&e&&(u.hc(0,"div",0),u.hc(1,"div",1),u.hc(2,"mat-card",2),u.hc(3,"mat-card-title",3),u.hc(4,"div",4),u.fd(5,"Drag and drop"),u.gc(),u.cc(6,"mat-divider"),u.gc(),u.hc(7,"mat-card-content"),u.hc(8,"mat-list",5),u.pc("dragulaModelChange",function(e){return t.folders=e}),u.dd(9,T,10,5,"mat-list-item",6),u.gc(),u.gc(),u.gc(),u.gc(),u.hc(10,"div",1),u.hc(11,"mat-card",2),u.hc(12,"mat-card-title",3),u.hc(13,"div",4),u.fd(14,"Data"),u.gc(),u.cc(15,"mat-divider"),u.gc(),u.hc(16,"mat-card-content"),u.hc(17,"pre"),u.hc(18,"code"),u.fd(19),u.uc(20,"json"),u.gc(),u.gc(),u.gc(),u.gc(),u.gc(),u.gc()),2&e&&(u.Nb(8),u.Bc("dragula","bag-one")("dragulaModel",t.folders),u.Nb(1),u.Bc("ngForOf",t.folders),u.Nb(9),u.ad("display","block"),u.Nb(1),u.gd(u.vc(20,6,t.folders)))},directives:[k.d,k.b,i.a,i.i,D.a,i.d,c.a,C,r.p,c.d,a.a,c.c,N.k],pipes:[r.j,r.f],styles:[""]}),e})(),data:{title:"Drag and drop"}}];let Y=(()=>{class e{}return e.\u0275mod=u.Zb({type:e}),e.\u0275inj=u.Yb({factory:function(t){return new(t||e)},imports:[[r.c,a.b,i.g,c.e,s.a,E.forRoot(),o.k.forChild(I)]]}),e})()},n6yW:function(e,t,n){"use strict";var r={};function o(e){var t=r[e];return t?t.lastIndex=0:r[e]=t=new RegExp("(?:^|\\s)"+e+"(?:\\s|$)","g"),t}e.exports={add:function(e,t){var n=e.className;n.length?o(t).test(n)||(e.className+=" "+t):e.className=t},rm:function(e,t){e.className=e.className.replace(o(t)," ").trim()}}}}]);
(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{alHs:function(t,e,i){"use strict";i.d(e,"a",function(){return f}),i.d(e,"b",function(){return b});var s=i("SVse"),n=i("8Y7J"),o=i("mrSG"),r=i("cUpR"),l=i("s7LF");const h=[[["","quill-editor-toolbar",""]]],a=["[quill-editor-toolbar]"],d={toolbar:[["bold","italic","underline","strike"],["blockquote","code-block"],[{header:1},{header:2}],[{list:"ordered"},{list:"bullet"}],[{script:"sub"},{script:"super"}],[{indent:"-1"},{indent:"+1"}],[{direction:"rtl"}],[{size:["small",!1,"large","huge"]}],[{header:[1,2,3,4,5,6,!1]}],[{color:[]},{background:[]}],[{font:[]}],[{align:[]}],["clean"],["link","image","video"]]},c=(t,e)=>t||e||"html",u=new n.w("config");let g=(()=>{class t{constructor(t){this.config=t,this.count=0,this.config||(this.config={modules:d})}getQuill(){return this.count++,this.Quill||1!==this.count||(this.$importPromise=new Promise(t=>Object(o.a)(this,void 0,void 0,function*(){var e,s;const n=yield i.e(42).then(i.t.bind(null,"kzlf",7));this.Quill=n.default?n.default:n,null===(e=this.config.customOptions)||void 0===e||e.forEach(t=>{const e=this.Quill.import(t.import);e.whitelist=t.whitelist,this.Quill.register(e,!0,this.config.suppressGlobalRegisterWarning)}),null===(s=this.config.customModules)||void 0===s||s.forEach(({implementation:t,path:e})=>{this.Quill.register(e,t,this.config.suppressGlobalRegisterWarning)}),t(this.Quill)}))),this.$importPromise}}return t.\u0275fac=function(e){return new(e||t)(n.lc(u))},t.\u0275prov=Object(n.Xb)({factory:function(){return new t(Object(n.lc)(u))},token:t,providedIn:"root"}),t})(),m=(()=>{class t{constructor(t,e,i,s,o,r,l){this.elementRef=t,this.domSanitizer=e,this.doc=i,this.platformId=s,this.renderer=o,this.zone=r,this.service=l,this.required=!1,this.customToolbarPosition="top",this.sanitize=!1,this.styles=null,this.strict=!0,this.customOptions=[],this.customModules=[],this.preserveWhitespace=!1,this.trimOnValidation=!1,this.onEditorCreated=new n.r,this.onEditorChanged=new n.r,this.onContentChanged=new n.r,this.onSelectionChanged=new n.r,this.onFocus=new n.r,this.onBlur=new n.r,this.disabled=!1,this.valueGetter=(t,e)=>{let i=e.querySelector(".ql-editor").innerHTML;"<p><br></p>"!==i&&"<div><br></div>"!==i||(i=null);let s=i;const n=c(this.format,this.service.config.format);if("text"===n)s=t.getText();else if("object"===n)s=t.getContents();else if("json"===n)try{s=JSON.stringify(t.getContents())}catch(o){s=t.getText()}return s},this.valueSetter=(t,e)=>{const i=c(this.format,this.service.config.format);if("html"===i)return this.sanitize&&(e=this.domSanitizer.sanitize(n.T.HTML,e)),t.clipboard.convert(e);if("json"===i)try{return JSON.parse(e)}catch(s){return[{insert:e}]}return e},this.selectionChangeHandler=(t,e,i)=>{const s=!t&&!!this.onModelTouched;(this.onBlur.observers.length||this.onFocus.observers.length||this.onSelectionChanged.observers.length||s)&&this.zone.run(()=>{null===t?this.onBlur.emit({editor:this.quillEditor,source:i}):null===e&&this.onFocus.emit({editor:this.quillEditor,source:i}),this.onSelectionChanged.emit({editor:this.quillEditor,oldRange:e,range:t,source:i}),s&&this.onModelTouched()})},this.textChangeHandler=(t,e,i)=>{const s=this.quillEditor.getText(),n=this.quillEditor.getContents();let o=this.editorElem.querySelector(".ql-editor").innerHTML;"<p><br></p>"!==o&&"<div><br></div>"!==o||(o=null);const r=this.trackChanges||this.service.config.trackChanges,l=("user"===i||r&&"all"===r)&&!!this.onModelChange;(this.onContentChanged.observers.length||l)&&this.zone.run(()=>{l&&this.onModelChange(this.valueGetter(this.quillEditor,this.editorElem)),this.onContentChanged.emit({content:n,delta:t,editor:this.quillEditor,html:o,oldDelta:e,source:i,text:s})})},this.editorChangeHandler=(t,e,i,s)=>{if(this.onEditorChanged.observers.length)if("text-change"===t){const n=this.quillEditor.getText(),o=this.quillEditor.getContents();let r=this.editorElem.querySelector(".ql-editor").innerHTML;"<p><br></p>"!==r&&"<div><br></div>"!==r||(r=null),this.zone.run(()=>{this.onEditorChanged.emit({content:o,delta:e,editor:this.quillEditor,event:t,html:r,oldDelta:i,source:s,text:n})})}else this.onEditorChanged.emit({editor:this.quillEditor,event:t,oldRange:i,range:e,source:s})}}static normalizeClassNames(t){return t.trim().split(" ").reduce((t,e)=>{const i=e.trim();return i&&t.push(i),t},[])}ngAfterViewInit(){return Object(o.a)(this,void 0,void 0,function*(){if(Object(s.C)(this.platformId))return;const t=yield this.service.getQuill();this.elementRef.nativeElement.insertAdjacentHTML("top"===this.customToolbarPosition?"beforeend":"afterbegin",this.preserveWhitespace?"<pre quill-editor-element></pre>":"<div quill-editor-element></div>"),this.editorElem=this.elementRef.nativeElement.querySelector("[quill-editor-element]");const e=this.elementRef.nativeElement.querySelector("[quill-editor-toolbar]"),i=Object.assign({},this.modules||this.service.config.modules);e?i.toolbar=e:void 0===i.toolbar&&(i.toolbar=d.toolbar);let o=void 0!==this.placeholder?this.placeholder:this.service.config.placeholder;void 0===o&&(o="Insert text here ..."),this.styles&&Object.keys(this.styles).forEach(t=>{this.renderer.setStyle(this.editorElem,t,this.styles[t])}),this.classes&&this.addClasses(this.classes),this.customOptions.forEach(e=>{const i=t.import(e.import);i.whitelist=e.whitelist,t.register(i,!0)}),this.customModules.forEach(({implementation:e,path:i})=>{t.register(i,e)});let r=this.bounds&&"self"===this.bounds?this.editorElem:this.bounds;r||(r=this.service.config.bounds?this.service.config.bounds:this.doc.body);let l=this.debug;!l&&!1!==l&&this.service.config.debug&&(l=this.service.config.debug);let h=this.readOnly;h||!1===this.readOnly||(h=void 0!==this.service.config.readOnly&&this.service.config.readOnly);let a=this.scrollingContainer;a||null===this.scrollingContainer||(a=null===this.service.config.scrollingContainer||this.service.config.scrollingContainer?this.service.config.scrollingContainer:null);let u=this.formats;if(u||void 0!==u||(u=this.service.config.formats?[...this.service.config.formats]:null===this.service.config.formats?null:void 0),this.zone.runOutsideAngular(()=>{this.quillEditor=new t(this.editorElem,{bounds:r,debug:l,formats:u,modules:i,placeholder:o,readOnly:h,scrollingContainer:a,strict:this.strict,theme:this.theme||(this.service.config.theme?this.service.config.theme:"snow")})}),this.content){const t=c(this.format,this.service.config.format);if("object"===t)this.quillEditor.setContents(this.content,"silent");else if("text"===t)this.quillEditor.setText(this.content,"silent");else if("json"===t)try{this.quillEditor.setContents(JSON.parse(this.content),"silent")}catch(g){this.quillEditor.setText(this.content,"silent")}else{this.sanitize&&(this.content=this.domSanitizer.sanitize(n.T.HTML,this.content));const t=this.quillEditor.clipboard.convert(this.content);this.quillEditor.setContents(t,"silent")}this.quillEditor.getModule("history").clear()}this.setDisabledState(),this.quillEditor.on("editor-change",this.editorChangeHandler),this.quillEditor.on("selection-change",this.selectionChangeHandler),this.quillEditor.on("text-change",this.textChangeHandler),setTimeout(()=>{this.onValidatorChanged&&this.onValidatorChanged(),this.onEditorCreated.emit(this.quillEditor)})})}ngOnDestroy(){this.quillEditor&&(this.quillEditor.off("selection-change",this.selectionChangeHandler),this.quillEditor.off("text-change",this.textChangeHandler),this.quillEditor.off("editor-change",this.editorChangeHandler))}ngOnChanges(t){if(this.quillEditor){if(t.readOnly&&this.quillEditor.enable(!t.readOnly.currentValue),t.placeholder&&(this.quillEditor.root.dataset.placeholder=t.placeholder.currentValue),t.styles){const e=t.styles.currentValue,i=t.styles.previousValue;i&&Object.keys(i).forEach(t=>{this.renderer.removeStyle(this.editorElem,t)}),e&&Object.keys(e).forEach(t=>{this.renderer.setStyle(this.editorElem,t,this.styles[t])})}if(t.classes){const e=t.classes.currentValue,i=t.classes.previousValue;i&&this.removeClasses(i),e&&this.addClasses(e)}}}addClasses(e){t.normalizeClassNames(e).forEach(t=>{this.renderer.addClass(this.editorElem,t)})}removeClasses(e){t.normalizeClassNames(e).forEach(t=>{this.renderer.removeClass(this.editorElem,t)})}writeValue(t){this.content=t;const e=c(this.format,this.service.config.format);if(this.quillEditor){if(t)return void("text"===e?this.quillEditor.setText(t):this.quillEditor.setContents(this.valueSetter(this.quillEditor,this.content)));this.quillEditor.setText("")}}setDisabledState(t=this.disabled){this.disabled=t,this.quillEditor&&(t?(this.quillEditor.disable(),this.renderer.setAttribute(this.elementRef.nativeElement,"disabled","disabled")):(this.readOnly||this.quillEditor.enable(),this.renderer.removeAttribute(this.elementRef.nativeElement,"disabled")))}registerOnChange(t){this.onModelChange=t}registerOnTouched(t){this.onModelTouched=t}registerOnValidatorChange(t){this.onValidatorChanged=t}validate(){if(!this.quillEditor)return null;const t={};let e=!0;const i=this.quillEditor.getText(),s=this.trimOnValidation?i.trim().length:1===i.length&&0===i.trim().length?0:i.length-1;return this.minLength&&s&&s<this.minLength&&(t.minLengthError={given:s,minLength:this.minLength},e=!1),this.maxLength&&s>this.maxLength&&(t.maxLengthError={given:s,maxLength:this.maxLength},e=!1),this.required&&!s&&(t.requiredError={empty:!0},e=!1),e?null:t}}return t.\u0275fac=function(e){return new(e||t)(n.bc(n.o),n.bc(r.b),n.bc(s.e),n.bc(n.K),n.bc(n.P),n.bc(n.H),n.bc(g))},t.\u0275dir=n.Wb({type:t,inputs:{required:"required",customToolbarPosition:"customToolbarPosition",sanitize:"sanitize",styles:"styles",strict:"strict",customOptions:"customOptions",customModules:"customModules",preserveWhitespace:"preserveWhitespace",trimOnValidation:"trimOnValidation",valueGetter:"valueGetter",valueSetter:"valueSetter",format:"format",theme:"theme",modules:"modules",debug:"debug",readOnly:"readOnly",placeholder:"placeholder",maxLength:"maxLength",minLength:"minLength",formats:"formats",scrollingContainer:"scrollingContainer",bounds:"bounds",trackChanges:"trackChanges",classes:"classes"},outputs:{onEditorCreated:"onEditorCreated",onEditorChanged:"onEditorChanged",onContentChanged:"onContentChanged",onSelectionChanged:"onSelectionChanged",onFocus:"onFocus",onBlur:"onBlur"},features:[n.Lb]}),t})(),f=(()=>{class t extends m{constructor(t,e,i,s,n,o,r){super(t,e,i,s,n,o,r)}}return t.\u0275fac=function(e){return new(e||t)(n.bc(n.o),n.bc(r.b),n.bc(s.e),n.bc(n.K),n.bc(n.P),n.bc(n.H),n.bc(g))},t.\u0275cmp=n.Vb({type:t,selectors:[["quill-editor"]],features:[n.Mb([{multi:!0,provide:l.p,useExisting:Object(n.gb)(()=>t)},{multi:!0,provide:l.o,useExisting:Object(n.gb)(()=>t)}]),n.Kb],ngContentSelectors:a,decls:1,vars:0,template:function(t,e){1&t&&(n.Ac(h),n.zc(0))},encapsulation:2}),t})(),b=(()=>{class t{static forRoot(e){return{ngModule:t,providers:[{provide:u,useValue:e}]}}}return t.\u0275mod=n.Zb({type:t}),t.\u0275inj=n.Yb({factory:function(e){return new(e||t)},providers:[g],imports:[[s.c]]}),t})()}}]);
!function(){function e(t,i){return(e=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(t,i)}function t(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(e){return!1}}();return function(){var r,o=n(e);if(t){var s=n(this).constructor;r=Reflect.construct(o,arguments,s)}else r=o.apply(this,arguments);return i(this,r)}}function i(e,t){return!t||"object"!=typeof t&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function n(e){return(n=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function r(e){return function(e){if(Array.isArray(e))return o(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"==typeof e)return o(e,t);var i=Object.prototype.toString.call(e).slice(8,-1);"Object"===i&&e.constructor&&(i=e.constructor.name);if("Map"===i||"Set"===i)return Array.from(e);if("Arguments"===i||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i))return o(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function o(e,t){(null==t||t>e.length)&&(t=e.length);for(var i=0,n=new Array(t);i<t;i++)n[i]=e[i];return n}function s(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){for(var i=0;i<t.length;i++){var n=t[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function a(e,t,i){return t&&l(e.prototype,t),i&&l(e,i),e}(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{alHs:function(i,n,o){"use strict";o.d(n,"a",function(){return E}),o.d(n,"b",function(){return C});var l=o("SVse"),u=o("8Y7J"),c=o("mrSG"),h=o("cUpR"),d=o("s7LF"),f=[[["","quill-editor-toolbar",""]]],g=["[quill-editor-toolbar]"],m={toolbar:[["bold","italic","underline","strike"],["blockquote","code-block"],[{header:1},{header:2}],[{list:"ordered"},{list:"bullet"}],[{script:"sub"},{script:"super"}],[{indent:"-1"},{indent:"+1"}],[{direction:"rtl"}],[{size:["small",!1,"large","huge"]}],[{header:[1,2,3,4,5,6,!1]}],[{color:[]},{background:[]}],[{font:[]}],[{align:[]}],["clean"],["link","image","video"]]},v=function(e,t){return e||t||"html"},b=new u.w("config"),p=function(){var e=function(){function e(t){s(this,e),this.config=t,this.count=0,this.config||(this.config={modules:m})}return a(e,[{key:"getQuill",value:function(){var e=this;return this.count++,this.Quill||1!==this.count||(this.$importPromise=new Promise(function(t){return Object(c.a)(e,void 0,void 0,regeneratorRuntime.mark(function e(){var i,n,r,s=this;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.e(42).then(o.t.bind(null,"kzlf",7));case 2:r=e.sent,this.Quill=r.default?r.default:r,null===(i=this.config.customOptions)||void 0===i||i.forEach(function(e){var t=s.Quill.import(e.import);t.whitelist=e.whitelist,s.Quill.register(t,!0,s.config.suppressGlobalRegisterWarning)}),null===(n=this.config.customModules)||void 0===n||n.forEach(function(e){var t=e.implementation,i=e.path;s.Quill.register(i,t,s.config.suppressGlobalRegisterWarning)}),t(this.Quill);case 4:case"end":return e.stop()}},e,this)}))})),this.$importPromise}}]),e}();return e.\u0275fac=function(t){return new(t||e)(u.lc(b))},e.\u0275prov=Object(u.Xb)({factory:function(){return new e(Object(u.lc)(b))},token:e,providedIn:"root"}),e}(),y=function(){var e=function(){function e(t,i,n,r,o,l,a){var c=this;s(this,e),this.elementRef=t,this.domSanitizer=i,this.doc=n,this.platformId=r,this.renderer=o,this.zone=l,this.service=a,this.required=!1,this.customToolbarPosition="top",this.sanitize=!1,this.styles=null,this.strict=!0,this.customOptions=[],this.customModules=[],this.preserveWhitespace=!1,this.trimOnValidation=!1,this.onEditorCreated=new u.r,this.onEditorChanged=new u.r,this.onContentChanged=new u.r,this.onSelectionChanged=new u.r,this.onFocus=new u.r,this.onBlur=new u.r,this.disabled=!1,this.valueGetter=function(e,t){var i=t.querySelector(".ql-editor").innerHTML;"<p><br></p>"!==i&&"<div><br></div>"!==i||(i=null);var n=i,r=v(c.format,c.service.config.format);if("text"===r)n=e.getText();else if("object"===r)n=e.getContents();else if("json"===r)try{n=JSON.stringify(e.getContents())}catch(o){n=e.getText()}return n},this.valueSetter=function(e,t){var i=v(c.format,c.service.config.format);if("html"===i)return c.sanitize&&(t=c.domSanitizer.sanitize(u.T.HTML,t)),e.clipboard.convert(t);if("json"===i)try{return JSON.parse(t)}catch(n){return[{insert:t}]}return t},this.selectionChangeHandler=function(e,t,i){var n=!e&&!!c.onModelTouched;(c.onBlur.observers.length||c.onFocus.observers.length||c.onSelectionChanged.observers.length||n)&&c.zone.run(function(){null===e?c.onBlur.emit({editor:c.quillEditor,source:i}):null===t&&c.onFocus.emit({editor:c.quillEditor,source:i}),c.onSelectionChanged.emit({editor:c.quillEditor,oldRange:t,range:e,source:i}),n&&c.onModelTouched()})},this.textChangeHandler=function(e,t,i){var n=c.quillEditor.getText(),r=c.quillEditor.getContents(),o=c.editorElem.querySelector(".ql-editor").innerHTML;"<p><br></p>"!==o&&"<div><br></div>"!==o||(o=null);var s=c.trackChanges||c.service.config.trackChanges,l=("user"===i||s&&"all"===s)&&!!c.onModelChange;(c.onContentChanged.observers.length||l)&&c.zone.run(function(){l&&c.onModelChange(c.valueGetter(c.quillEditor,c.editorElem)),c.onContentChanged.emit({content:r,delta:e,editor:c.quillEditor,html:o,oldDelta:t,source:i,text:n})})},this.editorChangeHandler=function(e,t,i,n){if(c.onEditorChanged.observers.length)if("text-change"===e){var r=c.quillEditor.getText(),o=c.quillEditor.getContents(),s=c.editorElem.querySelector(".ql-editor").innerHTML;"<p><br></p>"!==s&&"<div><br></div>"!==s||(s=null),c.zone.run(function(){c.onEditorChanged.emit({content:o,delta:t,editor:c.quillEditor,event:e,html:s,oldDelta:i,source:n,text:r})})}else c.onEditorChanged.emit({editor:c.quillEditor,event:e,oldRange:i,range:t,source:n})}}return a(e,[{key:"ngAfterViewInit",value:function(){return Object(c.a)(this,void 0,void 0,regeneratorRuntime.mark(function e(){var t,i,n,o,s,a,c,h,d,f,g,b=this;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(!Object(l.C)(this.platformId)){e.next=2;break}return e.abrupt("return");case 2:return e.next=4,this.service.getQuill();case 4:if(t=e.sent,this.elementRef.nativeElement.insertAdjacentHTML("top"===this.customToolbarPosition?"beforeend":"afterbegin",this.preserveWhitespace?"<pre quill-editor-element></pre>":"<div quill-editor-element></div>"),this.editorElem=this.elementRef.nativeElement.querySelector("[quill-editor-element]"),i=this.elementRef.nativeElement.querySelector("[quill-editor-toolbar]"),n=Object.assign({},this.modules||this.service.config.modules),i?n.toolbar=i:void 0===n.toolbar&&(n.toolbar=m.toolbar),void 0===(o=void 0!==this.placeholder?this.placeholder:this.service.config.placeholder)&&(o="Insert text here ..."),this.styles&&Object.keys(this.styles).forEach(function(e){b.renderer.setStyle(b.editorElem,e,b.styles[e])}),this.classes&&this.addClasses(this.classes),this.customOptions.forEach(function(e){var i=t.import(e.import);i.whitelist=e.whitelist,t.register(i,!0)}),this.customModules.forEach(function(e){var i=e.implementation,n=e.path;t.register(n,i)}),(s=this.bounds&&"self"===this.bounds?this.editorElem:this.bounds)||(s=this.service.config.bounds?this.service.config.bounds:this.doc.body),!(a=this.debug)&&!1!==a&&this.service.config.debug&&(a=this.service.config.debug),(c=this.readOnly)||!1===this.readOnly||(c=void 0!==this.service.config.readOnly&&this.service.config.readOnly),(h=this.scrollingContainer)||null===this.scrollingContainer||(h=null===this.service.config.scrollingContainer||this.service.config.scrollingContainer?this.service.config.scrollingContainer:null),(d=this.formats)||void 0!==d||(d=this.service.config.formats?r(this.service.config.formats):null===this.service.config.formats?null:void 0),this.zone.runOutsideAngular(function(){b.quillEditor=new t(b.editorElem,{bounds:s,debug:a,formats:d,modules:n,placeholder:o,readOnly:c,scrollingContainer:h,strict:b.strict,theme:b.theme||(b.service.config.theme?b.service.config.theme:"snow")})}),this.content){if("object"===(f=v(this.format,this.service.config.format)))this.quillEditor.setContents(this.content,"silent");else if("text"===f)this.quillEditor.setText(this.content,"silent");else if("json"===f)try{this.quillEditor.setContents(JSON.parse(this.content),"silent")}catch(p){this.quillEditor.setText(this.content,"silent")}else this.sanitize&&(this.content=this.domSanitizer.sanitize(u.T.HTML,this.content)),g=this.quillEditor.clipboard.convert(this.content),this.quillEditor.setContents(g,"silent");this.quillEditor.getModule("history").clear()}this.setDisabledState(),this.quillEditor.on("editor-change",this.editorChangeHandler),this.quillEditor.on("selection-change",this.selectionChangeHandler),this.quillEditor.on("text-change",this.textChangeHandler),setTimeout(function(){b.onValidatorChanged&&b.onValidatorChanged(),b.onEditorCreated.emit(b.quillEditor)});case 21:case"end":return e.stop()}},e,this)}))}},{key:"ngOnDestroy",value:function(){this.quillEditor&&(this.quillEditor.off("selection-change",this.selectionChangeHandler),this.quillEditor.off("text-change",this.textChangeHandler),this.quillEditor.off("editor-change",this.editorChangeHandler))}},{key:"ngOnChanges",value:function(e){var t=this;if(this.quillEditor){if(e.readOnly&&this.quillEditor.enable(!e.readOnly.currentValue),e.placeholder&&(this.quillEditor.root.dataset.placeholder=e.placeholder.currentValue),e.styles){var i=e.styles.currentValue,n=e.styles.previousValue;n&&Object.keys(n).forEach(function(e){t.renderer.removeStyle(t.editorElem,e)}),i&&Object.keys(i).forEach(function(e){t.renderer.setStyle(t.editorElem,e,t.styles[e])})}if(e.classes){var r=e.classes.currentValue,o=e.classes.previousValue;o&&this.removeClasses(o),r&&this.addClasses(r)}}}},{key:"addClasses",value:function(t){var i=this;e.normalizeClassNames(t).forEach(function(e){i.renderer.addClass(i.editorElem,e)})}},{key:"removeClasses",value:function(t){var i=this;e.normalizeClassNames(t).forEach(function(e){i.renderer.removeClass(i.editorElem,e)})}},{key:"writeValue",value:function(e){this.content=e;var t=v(this.format,this.service.config.format);if(this.quillEditor){if(e)return void("text"===t?this.quillEditor.setText(e):this.quillEditor.setContents(this.valueSetter(this.quillEditor,this.content)));this.quillEditor.setText("")}}},{key:"setDisabledState",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.disabled;this.disabled=e,this.quillEditor&&(e?(this.quillEditor.disable(),this.renderer.setAttribute(this.elementRef.nativeElement,"disabled","disabled")):(this.readOnly||this.quillEditor.enable(),this.renderer.removeAttribute(this.elementRef.nativeElement,"disabled")))}},{key:"registerOnChange",value:function(e){this.onModelChange=e}},{key:"registerOnTouched",value:function(e){this.onModelTouched=e}},{key:"registerOnValidatorChange",value:function(e){this.onValidatorChanged=e}},{key:"validate",value:function(){if(!this.quillEditor)return null;var e={},t=!0,i=this.quillEditor.getText(),n=this.trimOnValidation?i.trim().length:1===i.length&&0===i.trim().length?0:i.length-1;return this.minLength&&n&&n<this.minLength&&(e.minLengthError={given:n,minLength:this.minLength},t=!1),this.maxLength&&n>this.maxLength&&(e.maxLengthError={given:n,maxLength:this.maxLength},t=!1),this.required&&!n&&(e.requiredError={empty:!0},t=!1),t?null:e}}],[{key:"normalizeClassNames",value:function(e){return e.trim().split(" ").reduce(function(e,t){var i=t.trim();return i&&e.push(i),e},[])}}]),e}();return e.\u0275fac=function(t){return new(t||e)(u.bc(u.o),u.bc(h.b),u.bc(l.e),u.bc(u.K),u.bc(u.P),u.bc(u.H),u.bc(p))},e.\u0275dir=u.Wb({type:e,inputs:{required:"required",customToolbarPosition:"customToolbarPosition",sanitize:"sanitize",styles:"styles",strict:"strict",customOptions:"customOptions",customModules:"customModules",preserveWhitespace:"preserveWhitespace",trimOnValidation:"trimOnValidation",valueGetter:"valueGetter",valueSetter:"valueSetter",format:"format",theme:"theme",modules:"modules",debug:"debug",readOnly:"readOnly",placeholder:"placeholder",maxLength:"maxLength",minLength:"minLength",formats:"formats",scrollingContainer:"scrollingContainer",bounds:"bounds",trackChanges:"trackChanges",classes:"classes"},outputs:{onEditorCreated:"onEditorCreated",onEditorChanged:"onEditorChanged",onContentChanged:"onContentChanged",onSelectionChanged:"onSelectionChanged",onFocus:"onFocus",onBlur:"onBlur"},features:[u.Lb]}),e}(),E=function(){var i=function(i){!function(t,i){if("function"!=typeof i&&null!==i)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(i&&i.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),i&&e(t,i)}(r,i);var n=t(r);function r(e,t,i,o,l,a,u){return s(this,r),n.call(this,e,t,i,o,l,a,u)}return r}(y);return i.\u0275fac=function(e){return new(e||i)(u.bc(u.o),u.bc(h.b),u.bc(l.e),u.bc(u.K),u.bc(u.P),u.bc(u.H),u.bc(p))},i.\u0275cmp=u.Vb({type:i,selectors:[["quill-editor"]],features:[u.Mb([{multi:!0,provide:d.p,useExisting:Object(u.gb)(function(){return i})},{multi:!0,provide:d.o,useExisting:Object(u.gb)(function(){return i})}]),u.Kb],ngContentSelectors:g,decls:1,vars:0,template:function(e,t){1&e&&(u.Ac(f),u.zc(0))},encapsulation:2}),i}(),C=function(){var e=function(){function e(){s(this,e)}return a(e,null,[{key:"forRoot",value:function(t){return{ngModule:e,providers:[{provide:b,useValue:t}]}}}]),e}();return e.\u0275mod=u.Zb({type:e}),e.\u0275inj=u.Yb({factory:function(t){return new(t||e)},providers:[p],imports:[[l.c]]}),e}()}}])}();
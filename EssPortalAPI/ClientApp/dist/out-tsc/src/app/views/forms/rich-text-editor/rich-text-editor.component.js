var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
let RichTextEditorComponent = class RichTextEditorComponent {
    constructor() {
        this.editorData = `<h1>Egret | Angular material admin</h1>
  <p><a href="http://devegret.com" target="_blank"><strong>DevEgret</strong></a></p>
  <p><br></p><p><strong >Lorem Ipsum</strong>
  <span>&nbsp;is simply dummy text of the printing and typesetting industry. 
  Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a 
  galley of type and scrambled it to make a type specimen book. It has survived not only five centuries</span></p>`;
    }
    ngOnInit() {
    }
    onContentChanged() { }
    onSelectionChanged() { }
};
RichTextEditorComponent = __decorate([
    Component({
        selector: 'app-rich-text-editor',
        templateUrl: './rich-text-editor.component.html',
        styleUrls: [
            './rich-text-editor.component.css'
        ]
    }),
    __metadata("design:paramtypes", [])
], RichTextEditorComponent);
export { RichTextEditorComponent };
//# sourceMappingURL=rich-text-editor.component.js.map
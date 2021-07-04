import { TestBed, waitForAsync } from '@angular/core/testing';
import { ExampleViewerTemplateComponent } from './example-viewer-template.component';
describe('ExampleViewerTemplateComponent', () => {
    let component;
    let fixture;
    beforeEach(waitForAsync(() => {
        TestBed.configureTestingModule({
            declarations: [ExampleViewerTemplateComponent]
        })
            .compileComponents();
    }));
    beforeEach(() => {
        fixture = TestBed.createComponent(ExampleViewerTemplateComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=example-viewer-template.component.spec.js.map
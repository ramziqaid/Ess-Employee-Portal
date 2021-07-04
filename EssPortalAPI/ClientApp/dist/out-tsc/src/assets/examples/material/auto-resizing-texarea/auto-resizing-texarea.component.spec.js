import { TestBed, waitForAsync } from '@angular/core/testing';
import { AutoResizingTexareaComponent } from './auto-resizing-texarea.component';
describe('AutoResizingTexareaComponent', () => {
    let component;
    let fixture;
    beforeEach(waitForAsync(() => {
        TestBed.configureTestingModule({
            declarations: [AutoResizingTexareaComponent]
        })
            .compileComponents();
    }));
    beforeEach(() => {
        fixture = TestBed.createComponent(AutoResizingTexareaComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=auto-resizing-texarea.component.spec.js.map
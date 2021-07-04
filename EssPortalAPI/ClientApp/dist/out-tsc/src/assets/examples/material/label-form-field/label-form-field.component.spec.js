import { TestBed, waitForAsync } from '@angular/core/testing';
import { LabelFormFieldComponent } from './label-form-field.component';
describe('LabelFormFieldComponent', () => {
    let component;
    let fixture;
    beforeEach(waitForAsync(() => {
        TestBed.configureTestingModule({
            declarations: [LabelFormFieldComponent]
        })
            .compileComponents();
    }));
    beforeEach(() => {
        fixture = TestBed.createComponent(LabelFormFieldComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=label-form-field.component.spec.js.map
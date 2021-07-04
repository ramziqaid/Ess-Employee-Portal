import { TestBed, waitForAsync } from '@angular/core/testing';
import { HintsFormFieldComponent } from './hints-form-field.component';
describe('HintsFormFieldComponent', () => {
    let component;
    let fixture;
    beforeEach(waitForAsync(() => {
        TestBed.configureTestingModule({
            declarations: [HintsFormFieldComponent]
        })
            .compileComponents();
    }));
    beforeEach(() => {
        fixture = TestBed.createComponent(HintsFormFieldComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=hints-form-field.component.spec.js.map
import { TestBed, waitForAsync } from '@angular/core/testing';
import { AppearanceFormFieldComponent } from './appearance-form-field.component';
describe('AppearanceFormFieldComponent', () => {
    let component;
    let fixture;
    beforeEach(waitForAsync(() => {
        TestBed.configureTestingModule({
            declarations: [AppearanceFormFieldComponent]
        })
            .compileComponents();
    }));
    beforeEach(() => {
        fixture = TestBed.createComponent(AppearanceFormFieldComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=appearance-form-field.component.spec.js.map
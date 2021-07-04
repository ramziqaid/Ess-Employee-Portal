import { TestBed, waitForAsync } from '@angular/core/testing';
import { PrefixSuffixFormFieldComponent } from './prefix-suffix-form-field.component';
describe('PrefixSuffixFormFieldComponent', () => {
    let component;
    let fixture;
    beforeEach(waitForAsync(() => {
        TestBed.configureTestingModule({
            declarations: [PrefixSuffixFormFieldComponent]
        })
            .compileComponents();
    }));
    beforeEach(() => {
        fixture = TestBed.createComponent(PrefixSuffixFormFieldComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=prefix-suffix-form-field.component.spec.js.map
import { TestBed, waitForAsync } from '@angular/core/testing';
import { OptionGroupAutocompleteComponent } from './option-group-autocomplete.component';
describe('OptionGroupAutocompleteComponent', () => {
    let component;
    let fixture;
    beforeEach(waitForAsync(() => {
        TestBed.configureTestingModule({
            declarations: [OptionGroupAutocompleteComponent]
        })
            .compileComponents();
    }));
    beforeEach(() => {
        fixture = TestBed.createComponent(OptionGroupAutocompleteComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=option-group-autocomplete.component.spec.js.map
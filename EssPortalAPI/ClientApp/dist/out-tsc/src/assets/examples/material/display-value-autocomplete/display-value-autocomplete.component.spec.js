import { TestBed, waitForAsync } from '@angular/core/testing';
import { DisplayValueAutocompleteComponent } from './display-value-autocomplete.component';
describe('DisplayValueAutocompleteComponent', () => {
    let component;
    let fixture;
    beforeEach(waitForAsync(() => {
        TestBed.configureTestingModule({
            declarations: [DisplayValueAutocompleteComponent]
        })
            .compileComponents();
    }));
    beforeEach(() => {
        fixture = TestBed.createComponent(DisplayValueAutocompleteComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=display-value-autocomplete.component.spec.js.map
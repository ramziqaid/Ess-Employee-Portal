import { TestBed, waitForAsync } from '@angular/core/testing';
import { HighlightFirstAutocompleteComponent } from './highlight-first-autocomplete.component';
describe('HighlightFirstAutocompleteComponent', () => {
    let component;
    let fixture;
    beforeEach(waitForAsync(() => {
        TestBed.configureTestingModule({
            declarations: [HighlightFirstAutocompleteComponent]
        })
            .compileComponents();
    }));
    beforeEach(() => {
        fixture = TestBed.createComponent(HighlightFirstAutocompleteComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=highlight-first-autocomplete.component.spec.js.map
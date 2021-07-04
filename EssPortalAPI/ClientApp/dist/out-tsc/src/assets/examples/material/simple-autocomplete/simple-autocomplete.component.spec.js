import { TestBed, waitForAsync } from '@angular/core/testing';
import { SimpleAutocompleteComponent } from './simple-autocomplete.component';
describe('SimpleAutocompleteComponent', () => {
    let component;
    let fixture;
    beforeEach(waitForAsync(() => {
        TestBed.configureTestingModule({
            declarations: [SimpleAutocompleteComponent]
        })
            .compileComponents();
    }));
    beforeEach(() => {
        fixture = TestBed.createComponent(SimpleAutocompleteComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=simple-autocomplete.component.spec.js.map
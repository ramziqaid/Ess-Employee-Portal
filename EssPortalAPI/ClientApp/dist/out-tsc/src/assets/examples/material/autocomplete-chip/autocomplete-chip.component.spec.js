import { TestBed, waitForAsync } from '@angular/core/testing';
import { AutocompleteChipComponent } from './autocomplete-chip.component';
describe('AutocompleteChipComponent', () => {
    let component;
    let fixture;
    beforeEach(waitForAsync(() => {
        TestBed.configureTestingModule({
            declarations: [AutocompleteChipComponent]
        })
            .compileComponents();
    }));
    beforeEach(() => {
        fixture = TestBed.createComponent(AutocompleteChipComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=autocomplete-chip.component.spec.js.map
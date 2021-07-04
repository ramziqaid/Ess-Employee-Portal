import { TestBed, waitForAsync } from '@angular/core/testing';
import { OptionGroupSelectComponent } from './option-group-select.component';
describe('OptionGroupSelectComponent', () => {
    let component;
    let fixture;
    beforeEach(waitForAsync(() => {
        TestBed.configureTestingModule({
            declarations: [OptionGroupSelectComponent]
        })
            .compileComponents();
    }));
    beforeEach(() => {
        fixture = TestBed.createComponent(OptionGroupSelectComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=option-group-select.component.spec.js.map
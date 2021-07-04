import { TestBed, waitForAsync } from '@angular/core/testing';
import { SelectedValueDatepickerComponent } from './selected-value-datepicker.component';
describe('SelectedValueDatepickerComponent', () => {
    let component;
    let fixture;
    beforeEach(waitForAsync(() => {
        TestBed.configureTestingModule({
            declarations: [SelectedValueDatepickerComponent]
        })
            .compileComponents();
    }));
    beforeEach(() => {
        fixture = TestBed.createComponent(SelectedValueDatepickerComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=selected-value-datepicker.component.spec.js.map
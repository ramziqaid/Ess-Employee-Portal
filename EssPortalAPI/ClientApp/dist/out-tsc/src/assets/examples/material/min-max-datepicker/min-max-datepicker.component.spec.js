import { TestBed, waitForAsync } from '@angular/core/testing';
import { MinMaxDatepickerComponent } from './min-max-datepicker.component';
describe('MinMaxDatepickerComponent', () => {
    let component;
    let fixture;
    beforeEach(waitForAsync(() => {
        TestBed.configureTestingModule({
            declarations: [MinMaxDatepickerComponent]
        })
            .compileComponents();
    }));
    beforeEach(() => {
        fixture = TestBed.createComponent(MinMaxDatepickerComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=min-max-datepicker.component.spec.js.map
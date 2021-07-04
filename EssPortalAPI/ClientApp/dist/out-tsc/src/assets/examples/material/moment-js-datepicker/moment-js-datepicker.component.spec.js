import { TestBed, waitForAsync } from '@angular/core/testing';
import { MomentJsDatepickerComponent } from './moment-js-datepicker.component';
describe('MomentJsDatepickerComponent', () => {
    let component;
    let fixture;
    beforeEach(waitForAsync(() => {
        TestBed.configureTestingModule({
            declarations: [MomentJsDatepickerComponent]
        })
            .compileComponents();
    }));
    beforeEach(() => {
        fixture = TestBed.createComponent(MomentJsDatepickerComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=moment-js-datepicker.component.spec.js.map
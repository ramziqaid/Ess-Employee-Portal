import { TestBed, waitForAsync } from '@angular/core/testing';
import { DifferentLocaleDatepickerComponent } from './different-locale-datepicker.component';
describe('DifferentLocaleDatepickerComponent', () => {
    let component;
    let fixture;
    beforeEach(waitForAsync(() => {
        TestBed.configureTestingModule({
            declarations: [DifferentLocaleDatepickerComponent]
        })
            .compileComponents();
    }));
    beforeEach(() => {
        fixture = TestBed.createComponent(DifferentLocaleDatepickerComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=different-locale-datepicker.component.spec.js.map
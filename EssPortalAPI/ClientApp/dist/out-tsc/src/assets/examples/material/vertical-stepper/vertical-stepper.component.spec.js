import { TestBed, waitForAsync } from '@angular/core/testing';
import { VerticalStepperComponent } from './vertical-stepper.component';
describe('VerticalStepperComponent', () => {
    let component;
    let fixture;
    beforeEach(waitForAsync(() => {
        TestBed.configureTestingModule({
            declarations: [VerticalStepperComponent]
        })
            .compileComponents();
    }));
    beforeEach(() => {
        fixture = TestBed.createComponent(VerticalStepperComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=vertical-stepper.component.spec.js.map
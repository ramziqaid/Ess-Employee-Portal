import { TestBed, waitForAsync } from '@angular/core/testing';
import { CustomizedStepperComponent } from './customized-stepper.component';
describe('CustomizedStepperComponent', () => {
    let component;
    let fixture;
    beforeEach(waitForAsync(() => {
        TestBed.configureTestingModule({
            declarations: [CustomizedStepperComponent]
        })
            .compileComponents();
    }));
    beforeEach(() => {
        fixture = TestBed.createComponent(CustomizedStepperComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=customized-stepper.component.spec.js.map
import { TestBed, waitForAsync } from '@angular/core/testing';
import { ErrorMessageInputComponent } from './error-message-input.component';
describe('ErrorMessageInputComponent', () => {
    let component;
    let fixture;
    beforeEach(waitForAsync(() => {
        TestBed.configureTestingModule({
            declarations: [ErrorMessageInputComponent]
        })
            .compileComponents();
    }));
    beforeEach(() => {
        fixture = TestBed.createComponent(ErrorMessageInputComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=error-message-input.component.spec.js.map
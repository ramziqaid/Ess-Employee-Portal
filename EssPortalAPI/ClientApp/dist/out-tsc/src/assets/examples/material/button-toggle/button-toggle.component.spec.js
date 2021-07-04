import { TestBed, waitForAsync } from '@angular/core/testing';
import { ButtonToggleComponent } from './button-toggle.component';
describe('ButtonToggleComponent', () => {
    let component;
    let fixture;
    beforeEach(waitForAsync(() => {
        TestBed.configureTestingModule({
            declarations: [ButtonToggleComponent]
        })
            .compileComponents();
    }));
    beforeEach(() => {
        fixture = TestBed.createComponent(ButtonToggleComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=button-toggle.component.spec.js.map
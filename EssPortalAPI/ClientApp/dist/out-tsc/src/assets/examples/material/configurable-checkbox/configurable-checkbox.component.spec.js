import { TestBed, waitForAsync } from '@angular/core/testing';
import { ConfigurableCheckboxComponent } from './configurable-checkbox.component';
describe('ConfigurableCheckboxComponent', () => {
    let component;
    let fixture;
    beforeEach(waitForAsync(() => {
        TestBed.configureTestingModule({
            declarations: [ConfigurableCheckboxComponent]
        })
            .compileComponents();
    }));
    beforeEach(() => {
        fixture = TestBed.createComponent(ConfigurableCheckboxComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=configurable-checkbox.component.spec.js.map
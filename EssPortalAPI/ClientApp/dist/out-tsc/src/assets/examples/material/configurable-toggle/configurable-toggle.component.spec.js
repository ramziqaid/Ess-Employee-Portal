import { TestBed, waitForAsync } from '@angular/core/testing';
import { ConfigurableToggleComponent } from './configurable-toggle.component';
describe('ConfigurableToggleComponent', () => {
    let component;
    let fixture;
    beforeEach(waitForAsync(() => {
        TestBed.configureTestingModule({
            declarations: [ConfigurableToggleComponent]
        })
            .compileComponents();
    }));
    beforeEach(() => {
        fixture = TestBed.createComponent(ConfigurableToggleComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=configurable-toggle.component.spec.js.map
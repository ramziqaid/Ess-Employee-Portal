import { TestBed, waitForAsync } from '@angular/core/testing';
import { ManualHideTooltipComponent } from './manual-hide-tooltip.component';
describe('ManualHideTooltipComponent', () => {
    let component;
    let fixture;
    beforeEach(waitForAsync(() => {
        TestBed.configureTestingModule({
            declarations: [ManualHideTooltipComponent]
        })
            .compileComponents();
    }));
    beforeEach(() => {
        fixture = TestBed.createComponent(ManualHideTooltipComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=manual-hide-tooltip.component.spec.js.map
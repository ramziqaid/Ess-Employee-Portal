import { TestBed, waitForAsync } from '@angular/core/testing';
import { AutoHideTooltipComponent } from './auto-hide-tooltip.component';
describe('AutoHideTooltipComponent', () => {
    let component;
    let fixture;
    beforeEach(waitForAsync(() => {
        TestBed.configureTestingModule({
            declarations: [AutoHideTooltipComponent]
        })
            .compileComponents();
    }));
    beforeEach(() => {
        fixture = TestBed.createComponent(AutoHideTooltipComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=auto-hide-tooltip.component.spec.js.map
import { TestBed, waitForAsync } from '@angular/core/testing';
import { DelayTooltipComponent } from './delay-tooltip.component';
describe('DelayTooltipComponent', () => {
    let component;
    let fixture;
    beforeEach(waitForAsync(() => {
        TestBed.configureTestingModule({
            declarations: [DelayTooltipComponent]
        })
            .compileComponents();
    }));
    beforeEach(() => {
        fixture = TestBed.createComponent(DelayTooltipComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=delay-tooltip.component.spec.js.map
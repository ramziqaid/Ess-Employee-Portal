import { TestBed, waitForAsync } from '@angular/core/testing';
import { ChangingTooltipComponent } from './changing-tooltip.component';
describe('ChangingTooltipComponent', () => {
    let component;
    let fixture;
    beforeEach(waitForAsync(() => {
        TestBed.configureTestingModule({
            declarations: [ChangingTooltipComponent]
        })
            .compileComponents();
    }));
    beforeEach(() => {
        fixture = TestBed.createComponent(ChangingTooltipComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=changing-tooltip.component.spec.js.map
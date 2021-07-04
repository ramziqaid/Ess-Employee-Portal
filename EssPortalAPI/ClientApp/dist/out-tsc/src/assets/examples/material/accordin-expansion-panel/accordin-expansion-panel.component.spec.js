import { TestBed, waitForAsync } from '@angular/core/testing';
import { AccordinExpansionPanelComponent } from './accordin-expansion-panel.component';
describe('AccordinExpansionPanelComponent', () => {
    let component;
    let fixture;
    beforeEach(waitForAsync(() => {
        TestBed.configureTestingModule({
            declarations: [AccordinExpansionPanelComponent]
        })
            .compileComponents();
    }));
    beforeEach(() => {
        fixture = TestBed.createComponent(AccordinExpansionPanelComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=accordin-expansion-panel.component.spec.js.map
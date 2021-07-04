import { TestBed, waitForAsync } from '@angular/core/testing';
import { BasicExpansionPanelComponent } from './basic-expansion-panel.component';
describe('BasicExpansionPanelComponent', () => {
    let component;
    let fixture;
    beforeEach(waitForAsync(() => {
        TestBed.configureTestingModule({
            declarations: [BasicExpansionPanelComponent]
        })
            .compileComponents();
    }));
    beforeEach(() => {
        fixture = TestBed.createComponent(BasicExpansionPanelComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=basic-expansion-panel.component.spec.js.map
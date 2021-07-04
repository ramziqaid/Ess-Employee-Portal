import { TestBed, waitForAsync } from '@angular/core/testing';
import { ScrollableDialogOverviewComponent } from './scrollable-dialog-overview.component';
describe('ScrollableDialogOverviewComponent', () => {
    let component;
    let fixture;
    beforeEach(waitForAsync(() => {
        TestBed.configureTestingModule({
            declarations: [ScrollableDialogOverviewComponent]
        })
            .compileComponents();
    }));
    beforeEach(() => {
        fixture = TestBed.createComponent(ScrollableDialogOverviewComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=scrollable-dialog-overview.component.spec.js.map
import { TestBed, waitForAsync } from '@angular/core/testing';
import { BottomSheetOverviewComponent } from './bottom-sheet-overview.component';
describe('BottomSheetOverviewComponent', () => {
    let component;
    let fixture;
    beforeEach(waitForAsync(() => {
        TestBed.configureTestingModule({
            declarations: [BottomSheetOverviewComponent]
        })
            .compileComponents();
    }));
    beforeEach(() => {
        fixture = TestBed.createComponent(BottomSheetOverviewComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=bottom-sheet-overview.component.spec.js.map
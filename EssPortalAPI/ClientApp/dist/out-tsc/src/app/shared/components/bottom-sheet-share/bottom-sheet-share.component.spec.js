import { TestBed, waitForAsync } from '@angular/core/testing';
import { BottomSheetShareComponent } from './bottom-sheet-share.component';
describe('BottomSheetShareComponent', () => {
    let component;
    let fixture;
    beforeEach(waitForAsync(() => {
        TestBed.configureTestingModule({
            declarations: [BottomSheetShareComponent]
        })
            .compileComponents();
    }));
    beforeEach(() => {
        fixture = TestBed.createComponent(BottomSheetShareComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=bottom-sheet-share.component.spec.js.map
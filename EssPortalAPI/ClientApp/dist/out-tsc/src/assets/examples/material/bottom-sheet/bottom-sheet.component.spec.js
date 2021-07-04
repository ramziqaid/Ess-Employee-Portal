import { TestBed, waitForAsync } from '@angular/core/testing';
import { BottomSheetComponent } from './bottom-sheet.component';
describe('BottomSheetComponent', () => {
    let component;
    let fixture;
    beforeEach(waitForAsync(() => {
        TestBed.configureTestingModule({
            declarations: [BottomSheetComponent]
        })
            .compileComponents();
    }));
    beforeEach(() => {
        fixture = TestBed.createComponent(BottomSheetComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=bottom-sheet.component.spec.js.map
import { TestBed, waitForAsync } from '@angular/core/testing';
import { ScrollableDialogComponent } from './scrollable-dialog.component';
describe('ScrollableDialogComponent', () => {
    let component;
    let fixture;
    beforeEach(waitForAsync(() => {
        TestBed.configureTestingModule({
            declarations: [ScrollableDialogComponent]
        })
            .compileComponents();
    }));
    beforeEach(() => {
        fixture = TestBed.createComponent(ScrollableDialogComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=scrollable-dialog.component.spec.js.map
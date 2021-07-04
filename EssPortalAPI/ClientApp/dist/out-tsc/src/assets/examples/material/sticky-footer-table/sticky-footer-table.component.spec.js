import { TestBed, waitForAsync } from '@angular/core/testing';
import { StickyFooterTableComponent } from './sticky-footer-table.component';
describe('StickyFooterTableComponent', () => {
    let component;
    let fixture;
    beforeEach(waitForAsync(() => {
        TestBed.configureTestingModule({
            declarations: [StickyFooterTableComponent]
        })
            .compileComponents();
    }));
    beforeEach(() => {
        fixture = TestBed.createComponent(StickyFooterTableComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=sticky-footer-table.component.spec.js.map
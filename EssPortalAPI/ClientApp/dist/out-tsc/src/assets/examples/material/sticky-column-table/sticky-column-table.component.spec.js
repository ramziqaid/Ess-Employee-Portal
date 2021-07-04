import { TestBed, waitForAsync } from '@angular/core/testing';
import { StickyColumnTableComponent } from './sticky-column-table.component';
describe('StickyColumnTableComponent', () => {
    let component;
    let fixture;
    beforeEach(waitForAsync(() => {
        TestBed.configureTestingModule({
            declarations: [StickyColumnTableComponent]
        })
            .compileComponents();
    }));
    beforeEach(() => {
        fixture = TestBed.createComponent(StickyColumnTableComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=sticky-column-table.component.spec.js.map
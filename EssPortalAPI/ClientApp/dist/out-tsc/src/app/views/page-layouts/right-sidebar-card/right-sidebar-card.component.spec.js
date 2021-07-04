import { TestBed, waitForAsync } from '@angular/core/testing';
import { RightSidebarCardComponent } from './right-sidebar-card.component';
describe('RightSidebarCardComponent', () => {
    let component;
    let fixture;
    beforeEach(waitForAsync(() => {
        TestBed.configureTestingModule({
            declarations: [RightSidebarCardComponent]
        })
            .compileComponents();
    }));
    beforeEach(() => {
        fixture = TestBed.createComponent(RightSidebarCardComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=right-sidebar-card.component.spec.js.map
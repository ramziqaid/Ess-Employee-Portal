import { TestBed, waitForAsync } from '@angular/core/testing';
import { LeftSidebarPlainComponent } from './left-sidebar-plain.component';
describe('LeftSidebarPlainComponent', () => {
    let component;
    let fixture;
    beforeEach(waitForAsync(() => {
        TestBed.configureTestingModule({
            declarations: [LeftSidebarPlainComponent]
        })
            .compileComponents();
    }));
    beforeEach(() => {
        fixture = TestBed.createComponent(LeftSidebarPlainComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=left-sidebar-plain.component.spec.js.map
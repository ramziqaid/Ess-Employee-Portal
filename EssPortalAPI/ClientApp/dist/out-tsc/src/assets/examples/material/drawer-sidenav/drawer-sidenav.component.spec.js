import { TestBed, waitForAsync } from '@angular/core/testing';
import { DrawerSidenavComponent } from './drawer-sidenav.component';
describe('DrawerSidenavComponent', () => {
    let component;
    let fixture;
    beforeEach(waitForAsync(() => {
        TestBed.configureTestingModule({
            declarations: [DrawerSidenavComponent]
        })
            .compileComponents();
    }));
    beforeEach(() => {
        fixture = TestBed.createComponent(DrawerSidenavComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=drawer-sidenav.component.spec.js.map
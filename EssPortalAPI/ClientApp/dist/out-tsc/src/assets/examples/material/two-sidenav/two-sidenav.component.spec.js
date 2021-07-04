import { TestBed, waitForAsync } from '@angular/core/testing';
import { TwoSidenavComponent } from './two-sidenav.component';
describe('TwoSidenavComponent', () => {
    let component;
    let fixture;
    beforeEach(waitForAsync(() => {
        TestBed.configureTestingModule({
            declarations: [TwoSidenavComponent]
        })
            .compileComponents();
    }));
    beforeEach(() => {
        fixture = TestBed.createComponent(TwoSidenavComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=two-sidenav.component.spec.js.map
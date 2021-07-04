import { TestBed, waitForAsync } from '@angular/core/testing';
import { OpenCloseSidenavComponent } from './open-close-sidenav.component';
describe('OpenCloseSidenavComponent', () => {
    let component;
    let fixture;
    beforeEach(waitForAsync(() => {
        TestBed.configureTestingModule({
            declarations: [OpenCloseSidenavComponent]
        })
            .compileComponents();
    }));
    beforeEach(() => {
        fixture = TestBed.createComponent(OpenCloseSidenavComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=open-close-sidenav.component.spec.js.map
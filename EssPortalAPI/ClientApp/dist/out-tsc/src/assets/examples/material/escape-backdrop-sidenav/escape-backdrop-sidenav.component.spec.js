import { TestBed, waitForAsync } from '@angular/core/testing';
import { EscapeBackdropSidenavComponent } from './escape-backdrop-sidenav.component';
describe('EscapeBackdropSidenavComponent', () => {
    let component;
    let fixture;
    beforeEach(waitForAsync(() => {
        TestBed.configureTestingModule({
            declarations: [EscapeBackdropSidenavComponent]
        })
            .compileComponents();
    }));
    beforeEach(() => {
        fixture = TestBed.createComponent(EscapeBackdropSidenavComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=escape-backdrop-sidenav.component.spec.js.map
import { TestBed, waitForAsync } from '@angular/core/testing';
import { ResponsiveSidenavComponent } from './responsive-sidenav.component';
describe('ResponsiveSidenavComponent', () => {
    let component;
    let fixture;
    beforeEach(waitForAsync(() => {
        TestBed.configureTestingModule({
            declarations: [ResponsiveSidenavComponent]
        })
            .compileComponents();
    }));
    beforeEach(() => {
        fixture = TestBed.createComponent(ResponsiveSidenavComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=responsive-sidenav.component.spec.js.map
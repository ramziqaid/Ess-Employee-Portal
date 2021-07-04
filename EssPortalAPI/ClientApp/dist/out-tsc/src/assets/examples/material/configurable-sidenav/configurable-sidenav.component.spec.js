import { TestBed, waitForAsync } from '@angular/core/testing';
import { ConfigurableSidenavComponent } from './configurable-sidenav.component';
describe('ConfigurableSidenavComponent', () => {
    let component;
    let fixture;
    beforeEach(waitForAsync(() => {
        TestBed.configureTestingModule({
            declarations: [ConfigurableSidenavComponent]
        })
            .compileComponents();
    }));
    beforeEach(() => {
        fixture = TestBed.createComponent(ConfigurableSidenavComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=configurable-sidenav.component.spec.js.map
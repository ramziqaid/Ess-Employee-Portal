import { TestBed, waitForAsync } from '@angular/core/testing';
import { DefaultDashboardComponent } from './default-dashboard.component';
describe('DefaultDashboardComponent', () => {
    let component;
    let fixture;
    beforeEach(waitForAsync(() => {
        TestBed.configureTestingModule({
            declarations: [DefaultDashboardComponent]
        })
            .compileComponents();
    }));
    beforeEach(() => {
        fixture = TestBed.createComponent(DefaultDashboardComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=default-dashboard.component.spec.js.map
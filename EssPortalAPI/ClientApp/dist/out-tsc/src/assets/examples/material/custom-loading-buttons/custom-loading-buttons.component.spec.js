import { TestBed, waitForAsync } from '@angular/core/testing';
import { CustomLoadingButtonsComponent } from './custom-loading-buttons.component';
describe('CustomLoadingButtonsComponent', () => {
    let component;
    let fixture;
    beforeEach(waitForAsync(() => {
        TestBed.configureTestingModule({
            declarations: [CustomLoadingButtonsComponent]
        })
            .compileComponents();
    }));
    beforeEach(() => {
        fixture = TestBed.createComponent(CustomLoadingButtonsComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=custom-loading-buttons.component.spec.js.map
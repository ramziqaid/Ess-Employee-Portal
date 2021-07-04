import { TestBed, waitForAsync } from '@angular/core/testing';
import { ButtonLoadingComponent } from './button-loading.component';
describe('ButtonLoadingComponent', () => {
    let component;
    let fixture;
    beforeEach(waitForAsync(() => {
        TestBed.configureTestingModule({
            declarations: [ButtonLoadingComponent]
        })
            .compileComponents();
    }));
    beforeEach(() => {
        fixture = TestBed.createComponent(ButtonLoadingComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=button-loading.component.spec.js.map
import { TestBed, waitForAsync } from '@angular/core/testing';
import { FullWidthPlainComponent } from './full-width-plain.component';
describe('FullWidthPlainComponent', () => {
    let component;
    let fixture;
    beforeEach(waitForAsync(() => {
        TestBed.configureTestingModule({
            declarations: [FullWidthPlainComponent]
        })
            .compileComponents();
    }));
    beforeEach(() => {
        fixture = TestBed.createComponent(FullWidthPlainComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=full-width-plain.component.spec.js.map
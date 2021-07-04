import { TestBed, waitForAsync } from '@angular/core/testing';
import { IndeterminateBarComponent } from './indeterminate-bar.component';
describe('IndeterminateBarComponent', () => {
    let component;
    let fixture;
    beforeEach(waitForAsync(() => {
        TestBed.configureTestingModule({
            declarations: [IndeterminateBarComponent]
        })
            .compileComponents();
    }));
    beforeEach(() => {
        fixture = TestBed.createComponent(IndeterminateBarComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=indeterminate-bar.component.spec.js.map
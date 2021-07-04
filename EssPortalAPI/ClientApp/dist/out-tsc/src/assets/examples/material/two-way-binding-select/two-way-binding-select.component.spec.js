import { TestBed, waitForAsync } from '@angular/core/testing';
import { TwoWayBindingSelectComponent } from './two-way-binding-select.component';
describe('TwoWayBindingSelectComponent', () => {
    let component;
    let fixture;
    beforeEach(waitForAsync(() => {
        TestBed.configureTestingModule({
            declarations: [TwoWayBindingSelectComponent]
        })
            .compileComponents();
    }));
    beforeEach(() => {
        fixture = TestBed.createComponent(TwoWayBindingSelectComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=two-way-binding-select.component.spec.js.map
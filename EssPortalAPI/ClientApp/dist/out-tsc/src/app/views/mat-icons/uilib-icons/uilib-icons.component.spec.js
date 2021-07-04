import { TestBed, waitForAsync } from '@angular/core/testing';
import { UILibIconsComponent } from './uilib-icons.component';
describe('UILibIconsComponent', () => {
    let component;
    let fixture;
    beforeEach(waitForAsync(() => {
        TestBed.configureTestingModule({
            declarations: [UILibIconsComponent]
        })
            .compileComponents();
    }));
    beforeEach(() => {
        fixture = TestBed.createComponent(UILibIconsComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=uilib-icons.component.spec.js.map
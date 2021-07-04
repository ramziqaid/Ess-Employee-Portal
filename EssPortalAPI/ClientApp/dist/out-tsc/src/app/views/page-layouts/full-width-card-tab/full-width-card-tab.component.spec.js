import { TestBed, waitForAsync } from '@angular/core/testing';
import { FullWidthCardTabComponent } from './full-width-card-tab.component';
describe('FullWidthCardTabComponent', () => {
    let component;
    let fixture;
    beforeEach(waitForAsync(() => {
        TestBed.configureTestingModule({
            declarations: [FullWidthCardTabComponent]
        })
            .compileComponents();
    }));
    beforeEach(() => {
        fixture = TestBed.createComponent(FullWidthCardTabComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=full-width-card-tab.component.spec.js.map
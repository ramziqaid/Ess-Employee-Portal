import { TestBed, waitForAsync } from '@angular/core/testing';
import { FullWidthCardComponent } from './full-width-card.component';
describe('FullWidthCardComponent', () => {
    let component;
    let fixture;
    beforeEach(waitForAsync(() => {
        TestBed.configureTestingModule({
            declarations: [FullWidthCardComponent]
        })
            .compileComponents();
    }));
    beforeEach(() => {
        fixture = TestBed.createComponent(FullWidthCardComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=full-width-card.component.spec.js.map
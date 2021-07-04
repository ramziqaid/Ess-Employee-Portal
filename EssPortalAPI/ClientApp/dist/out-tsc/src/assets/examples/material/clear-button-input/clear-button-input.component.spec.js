import { TestBed, waitForAsync } from '@angular/core/testing';
import { ClearButtonInputComponent } from './clear-button-input.component';
describe('ClearButtonInputComponent', () => {
    let component;
    let fixture;
    beforeEach(waitForAsync(() => {
        TestBed.configureTestingModule({
            declarations: [ClearButtonInputComponent]
        })
            .compileComponents();
    }));
    beforeEach(() => {
        fixture = TestBed.createComponent(ClearButtonInputComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=clear-button-input.component.spec.js.map
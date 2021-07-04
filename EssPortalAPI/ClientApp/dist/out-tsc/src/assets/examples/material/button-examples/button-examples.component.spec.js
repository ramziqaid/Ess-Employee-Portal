import { TestBed, waitForAsync } from '@angular/core/testing';
import { ButtonExamplesComponent } from './button-examples.component';
describe('ButtonExamplesComponent', () => {
    let component;
    let fixture;
    beforeEach(waitForAsync(() => {
        TestBed.configureTestingModule({
            declarations: [ButtonExamplesComponent]
        })
            .compileComponents();
    }));
    beforeEach(() => {
        fixture = TestBed.createComponent(ButtonExamplesComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=button-examples.component.spec.js.map
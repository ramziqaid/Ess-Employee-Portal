import { TestBed, waitForAsync } from '@angular/core/testing';
import { CheckboxTreeComponent } from './checkbox-tree.component';
describe('CheckboxTreeComponent', () => {
    let component;
    let fixture;
    beforeEach(waitForAsync(() => {
        TestBed.configureTestingModule({
            declarations: [CheckboxTreeComponent]
        })
            .compileComponents();
    }));
    beforeEach(() => {
        fixture = TestBed.createComponent(CheckboxTreeComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=checkbox-tree.component.spec.js.map
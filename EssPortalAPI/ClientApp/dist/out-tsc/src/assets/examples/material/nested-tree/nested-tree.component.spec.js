import { TestBed, waitForAsync } from '@angular/core/testing';
import { NestedTreeComponent } from './nested-tree.component';
describe('NestedTreeComponent', () => {
    let component;
    let fixture;
    beforeEach(waitForAsync(() => {
        TestBed.configureTestingModule({
            declarations: [NestedTreeComponent]
        })
            .compileComponents();
    }));
    beforeEach(() => {
        fixture = TestBed.createComponent(NestedTreeComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=nested-tree.component.spec.js.map
import { TestBed, waitForAsync } from '@angular/core/testing';
import { AlignTabGroupComponent } from './align-tab-group.component';
describe('AlignTabGroupComponent', () => {
    let component;
    let fixture;
    beforeEach(waitForAsync(() => {
        TestBed.configureTestingModule({
            declarations: [AlignTabGroupComponent]
        })
            .compileComponents();
    }));
    beforeEach(() => {
        fixture = TestBed.createComponent(AlignTabGroupComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=align-tab-group.component.spec.js.map
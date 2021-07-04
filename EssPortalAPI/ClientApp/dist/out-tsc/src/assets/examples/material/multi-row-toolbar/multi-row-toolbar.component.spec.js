import { TestBed, waitForAsync } from '@angular/core/testing';
import { MultiRowToolbarComponent } from './multi-row-toolbar.component';
describe('MultiRowToolbarComponent', () => {
    let component;
    let fixture;
    beforeEach(waitForAsync(() => {
        TestBed.configureTestingModule({
            declarations: [MultiRowToolbarComponent]
        })
            .compileComponents();
    }));
    beforeEach(() => {
        fixture = TestBed.createComponent(MultiRowToolbarComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=multi-row-toolbar.component.spec.js.map
import { TestBed, waitForAsync } from '@angular/core/testing';
import { FilterDatepickerComponent } from './filter-datepicker.component';
describe('FilterDatepickerComponent', () => {
    let component;
    let fixture;
    beforeEach(waitForAsync(() => {
        TestBed.configureTestingModule({
            declarations: [FilterDatepickerComponent]
        })
            .compileComponents();
    }));
    beforeEach(() => {
        fixture = TestBed.createComponent(FilterDatepickerComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=filter-datepicker.component.spec.js.map
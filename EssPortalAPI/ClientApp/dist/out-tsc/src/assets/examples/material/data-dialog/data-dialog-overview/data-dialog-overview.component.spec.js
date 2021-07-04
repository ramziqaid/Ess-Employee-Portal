import { TestBed, waitForAsync } from '@angular/core/testing';
import { DataDialogOverviewComponent } from './data-dialog-overview.component';
describe('DataDialogOverviewComponent', () => {
    let component;
    let fixture;
    beforeEach(waitForAsync(() => {
        TestBed.configureTestingModule({
            declarations: [DataDialogOverviewComponent]
        })
            .compileComponents();
    }));
    beforeEach(() => {
        fixture = TestBed.createComponent(DataDialogOverviewComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=data-dialog-overview.component.spec.js.map
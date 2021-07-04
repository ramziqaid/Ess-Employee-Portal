import { TestBed, waitForAsync } from '@angular/core/testing';
import { CustomSnackbarComponent } from './custom-snackbar.component';
describe('CustomSnackbarComponent', () => {
    let component;
    let fixture;
    beforeEach(waitForAsync(() => {
        TestBed.configureTestingModule({
            declarations: [CustomSnackbarComponent]
        })
            .compileComponents();
    }));
    beforeEach(() => {
        fixture = TestBed.createComponent(CustomSnackbarComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=custom-snackbar.component.spec.js.map
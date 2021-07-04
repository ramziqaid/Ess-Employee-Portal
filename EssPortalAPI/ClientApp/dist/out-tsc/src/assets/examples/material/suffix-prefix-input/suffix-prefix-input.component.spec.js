import { TestBed, waitForAsync } from '@angular/core/testing';
import { SuffixPrefixInputComponent } from './suffix-prefix-input.component';
describe('SuffixPrefixInputComponent', () => {
    let component;
    let fixture;
    beforeEach(waitForAsync(() => {
        TestBed.configureTestingModule({
            declarations: [SuffixPrefixInputComponent]
        })
            .compileComponents();
    }));
    beforeEach(() => {
        fixture = TestBed.createComponent(SuffixPrefixInputComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=suffix-prefix-input.component.spec.js.map
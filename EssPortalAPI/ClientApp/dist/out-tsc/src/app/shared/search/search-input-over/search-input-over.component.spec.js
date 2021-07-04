import { TestBed, waitForAsync } from '@angular/core/testing';
import { SearchInputOverComponent } from './search-input-over.component';
describe('SearchInputOverComponent', () => {
    let component;
    let fixture;
    beforeEach(waitForAsync(() => {
        TestBed.configureTestingModule({
            declarations: [SearchInputOverComponent]
        })
            .compileComponents();
    }));
    beforeEach(() => {
        fixture = TestBed.createComponent(SearchInputOverComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=search-input-over.component.spec.js.map
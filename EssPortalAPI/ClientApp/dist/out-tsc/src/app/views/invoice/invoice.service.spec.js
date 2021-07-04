import { TestBed } from '@angular/core/testing';
import { InvoiceService } from './invoice.service';
describe('InvoiceService', () => {
    beforeEach(() => TestBed.configureTestingModule({}));
    it('should be created', () => {
        const service = TestBed.get(InvoiceService);
        expect(service).toBeTruthy();
    });
});
//# sourceMappingURL=invoice.service.spec.js.map
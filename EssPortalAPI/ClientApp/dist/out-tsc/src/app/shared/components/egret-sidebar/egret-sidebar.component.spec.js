import { TestBed, waitForAsync } from '@angular/core/testing';
import { EgretSidebarComponent } from './egret-sidebar.component';
describe('EgretSidebarComponent', () => {
    let component;
    let fixture;
    beforeEach(waitForAsync(() => {
        TestBed.configureTestingModule({
            declarations: [EgretSidebarComponent]
        })
            .compileComponents();
    }));
    beforeEach(() => {
        fixture = TestBed.createComponent(EgretSidebarComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=egret-sidebar.component.spec.js.map
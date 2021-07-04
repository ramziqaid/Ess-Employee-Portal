import { TestBed, waitForAsync } from '@angular/core/testing';
import { EchartRadarComponent } from './echart-radar.component';
describe('EchartRadarComponent', () => {
    let component;
    let fixture;
    beforeEach(waitForAsync(() => {
        TestBed.configureTestingModule({
            declarations: [EchartRadarComponent]
        })
            .compileComponents();
    }));
    beforeEach(() => {
        fixture = TestBed.createComponent(EchartRadarComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=echart-radar.component.spec.js.map
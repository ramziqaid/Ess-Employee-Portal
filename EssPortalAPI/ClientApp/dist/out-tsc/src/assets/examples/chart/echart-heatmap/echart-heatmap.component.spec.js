import { TestBed, waitForAsync } from '@angular/core/testing';
import { EchartHeatmapComponent } from './echart-heatmap.component';
describe('EchartHeatmapComponent', () => {
    let component;
    let fixture;
    beforeEach(waitForAsync(() => {
        TestBed.configureTestingModule({
            declarations: [EchartHeatmapComponent]
        })
            .compileComponents();
    }));
    beforeEach(() => {
        fixture = TestBed.createComponent(EchartHeatmapComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=echart-heatmap.component.spec.js.map
import { TestBed, waitForAsync } from '@angular/core/testing';
import { TagDialogueComponent } from './tag-dialogue.component';
describe('TagDialogueComponent', () => {
    let component;
    let fixture;
    beforeEach(waitForAsync(() => {
        TestBed.configureTestingModule({
            declarations: [TagDialogueComponent]
        })
            .compileComponents();
    }));
    beforeEach(() => {
        fixture = TestBed.createComponent(TagDialogueComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=tag-dialogue.component.spec.js.map
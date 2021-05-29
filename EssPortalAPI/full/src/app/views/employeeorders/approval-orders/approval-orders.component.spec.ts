import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApprovalOrdersComponent } from './approval-orders.component';

describe('ApprovalOrdersComponent', () => {
  let component: ApprovalOrdersComponent;
  let fixture: ComponentFixture<ApprovalOrdersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApprovalOrdersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApprovalOrdersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderDashBoardComponent } from './order-dash-board.component';

describe('OrderDashBoardComponent', () => {
  let component: OrderDashBoardComponent;
  let fixture: ComponentFixture<OrderDashBoardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrderDashBoardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderDashBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

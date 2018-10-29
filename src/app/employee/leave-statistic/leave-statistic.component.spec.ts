import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LeaveStatisticComponent } from './leave-statistic.component';

describe('LeaveStatisticComponent', () => {
  let component: LeaveStatisticComponent;
  let fixture: ComponentFixture<LeaveStatisticComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LeaveStatisticComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LeaveStatisticComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

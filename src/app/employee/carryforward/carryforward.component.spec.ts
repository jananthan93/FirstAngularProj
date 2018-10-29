import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarryforwardComponent } from './carryforward.component';

describe('CarryforwardComponent', () => {
  let component: CarryforwardComponent;
  let fixture: ComponentFixture<CarryforwardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarryforwardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarryforwardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

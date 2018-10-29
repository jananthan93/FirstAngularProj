import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminCarryfowardComponent } from './admin-carryfoward.component';

describe('AdminCarryfowardComponent', () => {
  let component: AdminCarryfowardComponent;
  let fixture: ComponentFixture<AdminCarryfowardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminCarryfowardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminCarryfowardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

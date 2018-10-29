import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewLeaverequestComponent } from './view-leaverequest.component';

describe('ViewLeaverequestComponent', () => {
  let component: ViewLeaverequestComponent;
  let fixture: ComponentFixture<ViewLeaverequestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewLeaverequestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewLeaverequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

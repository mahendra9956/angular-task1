import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashbordChildComponent } from './dashbord-child.component';

describe('DashbordChildComponent', () => {
  let component: DashbordChildComponent;
  let fixture: ComponentFixture<DashbordChildComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DashbordChildComponent]
    });
    fixture = TestBed.createComponent(DashbordChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

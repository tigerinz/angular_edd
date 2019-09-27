import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SetCostIdComponent } from './set-cost-id.component';

describe('SetCostIdComponent', () => {
  let component: SetCostIdComponent;
  let fixture: ComponentFixture<SetCostIdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SetCostIdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SetCostIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UnCloseCostPeriodComponent } from './un-close-cost-period.component';

describe('UnCloseCostPeriodComponent', () => {
  let component: UnCloseCostPeriodComponent;
  let fixture: ComponentFixture<UnCloseCostPeriodComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UnCloseCostPeriodComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UnCloseCostPeriodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

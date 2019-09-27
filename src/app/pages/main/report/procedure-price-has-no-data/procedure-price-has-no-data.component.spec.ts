import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProcedurePriceHasNoDataComponent } from './procedure-price-has-no-data.component';

describe('ProcedurePriceHasNoDataComponent', () => {
  let component: ProcedurePriceHasNoDataComponent;
  let fixture: ComponentFixture<ProcedurePriceHasNoDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProcedurePriceHasNoDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProcedurePriceHasNoDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

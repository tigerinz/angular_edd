import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EquipmentUnitPriceAndStopComponent } from './equipment-unit-price-and-stop.component';

describe('EquipmentUnitPriceAndStopComponent', () => {
  let component: EquipmentUnitPriceAndStopComponent;
  let fixture: ComponentFixture<EquipmentUnitPriceAndStopComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EquipmentUnitPriceAndStopComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EquipmentUnitPriceAndStopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

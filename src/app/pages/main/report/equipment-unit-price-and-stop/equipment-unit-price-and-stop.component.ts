import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { Equipmentunitpriceandstop } from 'src/app/entities/equipmentunitpriceandstop';

@Component({
  selector: 'app-equipment-unit-price-and-stop',
  templateUrl: './equipment-unit-price-and-stop.component.html',
  styleUrls: ['./equipment-unit-price-and-stop.component.less']
})
export class EquipmentUnitPriceAndStopComponent implements OnInit {
  eData: Equipmentunitpriceandstop[];

  yearMonths = ['201901', '201902', '201903', '201904' ];
  yearMonth;
  constructor(private data: DataService) {
    this.eData = data.getEquipmentUnitPriceAndStops();
  }

  ngOnInit() {
  }

  query(): void {

  }
}

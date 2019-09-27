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

  yearMonth = new Date('2019-09');
  constructor(private data: DataService) { 
    this.eData = data.getEquipmentUnitPriceAndStops();
  }

  ngOnInit() {
  }

  query(): void {

  }
}

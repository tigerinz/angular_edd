import { Injectable } from '@angular/core';
import { Equipmentunitpriceandstop } from '../entities/equipmentunitpriceandstop';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  constructor() { }

  getEquipmentUnitPriceAndStops(): Equipmentunitpriceandstop[] {
    return [
      {
        assetName:"立式加工中心",
      stopHours: 524.5,
      epsid: 37,
      totalWorkHours: 22.5,
      epsCreateDate: new Date("2019-05-28 10:40:06.0"),
      ethid:11,
      unitPrice:2.1256306,
      eQCode:"HF-08",
      eQId:7,
      stopPrice:1114.8933,
      assetNum:"0200008",
      depreciation:1162.72,
      eQName:"立式加工中心",
      month:4,
      year:2018,
      ethCreateDate: new Date("2019-05-28 10:40:03.0")
    },
      {
        assetName:"立式加工中心",
      stopHours:524.5,
      epsid:37,
      totalWorkHours:22.5,
      epsCreateDate:new Date("2019-05-28 10:40:06.0"),
      ethid:11,
      unitPrice:2.1256306,
      eQCode:"HF-08",
      eQId:7,
      stopPrice:1114.8933,
      assetNum:"0200008",
      depreciation:1162.72,
      eQName:"立式加工中心",
      month:4,
      year:2018,
      ethCreateDate: new Date("2019-05-28 10:40:03.0")
    }
      ]
      ;
  }
}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-equipment-unit-price-and-stop',
  templateUrl: './equipment-unit-price-and-stop.component.html',
  styleUrls: ['./equipment-unit-price-and-stop.component.less']
})
export class EquipmentUnitPriceAndStopComponent implements OnInit {
  listOfData = [
    {
      key: '1',
      name: 'John Brown',
      age: 32,
      address: 'New York No. 1 Lake Park'
    },
    {
      key: '2',
      name: 'Jim Green',
      age: 42,
      address: 'London No. 1 Lake Park'
    },
    {
      key: '3',
      name: 'Joe Black',
      age: 32,
      address: 'Sidney No. 1 Lake Park'
    }
  ];

  yearMonth = new Date('2019-09');
  constructor() { }

  ngOnInit() {
  }

  query(): void {

  }
}

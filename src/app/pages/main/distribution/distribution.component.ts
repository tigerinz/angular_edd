import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-distribution',
  templateUrl: './distribution.component.html',
  styleUrls: ['./distribution.component.less']
})
export class DistributionComponent implements OnInit {

  current = 0;
  // status = 'error';
  period;
  checkCostStatus = 'wait' ;
  checkDepreciationStatus = 'wait' ;
  checkWorkHourDateReportStatus = 'wait';
  distributionStatus = 'wait';
  constructor() { }

  ngOnInit() {
  }

  pre(): void {
    //this.check();
    this.current -= 1;
  }

  next(): void {
  //this.check();
  this.current += 1;
  }

  done(): void {
    //this.check();
    console.log('done');
  }

  check(): void {
    switch (this.current) {
      case 0 : {
        this.checkCostOver();
        break;
      }
      case 1 : {
        this.checkDepreciationOver();
        break;
      }
      case 2 : {
        this.checkWorkHourDateReport();
        break;
      }
      case 3 : {
        this.distributionDepreciation();
        break;
      }
       default : {
        this.current = 0;
      }
    }
  }


  checkCostOver(): void {
    this.checkCostStatus = 'finish';
    //this.status = 'finish';
  }

  checkDepreciationOver(): void {
    this.checkDepreciationStatus = 'error';
    //this.status = 'finish';
  }

  checkWorkHourDateReport(): void {
    this.checkWorkHourDateReportStatus = 'finish';
    //this.status = 'error';
  }

  distributionDepreciation(): void {
    this.distributionStatus = 'error';
  }
}

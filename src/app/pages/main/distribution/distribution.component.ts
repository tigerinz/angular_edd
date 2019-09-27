import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-distribution',
  templateUrl: './distribution.component.html',
  styleUrls: ['./distribution.component.less']
})
export class DistributionComponent implements OnInit {

  current = 0;
  status = 'error';
  period;
  checkCostStatus = 'null' ;
  checkDepreciationStatus = 'null' ;
  checkWorkHourDateReportStatus = 'null';
  distributionStatus = 'null';
  constructor() { }

  ngOnInit() {
  }

  pre(): void {
    this.check();
    this.current -= 1;
  }

  next(): void {
   if ( this.check()) {
     this.current += 1;
   }
  }

  done(): void {
    console.log('done');
  }

  check(): boolean {
    switch (this.current) {
      case 0 : {
        if ( this.checkCostOverResult !== 'ok' ) {
          return false;
        }
        return true;
        break;
      }
      case 1 : {
        if ( this.checkDepreciationOverResult !== 'ok' ) {
          this.current = 1;
        }
        break;
      }
      case 2 : {
        this.current = 0;
        break;
      }
      case 3 : {
        this.current = 0;
        break;
      }
       default : {
        this.current = 0;
      }
    }
  }


  checkCostOver(): void {
    this.checkCostOverResult = 'ok';
    this.status = 'finish';
  }

  checkDepreciationOver(): void {
    this.checkDepreciationOverResult = 'ok';
    this.status = 'finish';
  }

  checkWorkHourDateReport(): void {
    this.checkWorkHourDateReportResult = 'no';
    this.status = 'error';
  }
}

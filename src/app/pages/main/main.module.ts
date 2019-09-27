import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { NgZorroAntdModule } from 'ng-zorro-antd';

import { MainRoutingModule } from './main-routing-module';
import { MainComponent } from './main.component';
import { DesktopComponent } from './desktop/desktop.component';

// setting
import { SetCostIdComponent } from './setting/set-cost-id/set-cost-id.component';
import { SetDatabaseComponent } from './setting/set-database/set-database.component';

// report
import { DistributionComponent } from './distribution/distribution.component';
import { EquipmentUnitPriceAndStopComponent } from './report/equipment-unit-price-and-stop/equipment-unit-price-and-stop.component';
import { ProcedurePriceHasNoDataComponent } from './report/procedure-price-has-no-data/procedure-price-has-no-data.component';
import { UnCloseCostPeriodComponent } from './report/un-close-cost-period/un-close-cost-period.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';




@NgModule({
  declarations: [
    MainComponent,
    DesktopComponent,
    SetCostIdComponent,
    SetDatabaseComponent,
    DistributionComponent,
    EquipmentUnitPriceAndStopComponent,
    ProcedurePriceHasNoDataComponent,
    UnCloseCostPeriodComponent
  ],
  imports: [
    CommonModule,
    NgZorroAntdModule,
    RouterModule,
    MainRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class MainModule { }

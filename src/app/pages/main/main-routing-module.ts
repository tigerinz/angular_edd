import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MainComponent } from './main.component';
import { DesktopComponent } from './desktop/desktop.component';

// setting
import { SetCostIdComponent } from './setting/set-cost-id/set-cost-id.component';
import { SetDatabaseComponent } from './setting/set-database/set-database.component';

import { DistributionComponent } from './distribution/distribution.component';

import { EquipmentUnitPriceAndStopComponent } from './report/equipment-unit-price-and-stop/equipment-unit-price-and-stop.component';
import { ProcedurePriceHasNoDataComponent } from './report/procedure-price-has-no-data/procedure-price-has-no-data.component';
import { UnCloseCostPeriodComponent } from './report/un-close-cost-period/un-close-cost-period.component';




const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [
      { path: 'desktop', component: DesktopComponent },
      { path: 'setCostId', component: SetCostIdComponent },
      { path: 'setDataBase', component: SetDatabaseComponent },
      { path: 'distribution', component: DistributionComponent },
      { path: 'equipmentUnitPriceAndStop', component: EquipmentUnitPriceAndStopComponent },
      { path: 'procedurePriceHasNoData', component: ProcedurePriceHasNoDataComponent },
      { path: 'unCloseCostPeriod', component: UnCloseCostPeriodComponent }
    ]
  }


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }

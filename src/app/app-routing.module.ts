import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SetupComponent } from './pages/setup/setup.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/setup' },
  { path: 'setup', component:SetupComponent},
  { path: 'main', loadChildren: () => import('./pages/main/main.module').then(m => m.MainModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

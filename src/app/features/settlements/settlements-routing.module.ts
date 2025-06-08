import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddSettlementComponent } from './add-settlement/add-settlement.component';
import { ViewSettlementComponent } from './view-settlement/view-settlement.component';

const routes: Routes = [
  { path: '', redirectTo: 'view', pathMatch: 'full' },
  { path: 'add', component: AddSettlementComponent },
  { path: 'view', component: ViewSettlementComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SettlementsRoutingModule { }

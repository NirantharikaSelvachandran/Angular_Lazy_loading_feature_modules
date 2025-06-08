import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddSettlementComponent } from './add-settlement/add-settlement.component';
import { ViewSettlementComponent } from './view-settlement/view-settlement.component';
import { SettlementsRoutingModule } from './settlements-routing.module';

@NgModule({
  declarations: [
    AddSettlementComponent,
    ViewSettlementComponent
  ],
  imports: [
    CommonModule,
    SettlementsRoutingModule
  ]
})
export class SettlementsModule { }

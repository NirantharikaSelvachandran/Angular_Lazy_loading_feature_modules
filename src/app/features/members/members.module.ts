import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddMemberComponent } from './add-member/add-member.component';
import { ViewMemberComponent } from './view-member/view-member.component';
import { MembersRoutingModule } from './members-routing.module';

@NgModule({
  declarations: [
    AddMemberComponent,
    ViewMemberComponent
  ],
  imports: [
    CommonModule,
    MembersRoutingModule
  ]
})
export class MembersModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'members', pathMatch: 'full' },
  {
    path: 'members',
    loadChildren: () => import('./features/members/members.module').then(m => m.MembersModule)
  },
  {
    path: 'settlements',
    loadChildren: () => import('./features/settlements/settlements.module').then(m => m.SettlementsModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

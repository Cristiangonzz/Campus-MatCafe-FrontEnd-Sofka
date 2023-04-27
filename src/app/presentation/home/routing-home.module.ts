import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { PermissionGuard } from '../shared/guards/permission.guard';
const routes: Routes = [
  {
    path: '',
    component: HomeComponent, canActivate: [PermissionGuard],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RoutingHomeModule {}

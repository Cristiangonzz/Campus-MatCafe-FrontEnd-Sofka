import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PermissionGuard } from '../shared/guards/permission.guard';
import { SuscribeRouteComponent } from './suscribe-route/suscribe-route.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: `suscribe-route`,
        component: SuscribeRouteComponent,
        canActivate: [PermissionGuard],
      },
      { path: `**`, redirectTo: 'suscribe-route' },

    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RoutingLearnerModule {}

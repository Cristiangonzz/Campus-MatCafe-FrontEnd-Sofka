import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateRouteComponent } from './create-route/create-route.component';
import { GetAllRouteComponent } from './get-all-route/get-all-route.component';
import { UpdateRouteComponent } from './update-route/update-route.component';
import { PermissionGuard } from '../shared/guards/permission.guard';
import { PermissionRolGuard } from '../shared/guards/permission-rol.guard';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: `create`,
        component: CreateRouteComponent,
        canActivate: [PermissionGuard,PermissionRolGuard],
      },
      {
        path: `get-all`,
        component: GetAllRouteComponent,
        canActivate: [PermissionGuard],
      },
      {
        path: `update`,
        component: UpdateRouteComponent,
        canActivate: [PermissionGuard,PermissionRolGuard],
      },
      { path: `**`, redirectTo: 'get-all' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RoutingRouteModule {}


import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateRouteComponent } from './create-route/create-route.component';
import { GetRouteComponent } from './get-route/get-route.component';
import { GetAllRouteComponent } from './get-all-route/get-all-route.component';
import { UpdateRouteComponent } from './update-route/update-route.component';
import { PermissionGuard } from '../shared/guards/permission.guard';

const routes: Routes = [
  {
    path:'',
    children: [
       {path:`create`,component: CreateRouteComponent,canActivate: [ PermissionGuard ], },
       {path:`get`,component: GetRouteComponent ,canActivate: [ PermissionGuard ],},
       {path:`get-all`,component: GetAllRouteComponent ,canActivate: [ PermissionGuard ],},
       {path:`update`,component: UpdateRouteComponent,canActivate: [ PermissionGuard ], },
       {path:`**`,redirectTo:'get-all'},
       ]
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RoutingRouteModule { }

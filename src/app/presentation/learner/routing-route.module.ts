
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SendWorkShopComponent } from './send-work-shop/send-work-shop.component';
import { SuscribeRouteComponent } from './suscribe-route/suscribe-route.component';
import { PermissionGuard } from '../shared/guards/permission.guard';

const routes: Routes = [
  {
    path:'',
    children: [
      {path:`send-work-shop`,component: SendWorkShopComponent ,canActivate: [ PermissionGuard ],},
      {path:`suscribe-route`,component: SuscribeRouteComponent ,canActivate: [ PermissionGuard ],},
      {path:`**`,redirectTo:'send-work-shop'},
       ]
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RoutingLearnerModule { }

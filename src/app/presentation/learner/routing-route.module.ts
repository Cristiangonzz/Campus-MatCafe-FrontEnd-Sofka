
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SendWorkShopComponent } from './send-work-shop/send-work-shop.component';
import { SuscribeRouteComponent } from './suscribe-route/suscribe-route.component';

const routes: Routes = [
  {
    path:'',
    children: [
      {path:`send-work-shop`,component: SendWorkShopComponent },
      {path:`suscribe-route`,component: SuscribeRouteComponent },
      {path:`**`,redirectTo:'send-work-shop'},
       ]
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RoutingLearnerModule { }


import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateRouteComponent } from './create-route/create-route.component';
import { GetRouteComponent } from './get-route/get-route.component';
import { GetAllRouteComponent } from './get-all-route/get-all-route.component';
import { UpdateRouteComponent } from './update-route/update-route.component';

const routes: Routes = [
  {
    path:'',
    children: [
       {path:`create`,component: CreateRouteComponent },
       {path:`get/:id`,component: GetRouteComponent },
       {path:`get-all`,component: GetAllRouteComponent },
       {path:`update/:id`,component: UpdateRouteComponent },
       {path:`**`,redirectTo:'get-all'},
       ]
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RoutingRouteModule { }

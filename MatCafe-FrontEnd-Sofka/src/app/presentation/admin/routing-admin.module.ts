
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateUserComponent } from './create-user/create-user.component';

const routes: Routes = [
  {
    path:'',
    children: [
      {path:`create`,component: CreateUserComponent},
      {path:`**`,redirectTo:'create'},
       ]
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RoutingAdminModule { }

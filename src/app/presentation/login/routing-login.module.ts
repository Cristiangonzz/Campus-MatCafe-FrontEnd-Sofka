import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login.component';
import { BackGuard } from '../shared/guards/back.guard';

const routes: Routes = [
  {
    path:'',
    children: [
       {path:`sign-in`,component: LoginComponent ,canActivate: [ BackGuard ],},
       {path:`**`,redirectTo:'sign-in'},
       ]
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RoutingLoginModule { }

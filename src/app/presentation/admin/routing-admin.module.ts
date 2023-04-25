
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateUserComponent } from './create-user/create-user.component';
import { GetAdminByEmailComponent } from './get-admin-by-email/get-admin-by-email.component';
import { GetLearnerByEmailComponent } from './get-learner-by-email/get-learner-by-email.component';

const routes: Routes = [
  {
    path:'',
    children: [
      {path:`create`,component: CreateUserComponent},
      {path:`getAdmin`,component: GetAdminByEmailComponent},
      {path:`getLearner`,component: GetLearnerByEmailComponent},
      {path:`**`,redirectTo:'create'},
       ]
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RoutingAdminModule { }

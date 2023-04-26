import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateUserComponent } from './create-user/create-user.component';
import { GetAdminByEmailComponent } from './get-admin-by-email/get-admin-by-email.component';
import { GetLearnerByEmailComponent } from './get-learner-by-email/get-learner-by-email.component';
import { PermissionGuard } from '../shared/guards/permission.guard';

const routes: Routes = [
  {
    path: '',
    children: [
      { path: `create`, component: CreateUserComponent,canActivate: [ PermissionGuard ], },
      { path: `getAdmin`, component: GetAdminByEmailComponent,canActivate: [ PermissionGuard ], },
      { path: `getLearner`, component: GetLearnerByEmailComponent,canActivate: [ PermissionGuard ], },
      { path: `**`, redirectTo: 'create' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RoutingAdminModule {}

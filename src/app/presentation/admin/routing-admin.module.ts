import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PermissionRolGuard } from '../shared/guards/permission-rol.guard';
import { PermissionGuard } from '../shared/guards/permission.guard';
import { CreateUserComponent } from './create-user/create-user.component';
import { SendCalificationComponent } from './send-calification/send-calification.component';

const routes: Routes = [
  {
    path: '',
    children: [
<<<<<<< HEAD

      { path: `create`, component: CreateUserComponent,canActivate: [ PermissionGuard ,PermissionRolGuard ], },
      { path: `send`, component: SendCalificationComponent,canActivate: [ PermissionGuard ,PermissionRolGuard], },

=======
      {
        path: `create`,
        component: CreateUserComponent,
        canActivate: [PermissionGuard, PermissionRolGuard],
      },
      {
        path: `create`,
        component: CreateUserComponent,
        canActivate: [PermissionGuard],
      },
      {
        path: `send`,
        component: SendCalificationComponent,
        canActivate: [PermissionGuard],
      },

>>>>>>> 46a3f7a186908398e479261714e1b2a5215e5aea
      { path: `**`, redirectTo: 'create' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RoutingAdminModule {}

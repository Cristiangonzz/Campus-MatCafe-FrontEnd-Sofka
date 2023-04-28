import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateUserComponent } from './create-user/create-user.component';
import { PermissionGuard } from '../shared/guards/permission.guard';
import { SendCalificationComponent } from './send-calification/send-calification.component';
import { PermissionRolGuard } from '../shared/guards/permission-rol.guard';

const routes: Routes = [
  {
    path: '',
    children: [

      { path: `create`, component: CreateUserComponent,canActivate: [ PermissionGuard ,PermissionRolGuard ], },
      { path: `send`, component: SendCalificationComponent,canActivate: [ PermissionGuard ,PermissionRolGuard], },

      { path: `**`, redirectTo: 'create' },

    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RoutingAdminModule {}

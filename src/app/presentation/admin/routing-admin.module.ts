import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateUserComponent } from './create-user/create-user.component';
import { PermissionGuard } from '../shared/guards/permission.guard';
import { SendCalificationComponent } from './send-calification/send-calification.component';

const routes: Routes = [
  {
    path: '',
    children: [
      { path: `create`, component: CreateUserComponent,canActivate: [ PermissionGuard ], },
      { path: `send`, component: SendCalificationComponent,canActivate: [ PermissionGuard ], },
      { path: `**`, redirectTo: 'create' },

    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RoutingAdminModule {}

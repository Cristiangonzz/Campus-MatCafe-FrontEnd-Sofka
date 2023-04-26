import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BackGuard } from './presentation/shared/guards/back.guard';
import { PermissionGuard } from './presentation/shared/guards/permission.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: 'login',
    canActivate: [BackGuard],
    loadChildren: () =>
      import('./presentation/login/login.module').then((m) => m.LoginModule),
  },
  {
    path: 'admin',
    canActivate: [PermissionGuard],
    loadChildren: () =>
      import('./presentation/admin/admin.module').then((m) => m.AdminModule),
  },
  {
    path: 'course',
    canActivate: [PermissionGuard],
    loadChildren: () =>
      import('./presentation/course/course.module').then((m) => m.CourseModule),
  },
  {
    path: 'route',
    canActivate: [PermissionGuard],
    loadChildren: () =>
      import('./presentation/route/route.module').then((m) => m.RouteModule),
  },
  {
    path: 'learner',
    canActivate: [PermissionGuard],
    loadChildren: () =>
      import('./presentation/learner/learner.module').then(
        (m) => m.LearnerModule
      ),
  },
  {
    path: 'home',
    loadChildren: () =>
      import('./presentation/home/home.module').then((m) => m.HomeModule),
  },
  {
    path: '**',
    redirectTo: 'login',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

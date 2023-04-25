import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: 'login',
    loadChildren: () =>
      import('./presentation/login/login.module').then((m) => m.LoginModule),
  },
  {
    path: 'admin',
    loadChildren: () =>
      import('./presentation/admin/admin.module').then((m) => m.AdminModule),
  },
  {
    path: 'course',
    loadChildren: () =>
      import('./presentation/course/course.module').then((m) => m.CourseModule),
  },
  {
    path: 'route',
    loadChildren: () =>
      import('./presentation/route/route.module').then((m) => m.RouteModule),
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

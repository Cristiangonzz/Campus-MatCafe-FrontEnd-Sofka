import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateCourseComponent } from './create-course/create-course.component';
import { UpdateCourseComponent } from './update-course/update-course.component';
import { DeleteCourseComponent } from './delete-course/delete-course.component';
import { GetCourseComponent } from './get-course/get-course.component';
import { GetAllCoursesComponent } from './get-all-courses/get-all-courses.component';
import { PermissionGuard } from '../shared/guards/permission.guard';
import { PermissionRolGuard } from '../shared/guards/permission-rol.guard';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'create',
        component: CreateCourseComponent,
        canActivate: [PermissionGuard,PermissionRolGuard],
      },
      {
        path: 'update',
        component: UpdateCourseComponent,
        canActivate: [PermissionGuard,PermissionRolGuard],
      },
      {
        path: 'delete',
        component: DeleteCourseComponent,
        canActivate: [PermissionGuard,PermissionRolGuard],
      },
      {
        path: 'get/:id',
        component: GetCourseComponent,
        canActivate: [PermissionGuard],
      },
      {
        path: 'get-all',
        component: GetAllCoursesComponent,
        canActivate: [PermissionGuard],
      },
      { path: `**`, redirectTo: 'get-all' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RoutingCourseModule {}

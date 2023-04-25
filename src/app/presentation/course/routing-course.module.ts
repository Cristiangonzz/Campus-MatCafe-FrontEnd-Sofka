
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateCourseComponent } from './create-course/create-course.component';
import { UpdateCourseComponent } from './update-course/update-course.component';
import { DeleteCourseComponent } from './delete-course/delete-course.component';
import { GetCourseComponent } from './get-course/get-course.component';
import { GetAllCoursesComponent } from './get-all-courses/get-all-courses.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'create',
        component: CreateCourseComponent,
      },
      {
        path: 'update',
        component: UpdateCourseComponent,
      },
      {
        path: 'delete',
        component: DeleteCourseComponent,
      },
      {
        path: 'get',
        component: GetCourseComponent,
      },
      {
        path: 'get-all',
        component: GetAllCoursesComponent,
      },
      {path:`**`,redirectTo:'get-all'},
    ],
  },
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RoutingCourseModule { }

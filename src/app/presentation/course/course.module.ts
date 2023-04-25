import { NgModule } from '@angular/core';
import { CreateCourseComponent } from './create-course/create-course.component';
import { DeleteCourseComponent } from './delete-course/delete-course.component';
import { UpdateCourseComponent } from './update-course/update-course.component';
import { GetCourseComponent } from './get-course/get-course.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from '../shared/shared.module';
import { InfrastructureModule } from 'src/app/infrastructure/infrastructure.module';
import { GetAllCoursesComponent } from './get-all-courses/get-all-courses.component';
import { RoutingCourseModule } from './routing-admin.module';

@NgModule({
  declarations: [
    CreateCourseComponent,
    DeleteCourseComponent,
    UpdateCourseComponent,
    GetCourseComponent,
    GetAllCoursesComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RoutingCourseModule,

    InfrastructureModule,
    SharedModule,
  ],
  exports: [],
})
export class CourseModule {}

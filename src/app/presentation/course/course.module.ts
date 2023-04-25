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

@NgModule({
  declarations: [
    CreateCourseComponent,
    CreateCourseComponent,
    DeleteCourseComponent,
    UpdateCourseComponent,
    GetCourseComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,

    InfrastructureModule,
    SharedModule,
  ],
  exports: [CreateCourseComponent],
})
export class CourseModule {}

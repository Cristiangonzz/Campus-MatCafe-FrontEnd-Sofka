import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NgxPaginationModule } from 'ngx-pagination';
import { InfrastructureModule } from 'src/app/infrastructure/infrastructure.module';
import { SharedModule } from '../shared/shared.module';
import { CreateCourseComponent } from './create-course/create-course.component';
import { DeleteCourseComponent } from './delete-course/delete-course.component';
import { GetAllCoursesComponent } from './get-all-courses/get-all-courses.component';
import { GetCourseComponent } from './get-course/get-course.component';
import { SafePipe } from './pipe/safe.pipe';
import { RoutingCourseModule } from './routing-course.module';
import { UpdateCourseComponent } from './update-course/update-course.component';

@NgModule({
  declarations: [
    CreateCourseComponent,
    DeleteCourseComponent,
    UpdateCourseComponent,
    GetCourseComponent,
    GetAllCoursesComponent,
    SafePipe,
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    NgxPaginationModule,
    HttpClientModule,
    RoutingCourseModule,

    InfrastructureModule,
    SharedModule,
  ],
  exports: [],
})
export class CourseModule {}

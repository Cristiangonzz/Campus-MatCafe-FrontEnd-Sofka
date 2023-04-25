import { Component } from '@angular/core';
import { CourseEntity } from '../../../domain/entities/course.entity.domain';
import { CourseService } from '../../../domain/services/course.service.domain';
import { courseUseCaseProviders } from '../../../infrastructure/delegate/delegate-course/delegate-course.infrastructure';

@Component({
  selector: 'app-get-all-courses',
  templateUrl: './get-all-courses.component.html',
  styleUrls: ['./get-all-courses.component.css'],
})
export class GetAllCoursesComponent {
  courses!: CourseEntity[];
  delegateCourse = courseUseCaseProviders;

  constructor(private courseService: CourseService) {}

  ngOnInit() {
    this.delegateCourse.getAllCourseUseCaseProvaider
      .useFactory(this.courseService)
      .execute();
  }
}

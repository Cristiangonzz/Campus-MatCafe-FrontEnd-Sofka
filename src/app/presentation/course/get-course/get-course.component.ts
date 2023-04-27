import { courseUseCaseProviders } from 'src/app/infrastructure/delegate/delegate-course/delegate-course.infrastructure';
import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { DeleteCourseUseCase } from 'src/app/application/use-case/course/delete-course.use-case';
import { CourseService } from 'src/app/domain/services/course.service.domain';
import { CourseEntity } from 'src/app/domain/entities/course.entity.domain';
import { GetCourseUseCase } from 'src/app/application/use-case/course/get-course.use-case';

@Component({
  selector: 'app-get-course',
  templateUrl: './get-course.component.html',
  styleUrls: ['./get-course.component.css'],
})
export class GetCourseComponent {
  delegateCourse = courseUseCaseProviders;
  course!: CourseEntity;
  courseId: string;

  constructor(
    private courseService: CourseService,
    private getCourseUseCase: GetCourseUseCase,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {
    this.courseId = '';
  }

  ngOnInit() {
    this.courseId = this.activatedRoute.snapshot.paramMap.get('id') ?? '';
    console.log(this.courseId);
    if (this.courseId) {
      const courseUseCase = this.delegateCourse.getCourseUseCaseProvider
        .useFactory(this.courseService)
        .execute(this.courseId);
      courseUseCase.subscribe((course) => {
        this.course = course;
      });
    }
  }
}

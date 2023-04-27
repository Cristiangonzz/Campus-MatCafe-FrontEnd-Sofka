import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { GetCourseUseCase } from 'src/app/application/use-case/course/get-course.use-case';
import { CourseEntity } from 'src/app/domain/entities/course.entity.domain';
import { CourseService } from 'src/app/domain/services/course.service.domain';
import { courseUseCaseProviders } from 'src/app/infrastructure/delegate/delegate-course/delegate-course.infrastructure';

@Component({
  selector: 'app-get-course',
  templateUrl: './get-course.component.html',
  styleUrls: ['./get-course.component.css'],
})
export class GetCourseComponent implements OnInit {
  p: number = 1;
  delegateCourse = courseUseCaseProviders;
  course: CourseEntity = new CourseEntity();
  courseId: string;
  query: string = '';
  video: any;
  safeUrl!: SafeResourceUrl;
  idsVideos!: string[];
  totalPages!: number;
  show = false;
  itemsPerPage = 1;

  constructor(
    private courseService: CourseService,
    private getCourseUseCase: GetCourseUseCase,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private sanitizer: DomSanitizer
  ) {
    this.courseId = '';
  }

  ngOnInit() {
    console.log('ngOnInit');
    this.courseId = this.activatedRoute.snapshot.paramMap.get('id') ?? '';
    if (this.courseId) {
      const courseUseCase = this.delegateCourse.getCourseUseCaseProvider
        .useFactory(this.courseService)
        .execute(this.courseId);
      courseUseCase.subscribe((course) => {
        this.course = course;
      });
    }
    const collection = [];
    this.delegateCourse.getCourseUseCaseProvider
      .useFactory(this.courseService)
      .execute(this.courseId)
      .subscribe((courses) => {
        if (Array.isArray(courses)) {
          courses.forEach((course) => {
            collection.push(course.content);
          });
        }
      });
  }
}

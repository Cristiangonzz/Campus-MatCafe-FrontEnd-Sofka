import { Component, OnDestroy, OnInit } from '@angular/core';
import { CourseEntity } from '../../../domain/entities/course.entity.domain';
import { CourseService } from '../../../domain/services/course.service.domain';
import { courseUseCaseProviders } from '../../../infrastructure/delegate/delegate-course/delegate-course.infrastructure';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-get-all-courses',
  templateUrl: './get-all-courses.component.html',
  styleUrls: ['./get-all-courses.component.css'],
})
export class GetAllCoursesComponent implements OnInit, OnDestroy {
  courses!: CourseEntity[];
  delegateCourse = courseUseCaseProviders;
  private onDestroy$: Subject<void> = new Subject<void>();

  constructor(private courseService: CourseService) {}

  ngOnInit() {
    this.delegateCourse.getAllCourseUseCaseProvaider
      .useFactory(this.courseService)
      .execute();
    this.delegateCourse.getAllCourseUseCaseProvaider
      .useFactory(this.courseService)
      .statusEmmit.pipe(takeUntil(this.onDestroy$))
      .subscribe({
        next: (value: CourseEntity[]) => {
          this.courses = value;
        },
        complete: () => {
          console.log('complete');
          console.log(this.courses);
        },
      });
  }

  ngOnDestroy(): void {
    this.onDestroy$.next();
    this.onDestroy$.complete();
  }
}

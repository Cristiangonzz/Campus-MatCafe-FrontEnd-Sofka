import { Component, OnDestroy, OnInit } from '@angular/core';
import { CourseEntity } from '../../../domain/entities/course.entity.domain';
import { CourseService } from '../../../domain/services/course.service.domain';
import { courseUseCaseProviders } from '../../../infrastructure/delegate/delegate-course/delegate-course.infrastructure';
import { Subject, takeUntil } from 'rxjs';
import { Router, ActivatedRoute } from '@angular/router';
import { DeleteCourseUseCase } from 'src/app/application/use-case/course/delete-course.use-case';
@Component({
  selector: 'app-get-all-courses',
  templateUrl: './get-all-courses.component.html',
  styleUrls: ['./get-all-courses.component.css'],
})
export class GetAllCoursesComponent implements OnInit, OnDestroy {
  courses!: CourseEntity[];
  selectedCourseId?: string;
  isModalOpen = false;
  delegateCourse = courseUseCaseProviders;
  private onDestroy$: Subject<void> = new Subject<void>();

  constructor(
    private courseService: CourseService,
    private deleteCourseUseCase: DeleteCourseUseCase,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

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
        error: (error) => {
          console.log(error);
        },
        complete: () => {
          console.log('complete');
        },
      });
  }

  deleteCourse(_id: string) {
    console.log(_id);
    this.deleteCourseUseCase.execute(_id).subscribe({
      next: (data) => {
        console.log(data);
        // redirigir a la lista de cursos
        this.router.navigate(['/courses']);
      },
      error: (error) => {
        console.log(error);
      },
      complete: () => {
        console.log('complete');
      },
    });
  }
  updateCourse(id: string) {
    this.selectedCourseId = id;
    this.isModalOpen = true;
  }
  closeModal() {
    this.isModalOpen = false;
  }

  ngOnDestroy(): void {
    this.onDestroy$.next();
    this.onDestroy$.complete();
  }
}

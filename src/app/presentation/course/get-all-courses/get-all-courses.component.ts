import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subject, takeUntil } from 'rxjs';
import { DeleteCourseUseCase } from 'src/app/application/use-case/course/delete-course.use-case';
import { CourseEntity } from '../../../domain/entities/course.entity.domain';
import { CourseService } from '../../../domain/services/course.service.domain';
import { courseUseCaseProviders } from '../../../infrastructure/delegate/delegate-course/delegate-course.infrastructure';

@Component({
  selector: 'app-get-all-courses',
  templateUrl: './get-all-courses.component.html',
  styleUrls: ['./get-all-courses.component.css'],
})
export class GetAllCoursesComponent implements OnInit, OnDestroy {
  courses!: CourseEntity[];
  delegateCourse = courseUseCaseProviders;
  private onDestroy$: Subject<void> = new Subject<void>();

  selected!: CourseEntity;

  showModal = false;

  ArrayShowContent: boolean[] = [];

  openModal(i: number) {
    this.selected = this.courses[i];
    this.showModal = true;
  }

  closeModal() {
    console.log('close modal');
    this.showModal = false;
  }

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
          if (this.ArrayShowContent.length == 0) {
            this.ArrayShowContent = new Array(this.courses.length).fill(false);
          }
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
  updateCourse(_id: string) {
    console.log(_id);
  }

  ngOnDestroy(): void {
    this.onDestroy$.next();
    this.onDestroy$.complete();
  }

  showContent(i: number): boolean {
    this.ArrayShowContent[i] = !this.ArrayShowContent[i];
    return this.ArrayShowContent[i];
  }
}

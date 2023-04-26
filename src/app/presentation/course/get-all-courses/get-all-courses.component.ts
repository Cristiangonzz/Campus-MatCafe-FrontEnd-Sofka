import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subject, takeUntil } from 'rxjs';
import { DeleteCourseUseCase } from 'src/app/application/use-case/course/delete-course.use-case';
import { CourseEntity } from '../../../domain/entities/course.entity.domain';
import { CourseService } from '../../../domain/services/course.service.domain';
import { courseUseCaseProviders } from '../../../infrastructure/delegate/delegate-course/delegate-course.infrastructure';
import { SweetAlert } from '../../shared/sweetAlert/sweet-alert.presentation';

@Component({
  selector: 'app-get-all-courses',
  templateUrl: './get-all-courses.component.html',
  styleUrls: ['./get-all-courses.component.css'],
})
export class GetAllCoursesComponent implements OnInit, OnDestroy {
  courses!: CourseEntity[];
  delegateCourse = courseUseCaseProviders;
  sweet = new SweetAlert()
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
        error: () => {
          this.sweet.toFire("Curso","Error al Obtener Curso","error")
        },
      });
  }
  
  selected!: CourseEntity;

  showModal = false;

  openModal(i: number) {
    this.selected = this.courses[i];
    this.showModal = true;
  }

  closeModal() {
    console.log('close modal');
    this.showModal = false;
  }

  deleteCourse(_id: string) {

    this.deleteCourseUseCase.
    execute(_id).subscribe({
      next: () => {
        this.sweet.toFire("Curso","Curso Eliminado","success")
      },
      error: (error) => {
        this.sweet.toFire("Curso","Curso Eliminado","success")
      },
    });
  }

  ngOnDestroy(): void {
    this.onDestroy$.next();
    this.onDestroy$.complete();
  }
}

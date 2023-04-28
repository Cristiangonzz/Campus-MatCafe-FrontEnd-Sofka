import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subject, takeUntil } from 'rxjs';
import { DeleteCourseUseCase } from 'src/app/application/use-case/course/delete-course.use-case';
import Swal from 'sweetalert2';
import { CourseEntity } from '../../../domain/entities/course.entity.domain';
import { CourseService } from '../../../domain/services/course.service.domain';
import { courseUseCaseProviders } from '../../../infrastructure/delegate/delegate-course/delegate-course.infrastructure';
import { SweetAlert } from '../../shared/sweetAlert/sweet-alert.presentation';
import { loginUseCaseProviders } from 'src/app/infrastructure/delegate/delegete-login/delegate-login.infrastructure';
import { AdminService } from 'src/app/domain/services/admin.service.domain';
import { RouteService } from 'src/app/domain/services/route.service.domain';

@Component({
  selector: 'app-get-all-courses',
  templateUrl: './get-all-courses.component.html',
  styleUrls: ['./get-all-courses.component.css'],
})
export class GetAllCoursesComponent implements OnInit, OnDestroy {
  courses!: CourseEntity[];
  delegateCourse = courseUseCaseProviders;
  delegateLogin = loginUseCaseProviders;
  sweet = new SweetAlert();
  private onDestroy$: Subject<void> = new Subject<void>();
  rol: boolean = false;
  selected!: CourseEntity;

  showModal = false;

  ArrayShowContent: boolean[] = [];

  openModal(i: number) {
    this.selected = this.courses[i];
    console.log(this.selected);
    this.showModal = true;
  }

  closeModal() {
    this.showModal = false;
  }

  constructor(
    private courseService: CourseService,
    private routeService: RouteService,
    private adminService: AdminService,
    private deleteCourseUseCase: DeleteCourseUseCase,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    this.delegateLogin.hasRolUseCaseProvider.useFactory().execute();
    this.delegateLogin.hasRolUseCaseProvider
      .useFactory()
      .statusRolEmmit.subscribe({
        next: (value: boolean) => {
          if (value == true) {
            this.rol = true;
          } else {
            this.rol = false;
          }
        },
      });

    if (this.rol == true) {
      this.delegateCourse.getAllCourseUseCaseProvider
        .useFactory(this.courseService)
        .execute();

      this.delegateCourse.getAllCourseUseCaseProvider
        .useFactory(this.courseService)
        .statusEmmit.pipe(takeUntil(this.onDestroy$))
        .subscribe({
          next: (value: CourseEntity[]) => {
            this.courses = value;
            if (this.ArrayShowContent.length == 0) {
              this.ArrayShowContent = new Array(this.courses.length).fill(
                false
              );
            }
          },
          error: () => {
            this.sweet.toFire('Curso', 'Error al Obtener Curso', 'error');
          },
        });
    } else {
      this.delegateCourse.getAllCourseLearnerUseCaseProvider
        .useFactory(this.courseService, this.adminService, this.routeService)
        .execute();

      this.delegateCourse.getAllCourseLearnerUseCaseProvider
        .useFactory(this.courseService, this.adminService, this.routeService)
        .statusEmmit.pipe(takeUntil(this.onDestroy$))
        .subscribe({
          next: (value: CourseEntity[]) => {
            this.courses = value;
            if (this.ArrayShowContent.length == 0) {
              this.ArrayShowContent = new Array(this.courses.length).fill(
                false
              );
            }
          },
          error: () => {
            this.sweet.toFire('Curso', 'Error al Obtener Curso', 'error');
          },
        });
    }
  }

  deleteCourse(_id: string) {
    Swal.fire({
      title: '¿Estas seguro?',
      text: 'No podras revertir esta acción',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Si, Eliminar',
      cancelButtonText: 'Cancelar',
      confirmButtonColor: '#e64141',
    }).then((result) => {
      if (result.isConfirmed) {
        this.deleteCourseUseCase.execute(_id).subscribe({
          next: () => {
            this.sweet.toFire(
              'Curso',
              'Curso Eliminado Correctamente',
              'success'
            );
            this.ngOnInit();
            this.router.navigate(['/course/get-all']);
          },
          error: (error) => {
            this.sweet.toFire('Curso', error.message, 'error');
          },
        });
      }
    });
  }

  ngOnDestroy(): void {
    this.onDestroy$.next();
    this.onDestroy$.complete();
  }

  showContent(i: number): boolean {
    this.ArrayShowContent[i] = !this.ArrayShowContent[i];
    return this.ArrayShowContent[i];
  }
  crearCurso() {
    this.router.navigate(['course/create']);
  }
}

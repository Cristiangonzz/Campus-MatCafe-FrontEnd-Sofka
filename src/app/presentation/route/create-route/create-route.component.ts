import { Component } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RouteEntity } from 'src/app/domain/entities/route.entity.domain';
import { RouteService } from 'src/app/domain/services/route.service.domain';
import { routeUseCaseProviders } from 'src/app/infrastructure/delegate/delegate-route/delegate-route.infrastructure';
import { SweetAlert } from '../../shared/sweetAlert/sweet-alert.presentation';
import { ICourse } from 'src/app/domain/interfaces/course.interface.domain';
import { adminUseCaseProviders } from 'src/app/infrastructure/delegate/delegate-admin/delegate-admin.infrastructure';
import { AdminService } from 'src/app/domain/services/admin.service.domain';

@Component({
  selector: 'app-create-route',
  templateUrl: './create-route.component.html',
  styleUrls: ['./create-route.component.css'],
})
export class CreateRouteComponent {
  delegeteRoute = routeUseCaseProviders;
  delegeteAdmin = adminUseCaseProviders;

  sweet = new SweetAlert();

  FormRegister = new FormGroup({
    title: new FormControl('', [Validators.required, Validators.minLength(5)]),
    description: new FormControl('', [
      Validators.required,
      Validators.minLength(5),
    ]),
    duration: new FormControl('', [
      Validators.required,
      Validators.minLength(5),
    ]),
    courses: new FormArray([], [Validators.required, Validators.minLength(5)]),
  });

  addCourses() {
    const courses = new FormControl('', [
      Validators.required,
      Validators.minLength(5),
    ]);
    this.coursesForms.push(courses);
  }

  removeCourses(i: number) {
    this.coursesForms.removeAt(i);
  }

  get coursesForms() {
    return this.FormRegister.get('courses') as FormArray;
  }

  route: RouteEntity = {} as RouteEntity;

  constructor(
    private routeService: RouteService,
    private router: Router,
    private readonly adminService: AdminService
  ) {}
  send() {
    this.route.courses = this.FormRegister.get('courses')?.value as ICourse[];
    this.route.description = this.FormRegister.get('description')
      ?.value as string;
    this.route.title = this.FormRegister.get('title')?.value as string;
    this.route.duration = this.FormRegister.get('duration')?.value as string;

    this.delegeteAdmin.getAdminByEmailUseCaseProvaider
      .useFactory(this.adminService)
      .execute(localStorage.getItem('email') as string)
      .subscribe({
        next: (data) => {
          this.route.adminId = data._id as string;
          console.log(this.route);

          this.delegeteRoute.createRouteUseCaseProvaider
            .useFactory(this.routeService)
            .execute(this.route)
            .subscribe({
              next: () => {
                this.sweet.toFire('Ruta', 'Ruta creada', 'success');
                this.router.navigate(['/route']);
              },
              error: () => {
                this.sweet.toFire('Ruta', 'No se pudo crear Ruta', 'error');
              },
            });
        },
        error: () => {
          this.sweet.toFire('Ruta', 'No se pudo crear Ruta', 'error');
        },
      });
  }
  cancelar() {
    this.router.navigate(['/route/get-all']);
  }
}
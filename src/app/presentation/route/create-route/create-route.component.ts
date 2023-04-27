import { Component } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AdminEntity } from 'src/app/domain/entities/admin.entity.domain';
import { RouteEntity } from 'src/app/domain/entities/route.entity.domain';
import { AdminService } from 'src/app/domain/services/admin.service.domain';
import { RouteService } from 'src/app/domain/services/route.service.domain';
import { adminUseCaseProviders } from 'src/app/infrastructure/delegate/delegate-admin/delegate-admin.infrastructure';
import { routeUseCaseProviders } from 'src/app/infrastructure/delegate/delegate-route/delegate-route.infrastructure';
import { SweetAlert } from '../../shared/sweetAlert/sweet-alert.presentation';

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

  get coursesForms() {
    return this.FormRegister.get('courses') as FormArray;
  }
  addCourse() {
    const courses = new FormControl('', [
      Validators.required,
      Validators.minLength(5),
    ]);
    this.coursesForms.push(courses);
  }

  removeCourse(i: number) {
    this.coursesForms.removeAt(i);
  }

  route: RouteEntity = {} as RouteEntity;

  constructor(
    private routeService: RouteService,
    private readonly adminService: AdminService,
    private router: Router
  ) {}

  enviar() {
    this.route.courses = this.FormRegister.get('courses')?.value as string[];
    this.route.description = this.FormRegister.get('description')
      ?.value as string;
    this.route.title = this.FormRegister.get('title')?.value as string;
    this.route.duration = this.FormRegister.get('duration')?.value as string;
    console.log(this.route);
    this.delegeteAdmin.getAdminByEmailUseCaseProvider
      .useFactory(this.adminService)
      .execute(localStorage.getItem('email') as string)
      .subscribe({
        next: (data: AdminEntity) => {
          this.route.adminId = data._id as string;
          console.log(this.route);

          this.delegeteRoute.createRouteUseCaseProvider
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
        error: (error: Error) => {
          console.log(error);
          this.sweet.toFire('Ruta', 'No se pudo crear Ruta', 'error');
        },
      });
  }
  cancelar() {
    this.router.navigate(['/route/get-all']);
  }
}

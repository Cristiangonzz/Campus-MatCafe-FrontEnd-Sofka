import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CourseEntity } from 'src/app/domain/entities/course.entity.domain';
import { RouteEntity } from 'src/app/domain/entities/route.entity.domain';
import { CourseService } from 'src/app/domain/services/course.service.domain';
import { RouteService } from 'src/app/domain/services/route.service.domain';
import { courseUseCaseProviders } from 'src/app/infrastructure/delegate/delegate-course/delegate-course.infrastructure';
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
    courses: new FormControl(
      [''],
      [Validators.required, Validators.minLength(5)]
    ),

  });

  route: RouteEntity = {} as RouteEntity;

  constructor(private routeService: RouteService, private router: Router,private readonly adminService:AdminService) {}
  send() {
    this.route.courses = this.FormRegister.get("courses")?.value as ICourse[];
    this.route.description = this.FormRegister.get("description")?.value as string;
    this.route.title = this.FormRegister.get("title")?.value as string;
    this.route.duration = this.FormRegister.get("duration")?.value as string;

    this.delegeteAdmin.getAdminByEmailUseCaseProvaider
    .useFactory(this.adminService)
    .execute(localStorage.getItem('email') as string).subscribe({
      next: (data) => {
        // this.route.adminId =
        this.delegeteRoute.createRouteUseCaseProvaider
        .useFactory(this.routeService)
        .execute(this.route)
        .subscribe({
          next: () => {
            this.sweet.toFire("Creacion",'Ruta creada', 'success');
            this.router.navigate(['/route']);
          },
          error: () => {
          this.sweet.toFire("Creacion",'No se pudo crear Ruta', 'error');
          },
        });
      },
      error: () => {
        this.sweet.toFire("Creacion",'No se pudo crear Ruta', 'error');
      },
    });





    
  }
}

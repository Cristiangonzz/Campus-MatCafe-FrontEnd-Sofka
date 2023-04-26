import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { RouteEntity } from 'src/app/domain/entities/route.entity.domain';
import { IUpdateRoute } from 'src/app/domain/interfaces/update-route.interface.domain';
import { AdminService } from 'src/app/domain/services/admin.service.domain';
import { RouteService } from 'src/app/domain/services/route.service.domain';
import { routeUseCaseProviders } from 'src/app/infrastructure/delegate/delegate-route/delegate-route.infrastructure';
import { SweetAlert } from '../../shared/sweetAlert/sweet-alert.presentation';

@Component({
  selector: 'app-update-route',
  templateUrl: './update-route.component.html',
  styleUrls: ['./update-route.component.css'],
})
export class UpdateRouteComponent implements OnChanges {
  delegateRoute = routeUseCaseProviders;
  @Input() routeInput!: RouteEntity;
  sweet = new SweetAlert();
  

  FormUpdate = new FormGroup({
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
    return this.FormUpdate.get('courses') as FormArray;
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
    private readonly routeActivated: ActivatedRoute,
    private routeService: RouteService,
    private router: Router
  ) {}

  ngOnChanges(): void {
    this.FormUpdate.get('title')?.setValue(this.routeInput.title);
    this.FormUpdate.get('description')?.setValue(this.routeInput.description);
    this.FormUpdate.get('duration')?.setValue(this.routeInput.duration);

    this.coursesForms.clear();

    this.routeInput.courses.forEach((element) => {
      const course = new FormControl('', [
        Validators.required,
        Validators.minLength(5),
      ]);
      course.setValue(element);
      this.coursesForms.push(course);
    });
  }

  send() {
    this.routeInput.courses = this.FormUpdate.get('courses')?.value as never[];
    this.routeInput.description = this.FormUpdate.get('description')
      ?.value as string;
    this.routeInput.duration = this.FormUpdate.get('duration')?.value as string;
    this.routeInput.title = this.FormUpdate.get('title')?.value as string;

    this.delegateRoute.updateRouteUseCaseProvaider
      .useFactory(this.routeService)
      .execute(this.route._id, this.route)
      .subscribe({
        next: () => {
          this.sweet.toFire('Completo', 'Curso Creado', 'success');
        },
        error: () => {
          this.sweet.toFire('Error', 'Error al Actualizar Curso', 'error');
        },
      });
  }

  cancelar() {
    this.router.navigate(['/route/get-all']);
  }
}

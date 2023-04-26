import { Component, Input, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { RouteEntity } from 'src/app/domain/entities/route.entity.domain';
import { IUpdateRoute } from 'src/app/domain/interfaces/update-route.interface.domain';
import { AdminService } from 'src/app/domain/services/admin.service.domain';
import { RouteService } from 'src/app/domain/services/route.service.domain';
import { routeUseCaseProviders } from 'src/app/infrastructure/delegate/delegate-route/delegate-route.infrastructure';

@Component({
  selector: 'app-update-route',
  templateUrl: './update-route.component.html',
  styleUrls: ['./update-route.component.css'],
})
export class UpdateRouteComponent implements OnInit {
  delegateRoute = routeUseCaseProviders;
  @Input() routeInput!: RouteEntity;
  @Input() close!: boolean;
  newRoute: IUpdateRoute = {} as IUpdateRoute;

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
  update: IUpdateRoute = {} as IUpdateRoute;
  constructor(
    private readonly routeActivated: ActivatedRoute,
    private routeService: RouteService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.paramsRouteId();
    this.ngOnChanges();
  }

  paramsRouteId(): void {
    this.routeActivated.params.subscribe((params: Params) => {
      this.route._id = params['id'];
    });
    this.delegateRoute.getRouteUseCaseProvaider
      .useFactory(this.routeService)
      .execute(this.route._id as string)
      .subscribe({
        next: (route) => {
          this.newRoute.courses = route.courses as string[];
          this.newRoute.description = route.description as string;
          this.newRoute.duration = route.duration as string;
          this.newRoute.title = route.title as string;
        },
        error: (error) => {
          console.log(error);
        },
      });
  }

  ngOnChanges(): void {
    this.FormUpdate.get('title')?.setValue(this.newRoute.title);
    this.FormUpdate.get('description')?.setValue(this.newRoute.description);
    this.FormUpdate.get('duration')?.setValue(this.newRoute.duration);

    this.coursesForms.clear();

    this.newRoute.courses.forEach((element) => {
      const content = new FormControl('', [
        Validators.required,
        Validators.minLength(5),
      ]);
      content.setValue(element);
      this.coursesForms.push(content);
    });
  }
}

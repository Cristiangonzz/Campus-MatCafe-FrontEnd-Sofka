import { Component } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AdminService } from 'src/app/domain/services/admin.service.domain';
import { adminUseCaseProviders } from 'src/app/infrastructure/delegate/delegate-admin/delegate-admin.infrastructure';
import { CourseEntity } from '../../../domain/entities/course.entity.domain';
import { CourseService } from '../../../domain/services/course.service.domain';
import { courseUseCaseProviders } from '../../../infrastructure/delegate/delegate-course/delegate-course.infrastructure';
import { SweetAlert } from '../../shared/sweetAlert/sweet-alert.presentation';

@Component({
  selector: 'app-create-course',
  templateUrl: './create-course.component.html',
  styleUrls: ['./create-course.component.css'],
})
export class CreateCourseComponent {
  delegateCourse = courseUseCaseProviders;
  delegateAdmin = adminUseCaseProviders;
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
    requirements: new FormControl('', [
      Validators.required,
      Validators.minLength(5),
    ]),
    content: new FormArray([], [Validators.required]),
  });

  addContent() {
    const content = new FormControl('', [
      Validators.required,
      Validators.minLength(5),
      Validators.pattern(/^https?:\/\/[\w\-]+(\.[\w\-]+)+[/#?]?.*$/),
    ]);
    this.contentForms.push(content);
  }

  removeContent(i: number) {
    this.contentForms.removeAt(i);
  }

  get contentForms() {
    return this.FormRegister.get('content') as FormArray;
  }

  course: CourseEntity = {} as CourseEntity;

  constructor(
    private courseService: CourseService,
    private router: Router,
    private readonly adminService: AdminService
  ) {}
  send() {
    this.course.content = this.FormRegister.get('content')?.value as never[];
    this.course.description = this.FormRegister.get('description')
      ?.value as string;
    this.course.duration = this.FormRegister.get('duration')?.value as string;
    this.course.requirements = this.FormRegister.get('requirements')
      ?.value as string;
    this.course.title = this.FormRegister.get('title')?.value as string;

    this.delegateAdmin.getAdminByEmailUseCaseProvider
      .useFactory(this.adminService)
      .execute(localStorage.getItem('email') as string)
      .subscribe({
        next: (data) => {
          this.course.adminId = data._id as string;
          this.delegateCourse.createCourseUseCaseProvider
            .useFactory(this.courseService)
            .execute(this.course)
            .subscribe({
              next: () => {
                this.sweet.toFire('Completo', 'Curso Creado', 'success');
              },
              error: (err) => {
                this.sweet.toFire('Error', 'Error al Crear Curso', 'error');
                console.log(err);
              },
            });
        },
        error: (err) => {
          this.sweet.toFire('Error', 'Error al Crear Curso', 'error');
          console.log(err);
        },
      });
  }
  cancelar() {
    this.router.navigate(['/course/get-all']);
  }
}

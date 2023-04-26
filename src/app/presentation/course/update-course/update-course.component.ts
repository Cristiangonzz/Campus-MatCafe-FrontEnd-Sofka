import { Component, Input, OnChanges } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CourseEntity } from 'src/app/domain/entities/course.entity.domain';
import { AdminService } from 'src/app/domain/services/admin.service.domain';
import { CourseService } from 'src/app/domain/services/course.service.domain';
import { adminUseCaseProviders } from 'src/app/infrastructure/delegate/delegate-admin/delegate-admin.infrastructure';
import { courseUseCaseProviders } from '../../../infrastructure/delegate/delegate-course/delegate-course.infrastructure';
import { SweetAlert } from '../../shared/sweetAlert/sweet-alert.presentation';

@Component({
  selector: 'app-update-course',
  templateUrl: './update-course.component.html',
  styleUrls: ['./update-course.component.css'],
})
export class UpdateCourseComponent implements OnChanges {
  delegateCourse = courseUseCaseProviders;
  delegateAdmin = adminUseCaseProviders;
  sweet = new SweetAlert();

  @Input() courseInput!: CourseEntity;

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

  ngOnChanges(): void {
    this.FormRegister.get('title')?.setValue(this.courseInput.title);
    this.FormRegister.get('description')?.setValue(
      this.courseInput.description
    );
    this.FormRegister.get('duration')?.setValue(this.courseInput.duration);
    this.FormRegister.get('requirements')?.setValue(
      this.courseInput.requirements
    );
    this.contentForms.clear();
    this.courseInput.content.forEach((element) => {
      const content = new FormControl('', [
        Validators.required,
        Validators.minLength(5),
      ]);
      content.setValue(element);
      this.contentForms.push(content);
    });
  }

  addContent() {
    const content = new FormControl('', [
      Validators.required,
      Validators.minLength(5),
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

    console.log(this.course);
    this.delegateAdmin.getAdminByEmailUseCaseProvaider
      .useFactory(this.adminService)
      .execute(localStorage.getItem('email') as string)
      .subscribe({
        next: (data) => {
          this.course.adminId = data._id as string;
          this.delegateCourse.createCourseUseCaseProvaider
            .useFactory(this.courseService)
            .execute(this.course)
            .subscribe({
              next: () => {
                this.sweet.toFire('Completo', 'Curso Creado', 'success');
              },
              error: () => {
                this.sweet.toFire(
                  'Error',
                  'Error al Actualizar Curso',
                  'error'
                );
              },
            });
        },
        error: () => {
          this.sweet.toFire('Error', 'Error al Actualizar Curso', 'error');
        },
      });
  }
  cancelar() {
    this.router.navigate(['/course/get-all']);
  }
}

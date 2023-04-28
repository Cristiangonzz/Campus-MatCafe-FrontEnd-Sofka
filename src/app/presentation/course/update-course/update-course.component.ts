import { Component, Input, OnChanges } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CourseEntity } from 'src/app/domain/entities/course.entity.domain';
import { CourseService } from 'src/app/domain/services/course.service.domain';
import { courseUseCaseProviders } from '../../../infrastructure/delegate/delegate-course/delegate-course.infrastructure';
import { SweetAlert } from '../../shared/sweetAlert/sweet-alert.presentation';

@Component({
  selector: 'app-update-course',
  templateUrl: './update-course.component.html',
  styleUrls: ['./update-course.component.css'],
})
export class UpdateCourseComponent implements OnChanges {
  delegateCourse = courseUseCaseProviders;
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
    if (this.courseInput !== undefined) {
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

  constructor(private courseService: CourseService, private router: Router) {}

  send() {
    this.course.content = this.FormRegister.get('content')?.value as never[];
    this.course.description = this.FormRegister.get('description')
      ?.value as string;
    this.course.duration = this.FormRegister.get('duration')?.value as string;
    this.course.requirements = this.FormRegister.get('requirements')
      ?.value as string;
    this.course.title = this.FormRegister.get('title')?.value as string;
    this.course.adminId = this.courseInput.adminId;
    this.course.id = this.courseInput.id;

    this.delegateCourse.updateCourseUseCaseProvider
      .useFactory(this.courseService)
      .execute(this.course.id, this.course)
      .subscribe({
        next: () => {
          this.sweet.toFire('Completo', 'Curso Actualizado', 'success');
          this.router.navigate(['/course/get-all']);
        },
        error: (err) => {
          if (err.status == 201) {
            this.sweet.toFire('Completo', 'Curso Actualizado', 'success');
          } else {
            this.sweet.toFire('Error', 'Error al Actualizar Curso', 'error');
          }
        },
      });
  }

  cancelar() {
    this.router.navigate(['/course/get-all']);
  }
}

import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CourseEntity } from '../../../domain/entities/course.entity.domain';
import { CourseService } from '../../../domain/services/course.service.domain';
import { courseUseCaseProviders } from '../../../infrastructure/delegate/delegate-course/delegate-course.infrastructure';

@Component({
  selector: 'app-create-course',
  templateUrl: './create-course.component.html',
  styleUrls: ['./create-course.component.css'],
})
export class CreateCourseComponent {
  delegateCourse = courseUseCaseProviders;

  FormRegister = new FormGroup({
    title: new FormControl('', [Validators.required,Validators.minLength(5)]),
    description: new FormControl('', [Validators.required,Validators.minLength(5)]),
    duration: new FormControl('', [Validators.required,Validators.minLength(5)]),
    requirements: new FormControl('', [Validators.required,Validators.minLength(5)]),
    content: new FormControl([''], [Validators.required,Validators.minLength(5)]),
    adminId: new FormControl('', [Validators.required,Validators.minLength(5)]),
  });
  course: CourseEntity = {} as CourseEntity;

  constructor(private courseService: CourseService, private router: Router) {}
  send() {
    this.course = this.FormRegister.getRawValue() as CourseEntity;

    this.delegateCourse.createCourseUseCaseProvaider
      .useFactory(this.courseService)
      .execute(this.course)
      .subscribe({
        next: (data) => {
          console.log(data);
        },
        error: (error) => {
          console.log(error);
        },
        complete: () => {
          console.log('complete');
        },
      });
  }
}

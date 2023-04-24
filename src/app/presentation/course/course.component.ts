import { Component } from '@angular/core';
import { courseUseCaseProviders } from '../../../../src/app/infrastructure/delegate/delegate-course/delegate-course.infrastructure';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CourseEntity } from '../../../../src/app/domain/entities/course.entity.domain';
import { CourseService } from '../../../../src/app/domain/services/course.service.domain';
import { Router } from '@angular/router';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css'],
})
export class CourseComponent {
  delegateCourse = courseUseCaseProviders;

  FormRegister = new FormGroup({
    title: new FormControl('', [Validators.required]),
    description: new FormControl('', [Validators.required]),
    duration: new FormControl('', [Validators.required]),
    requirements: new FormControl('', [Validators.required]),
    content: new FormControl([''], [Validators.required]),
    adminId: new FormControl('', [Validators.required]),
  });
  course: CourseEntity = {} as CourseEntity;

  constructor(private courseService: CourseService, private router: Router) {}
  send() {
    this.course.title = this.FormRegister.get('title')?.value as string;
    this.course.description = this.FormRegister.get('description')
      ?.value as string;
    this.course.duration = this.FormRegister.get('duration')?.value as string;
    this.course.requirements = this.FormRegister.get('requirements')
      ?.value as string;
    this.course.content = this.FormRegister.get('content')?.value as string[];
    this.course.adminId = this.FormRegister.get('adminId')?.value as string;

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

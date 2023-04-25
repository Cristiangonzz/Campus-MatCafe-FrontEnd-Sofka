import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CourseEntity } from 'src/app/domain/entities/course.entity.domain';
import { CourseService } from 'src/app/domain/services/course.service.domain';
import { courseUseCaseProviders } from 'src/app/infrastructure/delegate/delegate-course/delegate-course.infrastructure';

@Component({
  selector: 'app-create-route',
  templateUrl: './create-route.component.html',
  styleUrls: ['./create-route.component.css'],
})
export class CreateRouteComponent {
  delegeteUser = courseUseCaseProviders;

  FormRegister = new FormGroup({
    title: new FormControl('', [Validators.required, Validators.minLength(5)]),
    description: new FormControl('', [Validators.required, Validators.minLength(5)]),
    duration: new FormControl('', [Validators.required, Validators.minLength(5)]),
    requirements: new FormControl('', [Validators.required, Validators.minLength(5)]),
    content: new FormControl([''], [Validators.required, Validators.minLength(5)]),
    adminId: new FormControl('', [Validators.required, Validators.minLength(5)]),
  
   
  });
  user: CourseEntity = {} as CourseEntity;

  constructor(private courseService: CourseService, private router: Router) {}
  send(){}
}

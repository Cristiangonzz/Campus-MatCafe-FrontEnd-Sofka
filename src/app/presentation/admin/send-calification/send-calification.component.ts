import { courseUseCaseProviders } from './../../../infrastructure/delegate/delegate-course/delegate-course.infrastructure';
import { Component } from '@angular/core';
import { forkJoin, map, switchMap } from 'rxjs';
import { CalificationEntity } from 'src/app/domain/entities/calification.entity.domain';

import { AdminService } from 'src/app/domain/services/admin.service.domain';
import { CourseService } from 'src/app/domain/services/course.service.domain';
import { adminUseCaseProviders } from 'src/app/infrastructure/delegate/delegate-admin/delegate-admin.infrastructure';
import { SweetAlert } from '../../shared/sweetAlert/sweet-alert.presentation';

@Component({
  selector: 'app-send-calification',
  templateUrl: './send-calification.component.html',
  styleUrls: ['./send-calification.component.css'],
})
export class SendCalificationComponent {
  delegateAdmin = adminUseCaseProviders;
  adminEmail!: string;
  delegateCourse = courseUseCaseProviders;
  sweet = new SweetAlert()

  constructor(
    private readonly adminService: AdminService,
    private readonly courseService: CourseService
  ) {}
  github!: string;
  courseName!: string;
  comment!: string;
  ngOnInit(): void {
    const adminEmailStorage = localStorage.getItem('email');

    if (adminEmailStorage) {
      this.adminEmail = adminEmailStorage;
    }
  }

  submitForm(courseName: string, data: CalificationEntity) {
    const grade = parseInt(data.grade as string, 10);
    data.grade = grade;
    const courseId$ = this.delegateCourse.getCourseByNameUseCaseProvider
      .useFactory(this.courseService)
      .execute(courseName)
      .pipe(map((course) => ({ courseId: course._id })));

      const learnerId$ = this.delegateAdmin.getLearnerByEmailUseCaseProvider
      .useFactory(this.adminService)
      .execute(data.learnerId as string)
      .pipe(map((learner) => ({ learnerId: learner._id })));

      forkJoin([learnerId$, courseId$]).subscribe(([learner, course]) => {
        data.learnerId = learner.learnerId ?? ''
        data.courseId = course.courseId ?? '';
      return this.delegateAdmin.graderStudentUseCaseFactoryProvider
        .useFactory(this.adminService)
        .execute(data)
        .subscribe({
          next: () => {
            this.sweet.toFire("Completado",'Calificación enviada', 'success');
          },
          error: () => {
            this.sweet.toFire("Error",'Calificacion no enviada', 'error');
          },
        });
    });
  }
}

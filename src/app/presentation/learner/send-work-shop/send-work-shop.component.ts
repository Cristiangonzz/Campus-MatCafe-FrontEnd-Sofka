import { Component, Input } from '@angular/core';
import { forkJoin, map } from 'rxjs';
import { ISendWorkshop } from 'src/app/domain/interfaces/send-work-shop.interface.domain';
import { AdminService } from 'src/app/domain/services/admin.service.domain';
import { CourseService } from 'src/app/domain/services/course.service.domain';
import { LearnerService } from 'src/app/domain/services/learner.service.domain';
import { courseUseCaseProviders } from 'src/app/infrastructure/delegate/delegate-course/delegate-course.infrastructure';
import { learnerUseCaseProviders } from 'src/app/infrastructure/delegate/delegate-learner/delegate-learner.infrastructure';
import { SweetAlert } from '../../shared/sweetAlert/sweet-alert.presentation';
import { adminUseCaseProviders } from './../../../infrastructure/delegate/delegate-admin/delegate-admin.infrastructure';

@Component({
  selector: 'app-send-work-shop',
  templateUrl: './send-work-shop.component.html',
  styleUrls: ['./send-work-shop.component.css'],
})
export class SendWorkShopComponent {
  delegateLearner = learnerUseCaseProviders;
  delegateAdmin = adminUseCaseProviders;
  delegateCourse = courseUseCaseProviders;

  learnerEmail!: string;
  sweet: SweetAlert = new SweetAlert();

  @Input() courseName!: string;
  send = false;

  constructor(
    private readonly adminService: AdminService,
    private readonly learnerService: LearnerService,
    private readonly courseService: CourseService
  ) {}

  ngOnInit(): void {
    const learnerStorage = localStorage.getItem('email');

    if (learnerStorage) {
      this.learnerEmail = learnerStorage;
    }
  }

  sendWorkShop(github: string, coment: string): void {
    const learnerId$ = this.delegateAdmin.getLearnerByEmailUseCaseProvider
      .useFactory(this.adminService)
      .execute(this.learnerEmail)
      .pipe(map((learner) => ({ learnerId: learner._id })));
    const courseId$ = this.delegateCourse.getCourseByNameUseCaseProvider
      .useFactory(this.courseService)
      .execute(this.courseName)
      .pipe(map((course) => ({ courseId: course._id })));

    forkJoin([learnerId$, courseId$]).subscribe(([learner, course]) => {
      const sendWork: ISendWorkshop = {
        learnedId: learner.learnerId ?? '',
        github: github,
        courseid: course.courseId ?? '',
        coment: coment,
      };
      this.delegateLearner.sendWorkshopUseCaseProvider
        .useFactory(this.learnerService)
        .execute(sendWork)
        .subscribe({
          next: () => {
            this.sweet.toFire(
              'Enviado',
              'Se ha enviado el taller correctamente',
              'success'
            );
            this.send = true;
            this.delegateAdmin.hasNotificationUseCaseProvider
              .useFactory(this.adminService)
              .execute();
          },
          error: (err) => {
            if (err.status == 201) {
              this.sweet.toFire(
                'Enviado',
                'Se ha enviado el taller correctamente',
                'success'
              );
              this.delegateAdmin.hasNotificationUseCaseProvider
              .useFactory(this.adminService)
              .execute();
            } else {
              this.sweet.toFire('Error', 'No se pudo enviar la tarea', 'error');
            }
            this.send = true;
          },
        });
    });
  }
}

import { LearnerService } from 'src/app/domain/services/learner.service.domain';
import { AdminService } from 'src/app/domain/services/admin.service.domain';
import { adminUseCaseProviders } from './../../../infrastructure/delegate/delegate-admin/delegate-admin.infrastructure';
import { Component } from '@angular/core';
import { LearnerEntity } from 'src/app/domain/entities/learner.entity.domain';
import { learnerUseCaseProviders } from 'src/app/infrastructure/delegate/delegate-learner/delegate-learner.infrastructure';
import { courseUseCaseProviders } from 'src/app/infrastructure/delegate/delegate-course/delegate-course.infrastructure';
import { CourseService } from 'src/app/domain/services/course.service.domain';
import { forkJoin, map } from 'rxjs';
import { ISendWorkshop } from 'src/app/domain/interfaces/send-work-shop.interface.domain';

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

  sendWorkShop(github: string, courseName: string, coment: string): void {
    const learnerId$ = this.delegateAdmin.getLearnerByEmailUseCaseProvaider
      .useFactory(this.adminService)
      .execute(this.learnerEmail)
      .pipe(map((learner) => ({ learnerId: learner._id })));
    const courseId$ = this.delegateCourse.getCourseByNameUseCaseProvaider
      .useFactory(this.courseService)
      .execute(courseName)
      .pipe(map((course) => ({ courseId: course._id })));

    forkJoin([learnerId$, courseId$]).subscribe(([learner, course]) => {

      const sendWork: ISendWorkshop = {
        learnedId: learner.learnerId ?? '',
        github: github,
        courseid: course.courseId ?? '',
        coment: coment,
      };
      this.delegateLearner.sendWorkshopUseCaseProvaider
        .useFactory(this.learnerService)
        .execute(sendWork).subscribe();
    });
  }
}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { courseUseCaseProviders } from './delegate/delegate-course/delegate-course.infrastructure';
import { routeUseCaseProviders } from './delegate/delegate-route/delegate-route.infrastructure';
import { CourseService } from '../domain/services/course.service.domain';
import { RouteService } from '../domain/services/route.service.domain';
import { HttpClientModule } from '@angular/common/http';
import { CourseImplementationService } from './services/service-course/course.service.infrastructure';
import { RouteImplementationService } from './services/service-route/route.service.infrastructure';
import { adminUseCaseProviders } from './delegate/delegate-admin/delegate-admin.infrastructure';
import { AdminImplementationService } from './services/service-admin/admin.service.infrastructure';
import { AdminService } from '../domain/services/admin.service.domain';
import { loginUseCaseProviders } from './delegate/delegete-login/delegate-login.infrastructure';
import { learnerUseCaseProviders } from './delegate/delegate-learner/delegate-learner.infrastructure';
import { LearnerService } from '../domain/services/learner.service.domain';
import { LearnerImplementationService } from './services/service-learner/learner.service.infrastructure';

@NgModule({
  declarations: [],
  imports: [CommonModule, HttpClientModule],
  providers: [
    ...Object.values(courseUseCaseProviders),
    ...Object.values(routeUseCaseProviders),
    ...Object.values(adminUseCaseProviders),
    ...Object.values(loginUseCaseProviders),
    ...Object.values(learnerUseCaseProviders),

    { provide: RouteService, useClass: RouteImplementationService },
    { provide: CourseService, useClass: CourseImplementationService },
    { provide: AdminService, useClass: AdminImplementationService },
    { provide: LearnerService, useClass: LearnerImplementationService },
  ],
})
export class InfrastructureModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { courseUseCaseProviders } from './delegate/delegate-course/delegate-course.infrastructure';
import { routeUseCaseProviders } from './delegate/delegate-route/delegate-route.infrastructure';
import { CourseService } from '../domain/services/course.service.domain';
import { RouteService } from '../domain/services/route.service.domain';
import { HttpClientModule } from '@angular/common/http';
import { CourseImplementationService } from './services/service-course/course.service.infrastructure';
import { RouteImplementationService } from './services/service-route/route.service.infrastructure';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule,
  ],
  providers: [
    ...Object.values(courseUseCaseProviders),
    ...Object.values(routeUseCaseProviders),

    { provide: RouteService, useClass:  RouteImplementationService },
    { provide: CourseService, useClass: CourseImplementationService },

  ],

})
export class InfrastructureModule { }

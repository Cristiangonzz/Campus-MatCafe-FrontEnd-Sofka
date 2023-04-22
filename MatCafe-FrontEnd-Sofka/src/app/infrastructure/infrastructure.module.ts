import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { courseUseCaseProviders } from './delegate/delegate-course/delegate-course.infrastructure';
import { routeUseCaseProviders } from './delegate/delegate-route/delegate-route.infrastructure';
import { CourseService } from '../domain/services/course.service.domain';
import { RouteService } from '../domain/services/route.service.domain';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [
    ...Object.values(courseUseCaseProviders),
    ...Object.values(routeUseCaseProviders),

    //{ provide: RouteService, useClass: MemberImplementationRepository },
    //{ provide: CourseService, useClass: TeamImplementationRepository },

  ],

})
export class InfrastructureModule { }

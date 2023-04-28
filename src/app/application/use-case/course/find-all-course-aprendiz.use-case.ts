import { Injectable } from '@angular/core';
import { BehaviorSubject, asyncScheduler } from 'rxjs';
import { CourseEntity } from 'src/app/domain/entities/course.entity.domain';
import { LearnerEntity } from 'src/app/domain/entities/learner.entity.domain';
import { RouteEntity } from 'src/app/domain/entities/route.entity.domain';
import { AdminService } from 'src/app/domain/services/admin.service.domain';
import { CourseService } from 'src/app/domain/services/course.service.domain';
import { RouteService } from 'src/app/domain/services/route.service.domain';

@Injectable({
  providedIn: 'root',
})
export class GetAllCourseLearnerUseCase {
  private status: CourseEntity[] = [];

  public statusEmmit: BehaviorSubject<CourseEntity[]> = new BehaviorSubject<
    CourseEntity[]
  >(this.status);

  constructor(
    private courseservice: CourseService,
    private adminService: AdminService,
    private routeService: RouteService
  ) {}

  execute = () => {
    if (this.statusEmmit.observed && !this.statusEmmit.closed) {
      this.adminService
        .getLearnerByEmail(localStorage.getItem('email') as string)
        .subscribe({
          next: (value: LearnerEntity) => {
            this.routeService.getAll().subscribe({
              next: (route: RouteEntity[]) => {
                route.forEach((element: RouteEntity) => {
                  value.route?.forEach((routeLearner) => {
                    if (element.id == routeLearner) {
                      this.routeService.get(element.id).subscribe({
                        next: (routaBuscada: RouteEntity) => {
                          routaBuscada.courses?.forEach((courseBuscar) => {
                            this.courseservice
                              .getByName(courseBuscar)
                              .subscribe({
                                next: (course: CourseEntity) => {
                                  this.status.push(course);
                                },
                              });
                          });
                        },
                      });
                    }
                  });
                });
              },
              complete: () => {
                this.statusEmmit.next(this.status);
              },
            });
          },
        });
    } else {
      asyncScheduler.schedule(this.execute, 100);
    }
  };
}

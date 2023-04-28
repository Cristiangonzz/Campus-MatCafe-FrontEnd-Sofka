import { BehaviorSubject, asyncScheduler, filter } from 'rxjs';
import { Injectable, Pipe } from '@angular/core';
import { RouteEntity } from 'src/app/domain/entities/route.entity.domain';
import { RouteService } from 'src/app/domain/services/route.service.domain';
import { AdminService } from 'src/app/domain/services/admin.service.domain';
import { LearnerEntity } from 'src/app/domain/entities/learner.entity.domain';

@Injectable({
  providedIn: 'root',
})
export class GetAllRouteLearnerUseCase {
  private status: RouteEntity[] = [];

  public statusEmmit: BehaviorSubject<RouteEntity[]> = new BehaviorSubject<
    RouteEntity[]
  >(this.status);

  constructor(
    private routeservice: RouteService,
    private adminService: AdminService
  ) {}

  execute = () => {
    if (this.statusEmmit.observed && !this.statusEmmit.closed) {
      this.adminService
        .getLearnerByEmail(localStorage.getItem('email') as string)
        .subscribe({
          next: (value: LearnerEntity) => {
            this.routeservice.getAll().subscribe({
              next: (route: RouteEntity[]) => {
                route.forEach((element: RouteEntity) => {
                  value.route?.forEach((routeLearner) => {
                    if (element.id == routeLearner) {
                      this.status.push(element);
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

import { Component } from '@angular/core';
import { forkJoin, map } from 'rxjs';
import { ISuscribeRoute } from 'src/app/domain/interfaces/suscribe-route.inteface.domain';
import { AdminService } from 'src/app/domain/services/admin.service.domain';
import { LearnerService } from 'src/app/domain/services/learner.service.domain';
import { RouteService } from 'src/app/domain/services/route.service.domain';
import { adminUseCaseProviders } from 'src/app/infrastructure/delegate/delegate-admin/delegate-admin.infrastructure';
import { learnerUseCaseProviders } from 'src/app/infrastructure/delegate/delegate-learner/delegate-learner.infrastructure';
import { routeUseCaseProviders } from './../../../infrastructure/delegate/delegate-route/delegate-route.infrastructure';

@Component({
  selector: 'app-suscribe-route',
  templateUrl: './suscribe-route.component.html',
  styleUrls: ['./suscribe-route.component.css'],
})
export class SuscribeRouteComponent {
  delegateLearner = learnerUseCaseProviders;
  delegateAdmin = adminUseCaseProviders;
  delegateRoute = routeUseCaseProviders;

  adminEmail!: string;

  constructor(
    private readonly adminService: AdminService,
    private readonly learnerService: LearnerService,
    private readonly routeService: RouteService
  ) {}

  ngOnInit(): void {
    const learnerStorage = localStorage.getItem('email');

    if (learnerStorage) {
      this.adminEmail = learnerStorage;
    }
  }
  subscribeRoute(learnerEmail: string, routeName: string) {
    const learner$ = this.delegateAdmin.getLearnerByEmailUseCaseProvider
      .useFactory(this.adminService)
      .execute(learnerEmail)
      .pipe(map((learner) => ({ learnerId: learner._id })));
    const route$ = this.delegateRoute.getRouteByNameUseCaseProvider
      .useFactory(this.routeService)
      .execute(routeName)
      .pipe(map((route) => ({ routeId: route._id })));

    forkJoin([learner$, route$]).subscribe(([learner, route]) => {
      const subscribe: ISuscribeRoute = {
        learnedId: learner.learnerId ?? '',
        routeid: route.routeId ?? '',
      };
      this.delegateLearner.subscribeRouteCaseProvider
        .useFactory(this.learnerService)
        .execute(subscribe)
        .subscribe();
    });
  }
}

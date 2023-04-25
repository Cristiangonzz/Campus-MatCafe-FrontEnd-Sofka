import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { RouteEntity } from 'src/app/domain/entities/route.entity.domain';
import { RouteService } from 'src/app/domain/services/route.service.domain';
import { routeUseCaseProviders } from 'src/app/infrastructure/delegate/delegate-route/delegate-route.infrastructure';
import { SweetAlert } from '../../shared/sweetAlert/sweet-alert.presentation';

@Component({
  selector: 'app-get-all-route',
  templateUrl: './get-all-route.component.html',
  styleUrls: ['./get-all-route.component.css']
})
export class GetAllRouteComponent implements OnInit, OnDestroy {

  sweet = new SweetAlert();
  routes!: RouteEntity[];
  delegateRoute = routeUseCaseProviders;
  private onDestroy$: Subject<void> = new Subject<void>();

  constructor(private routeService: RouteService) {}

  ngOnInit() {
    this.delegateRoute.getAllRouteUseCaseProvaider
      .useFactory(this.routeService)
      .execute();

    this.delegateRoute.getAllRouteUseCaseProvaider
      .useFactory(this.routeService)
      .statusEmmit.pipe(takeUntil(this.onDestroy$))
      .subscribe({
        next: (value: RouteEntity[]) => {
          this.routes = value;
        },
        error: () => {
          this.sweet.toFire("Obtener Rutas","No se pudo obtener Rutas","error");
        }
      });
  }

  ngOnDestroy(): void {
    this.onDestroy$.next();
    this.onDestroy$.complete();
  }
}
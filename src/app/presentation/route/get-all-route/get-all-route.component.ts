import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { RouteEntity } from 'src/app/domain/entities/route.entity.domain';
import { RouteService } from 'src/app/domain/services/route.service.domain';
import { routeUseCaseProviders } from 'src/app/infrastructure/delegate/delegate-route/delegate-route.infrastructure';
import { SweetAlert } from '../../shared/sweetAlert/sweet-alert.presentation';
import { Router } from '@angular/router';

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

  constructor(private routeService: RouteService, private readonly router: Router) {}

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


  selected!: RouteEntity;

  showModal = false;

  openModal(i: number) {
    this.selected = this.routes[i];
    console.log(this.selected)
    this.showModal = true;
  }

  closeModal() {
    console.log('close modal');
    this.showModal = false;
  }

  deleteRoute(_id: string) {
    console.log("id para eliminar route",_id);
    this.delegateRoute.deleteRouteUseCaseProvaider.useFactory(this.routeService).
    execute(_id).subscribe({
      next: () => {
        this.sweet.toFire("Completo","Ruta Eliminada","success");
      },
      error: () => {
        this.sweet.toFire("Incompleto","No se pudo eliminar Ruta","error");
      },
      complete: () => {
        console.log('complete');
      },
    });
  }
  updateRoute(_id: string) {
   this.router.navigate([`route/update/${_id}`]);
  }
  ngOnDestroy(): void {
    this.onDestroy$.next();
    this.onDestroy$.complete();
  }
}
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subject, takeUntil } from 'rxjs';
import { RouteEntity } from 'src/app/domain/entities/route.entity.domain';
import { RouteService } from 'src/app/domain/services/route.service.domain';
import { routeUseCaseProviders } from 'src/app/infrastructure/delegate/delegate-route/delegate-route.infrastructure';
import Swal from 'sweetalert2';
import { SweetAlert } from '../../shared/sweetAlert/sweet-alert.presentation';
import { loginUseCaseProviders } from 'src/app/infrastructure/delegate/delegete-login/delegate-login.infrastructure';
import { AdminService } from 'src/app/domain/services/admin.service.domain';

@Component({
  selector: 'app-get-all-route',
  templateUrl: './get-all-route.component.html',
  styleUrls: ['./get-all-route.component.css'],
})
export class GetAllRouteComponent implements OnInit, OnDestroy {
  sweet = new SweetAlert();
  routes!: RouteEntity[];
  delegateRoute = routeUseCaseProviders;
  delegateLogin = loginUseCaseProviders;
  rol: boolean = false;
  selected!: RouteEntity;

  ArrayShowContent: boolean[] = [];

  showModal = false;
  private onDestroy$: Subject<void> = new Subject<void>();

  constructor(
    private adminService: AdminService,
    private routeService: RouteService,
    private readonly router: Router
  ) {}

  ngOnInit() {

    this.delegateLogin.hasRolUseCaseProvider.useFactory().execute();
    this.delegateLogin.hasRolUseCaseProvider
      .useFactory()
      .statusRolEmmit.subscribe({
        next: (value: boolean) => {
          if (value == true) {
            this.rol = true;
          } else {
            this.rol = false;
          }
        },
      });

    if(this.rol == true){
    this.delegateRoute.getAllRouteUseCaseProvider
      .useFactory(this.routeService)
      .execute();

    this.delegateRoute.getAllRouteUseCaseProvider
      .useFactory(this.routeService)
      .statusEmmit.pipe(takeUntil(this.onDestroy$))
      .subscribe({
        next: (value: RouteEntity[]) => {
          this.routes = value;
          if (this.ArrayShowContent.length == 0) {
            this.ArrayShowContent = new Array(this.routes.length).fill(false);
          }
        },
        error: () => {
          this.sweet.toFire(
            'Obtener Rutas',
            'No se pudo obtener Rutas',
            'error'
          );
        },
      });
  }else{
    
     this.delegateRoute.getAllRouteLearnerUseCaseProvider
      .useFactory(this.routeService, this.adminService)
      .execute();

    this.delegateRoute.getAllRouteLearnerUseCaseProvider
    .useFactory(this.routeService, this.adminService)
      .statusEmmit.pipe(takeUntil(this.onDestroy$))
      .subscribe({
        next: (value: RouteEntity[]) => {
          this.routes = value;
          if (this.ArrayShowContent.length == 0) {
            this.ArrayShowContent = new Array(this.routes.length).fill(false);
          }
        },
        error: () => {
          this.sweet.toFire(
            'Obtener Rutas',
            'No se pudo obtener Rutas',
            'error'
          );
        },
      });
      }
    
    
   
  }

  openModal(i: number) {
    this.selected = this.routes[i];
    this.showModal = true;
  }

  closeModal() {
    console.log('close modal');
    this.showModal = false;
  }

  deleteRoute(_id: string) {
    Swal.fire({
      title: '¿Estas seguro?',
      text: 'No podras revertir esta acción',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Si, Eliminar',
      cancelButtonText: 'Cancelar',
      confirmButtonColor: '#e64141',
    }).then((result) => {
      if (result.isConfirmed) {
        this.delegateRoute.deleteRouteUseCaseProvider
          .useFactory(this.routeService)
          .execute(_id)
          .subscribe({
            next: () => {
              this.sweet.toFire('Completo', 'Ruta Eliminada', 'success');
              this.updateListRoute();
            },
            error: () => {
            this.sweet.toFire(
                'Incompleto',
                'No se pudo eliminar Ruta',
                'error'
              );
            },
          });
      }
    });
  }

  ngOnDestroy(): void {
    this.onDestroy$.next();
    this.onDestroy$.complete();
  }

  showContent(i: number): boolean {
    this.ArrayShowContent[i] = !this.ArrayShowContent[i];
    return this.ArrayShowContent[i];
  }
  crearRuta() {
    this.updateListRoute();
    this.router.navigate(['route/create']);
  }
  updateListRoute(){
    if(this.rol == true){
      this.delegateRoute.getAllRouteUseCaseProvider
      .useFactory(this.routeService)
      .execute();
    }else{
      this.delegateRoute.getAllRouteLearnerUseCaseProvider
      .useFactory(this.routeService, this.adminService)
      .execute();
    }
  }
}

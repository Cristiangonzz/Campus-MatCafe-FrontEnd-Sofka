import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { RouteService } from 'src/app/domain/services/route.service.domain';
import { RouteEntity } from 'src/app/domain/entities/route.entity.domain';

@Injectable({
  providedIn: 'root',
})
export class UpdateRouteUseCase {
  constructor(private routeService: RouteService) {}

  execute(id: string, data: RouteEntity): Observable<RouteEntity> {
    return this.routeService.update(id, data);
  }
}

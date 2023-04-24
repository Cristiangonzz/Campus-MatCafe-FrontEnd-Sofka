import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { RouteService } from 'src/app/domain/services/route.service.domain';
import { RouteEntity } from 'src/app/domain/entities/route.entity.domain';

@Injectable({
  providedIn: 'root',
})
export class GetRouteUseCase {
  constructor(private routeService: RouteService) {}

  execute(data: string): Observable<RouteEntity> {
    return this.routeService.get(data);
  }
}

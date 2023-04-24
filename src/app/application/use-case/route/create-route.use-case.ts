import { Observable } from 'rxjs';
import { RouteEntity } from 'src/app/domain/entities/route.entity.domain';
import { RouteService } from 'src/app/domain/services/route.service.domain';

export class CreateRouteUseCase {
  constructor(private routeService: RouteService) {}

  execute(param: RouteEntity): Observable<RouteEntity> {
    return this.routeService.create(param);
  }
}

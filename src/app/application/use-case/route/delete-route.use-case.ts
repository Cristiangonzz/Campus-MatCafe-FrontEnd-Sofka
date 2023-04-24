import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { RouteService } from 'src/app/domain/services/route.service.domain';

@Injectable({
  providedIn: 'root',
})
export class DeleteRouteUseCase {
  constructor(private routeService: RouteService) {}

  execute(data: string): Observable<boolean> {
    return this.routeService.delete(data);
  }
}

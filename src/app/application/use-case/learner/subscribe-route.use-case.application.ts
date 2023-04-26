import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { LearnerService } from 'src/app/domain/services/learner.service.domain';
import { ISuscribeRoute } from 'src/app/domain/interfaces/suscribe-route.inteface.domain';

@Injectable({
  providedIn: 'root',
})
export class SuscribeRouteUseCase {
  constructor(private learnerService: LearnerService) {}

  execute(param: ISuscribeRoute): Observable<string> {
    return this.learnerService.subscribeRoute(param);
  }
}

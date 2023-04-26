import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ISuscribeRoute } from '../interfaces/suscribe-route.inteface.domain';
import { ISendWorkshop } from '../interfaces/send-work-shop.interface.domain';

@Injectable({
  providedIn: 'root',
})
export abstract class LearnerService {
  abstract sendWorkshop(data:
    ISendWorkshop
  ): Observable<string>;
  abstract subscribeRoute(data:
    ISuscribeRoute
  ): Observable<string>;
}

import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { LearnerService } from 'src/app/domain/services/learner.service.domain';
import { ISendWorkshop } from 'src/app/domain/interfaces/send-work-shop.interface.domain';

@Injectable({
  providedIn: 'root',
})
export class SendWorkshoplUseCase {
  constructor(private learnerService: LearnerService) {}

  execute(param: ISendWorkshop): Observable<string> {
    return this.learnerService.sendWorkshop(param);
  }
}

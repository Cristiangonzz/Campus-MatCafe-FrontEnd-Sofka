import { LearnerEntity } from 'src/app/domain/entities/learner.entity.domain';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { AdminService } from 'src/app/domain/services/admin.service.domain';

@Injectable({
  providedIn: 'root',
})
export class CreateLearnerUseCase {
  constructor(private adminService: AdminService) {}

  execute(param: LearnerEntity): Observable<LearnerEntity> {
    return this.adminService.createLearner(param);
  }
}

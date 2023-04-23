import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { AdminService } from 'src/app/domain/services/admin.service.domain';
import { LearnerEntity } from 'src/app/domain/entities/learner.entity.domain';

@Injectable({
  providedIn: 'root',
})
export class GetLearnerByEmailUseCase {
  constructor(private adminService: AdminService) {}

  execute(param: string): Observable<LearnerEntity> {
    return this.adminService.getLearnerByEmail(param);
  }
}

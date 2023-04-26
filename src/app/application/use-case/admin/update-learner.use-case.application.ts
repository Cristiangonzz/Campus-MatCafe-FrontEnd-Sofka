import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LearnerEntity } from 'src/app/domain/entities/learner.entity.domain';
import { IUpDateUser } from 'src/app/domain/interfaces/update-user.interface.domain';
import { AdminService } from 'src/app/domain/services/admin.service.domain';

@Injectable({
  providedIn: 'root',
})
export class UpdateLearnerUseCase {
  constructor(private adminService: AdminService) {}

  execute(id: string, data: IUpDateUser): Observable<LearnerEntity> {
    return this.adminService.updateLearner(id, data);
  }
}

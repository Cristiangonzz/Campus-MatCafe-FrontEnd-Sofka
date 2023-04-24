import { AdminEntity } from 'src/app/domain/entities/admin.entity.domain';
import { AdminService } from 'src/app/domain/services/admin.service.domain';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { IUser } from 'src/app/domain/interfaces/user.interface.domain';
import { LearnerEntity } from 'src/app/domain/entities/learner.entity.domain';

@Injectable({
  providedIn: 'root',
})
export class CreateUserUseCase {
  
  constructor(private adminService: AdminService) {}

  execute(param: IUser): Observable<AdminEntity | LearnerEntity> {
    return this.adminService.createUser(param);
  }
}

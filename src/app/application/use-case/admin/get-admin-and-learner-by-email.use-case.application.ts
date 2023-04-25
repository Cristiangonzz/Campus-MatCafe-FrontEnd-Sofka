import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { AdminService } from 'src/app/domain/services/admin.service.domain';
import { AdminEntity } from 'src/app/domain/entities/admin.entity.domain';

@Injectable({
  providedIn: 'root',
})
export class GetAdminAndLearnerByEmailUseCase {
  constructor(private adminService: AdminService) {}

  execute(param: string): Observable<AdminEntity> {
    return this.adminService.getAdminAndLearnerByEmail(param);
  }
}

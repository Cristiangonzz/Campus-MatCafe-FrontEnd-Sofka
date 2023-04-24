import { AdminEntity } from 'src/app/domain/entities/admin.entity.domain';
import { AdminService } from 'src/app/domain/services/admin.service.domain';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CreateAdminUseCase {
  constructor(private adminService: AdminService) {}

  execute(param: AdminEntity): Observable<AdminEntity> {
    return this.adminService.createAdmin(param);
  }
}

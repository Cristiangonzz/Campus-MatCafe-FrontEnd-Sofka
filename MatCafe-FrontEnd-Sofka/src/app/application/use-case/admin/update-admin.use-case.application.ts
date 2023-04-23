import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AdminEntity } from 'src/app/domain/entities/admin.entity.domain';
import { AdminService } from 'src/app/domain/services/admin.service.domain';

@Injectable({
  providedIn: 'root',
})
export class UpdateAdminUseCase {
  constructor(private adminService: AdminService) {}

  execute(id: string, data: AdminEntity): Observable<AdminEntity> {
    return this.adminService.updateAdmin(id, data);
  }
}

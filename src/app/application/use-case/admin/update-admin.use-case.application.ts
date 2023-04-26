import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AdminEntity } from 'src/app/domain/entities/admin.entity.domain';
import { IUpDateUser } from 'src/app/domain/interfaces/update-user.interface.domain';
import { AdminService } from 'src/app/domain/services/admin.service.domain';

@Injectable({
  providedIn: 'root',
})
export class UpdateAdminUseCase {
  constructor(private adminService: AdminService) {}

  execute(id: string, data: IUpDateUser): Observable<AdminEntity> {
    return this.adminService.updateAdmin(id, data);
  }
}

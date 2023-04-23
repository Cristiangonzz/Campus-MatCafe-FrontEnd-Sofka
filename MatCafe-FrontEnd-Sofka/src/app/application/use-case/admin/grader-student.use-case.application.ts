import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CalificationEntity } from 'src/app/domain/entities/calification.entity.domain';
import { AdminService } from 'src/app/domain/services/admin.service.domain';

@Injectable({
  providedIn: 'root',
})
export class GraderStudentUseCase {
  constructor(private adminService: AdminService) {}

  execute(param: CalificationEntity): Observable<string> {
    return this.adminService.graderStudent(param);
  }
}

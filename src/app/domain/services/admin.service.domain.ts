import { Injectable } from '@angular/core';
import { AdminEntity } from '../entities/admin.entity.domain';
import { LearnerEntity } from '../entities/learner.entity.domain';
import { Observable } from 'rxjs';
import { CalificationEntity } from '../entities/calification.entity.domain';

@Injectable({
  providedIn: 'root',
})
export abstract class AdminService {
  abstract createAdmin(data: AdminEntity): Observable<AdminEntity>;
  abstract createLearner(data: LearnerEntity): Observable<LearnerEntity>;
  abstract updateAdmin(
    email: string,
    data: AdminEntity
  ): Observable<AdminEntity>;
  abstract updateLearner(
    email: string,
    data: LearnerEntity
  ): Observable<LearnerEntity>;
  abstract getAdminByEmail(email: string): Observable<AdminEntity>;
  abstract getLearnerByEmail(email: string): Observable<LearnerEntity>;
  abstract graderStudent(data: CalificationEntity): Observable<string>;
}

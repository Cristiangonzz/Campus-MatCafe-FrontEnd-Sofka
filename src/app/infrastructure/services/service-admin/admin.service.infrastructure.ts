import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AdminEntity } from 'src/app/domain/entities/admin.entity.domain';
import { CalificationEntity } from 'src/app/domain/entities/calification.entity.domain';
import { LearnerEntity } from 'src/app/domain/entities/learner.entity.domain';
import { ICreateUser } from 'src/app/domain/interfaces/create-user.interface';
import { IUpDateUser } from 'src/app/domain/interfaces/update-user.interface.domain';
import { IUser } from 'src/app/domain/interfaces/user.interface.domain';
import { AdminService } from 'src/app/domain/services/admin.service.domain';

@Injectable({
  providedIn: 'root',
})
export class AdminImplementationService extends AdminService {
  URL = 'https://stable-use-production.up.railway.app';

  constructor(private http: HttpClient) {
    super();
  }

  httpOptions = {
    headers: new HttpHeaders({
      'Access-Control-Allow-Headers': 'Content-Type',
      'Access-Control-Allow-Methods': 'POST,GET,PUT,DELETE',
      'Access-Control-Allow-Origin': '*',
    }),
  };
  
  createUser(data: ICreateUser): Observable<LearnerEntity | AdminEntity> {
    return this.http.post<LearnerEntity | AdminEntity>(
      `${this.URL}/createUser`,
      data,
      this.httpOptions
    );
  }
  updateAdmin(email: string, data: IUpDateUser): Observable<AdminEntity> {
    return this.http.put<AdminEntity>(
      `${this.URL}/updateAdmin/${email}`,
      data,
      this.httpOptions
    );
  }
  updateLearner(email: string, data: IUpDateUser): Observable<LearnerEntity> {
    return this.http.put<LearnerEntity>(
      `${this.URL}/updateLearner/${email}`,
      data,
      this.httpOptions
    );
  }
  getAdminByEmail(email: string): Observable<AdminEntity> {
    return this.http.get<AdminEntity>(
      `${this.URL}/admin/${email}`,
      this.httpOptions
    );
  }
  getLearnerByEmail(email: string): Observable<LearnerEntity> {
    return this.http.get<LearnerEntity>(
      `${this.URL}/learner/${email}`,
      this.httpOptions
    );
  }
  getAdminAndLearnerByEmail(email: string): Observable<AdminEntity | LearnerEntity> {
    return this.http.get<LearnerEntity>(
      `${this.URL}/adminAndLearnerByEmail/${email}`,
      this.httpOptions
    );
  }
  graderStudent(data: CalificationEntity): Observable<string> {
    return this.http.post<string>(
      `${this.URL}/graderStudent`,
      data,
      this.httpOptions
    );
  }
}
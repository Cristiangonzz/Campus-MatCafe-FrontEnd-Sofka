import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CourseEntity } from 'src/app/domain/entities/course.entity.domain';
import { CourseService } from 'src/app/domain/services/course.service.domain';

@Injectable({
  providedIn: 'root',
})
export class CourseImplementationService extends CourseService {
  URL = 'https://gestion-de-project-backend-production.up.railway.app';

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
  create(Course: CourseEntity): Observable<CourseEntity> {
    return this.http.post<CourseEntity>(
      `${this.URL}/Course`,
      Course,
      this.httpOptions
    );
  }
  update(id: string, Course: CourseEntity): Observable<CourseEntity> {
    return this.http.put<CourseEntity>(
      `${this.URL}/Course/${id}`,
      Course,
      this.httpOptions
    );
  }
  delete(CourseId: string): Observable<boolean> {
    return this.http.delete<boolean>(
      `${this.URL}/Course/${CourseId}`,
      this.httpOptions
    );
  }
  get(CourseId: string): Observable<CourseEntity> {
    return this.http.get<CourseEntity>(
      `${this.URL}/Course/${CourseId}`,
      this.httpOptions
    );
  }
  getAll(): Observable<CourseEntity[]> {
    return this.http.get<CourseEntity[]>(
      `${this.URL}/Course`,
      this.httpOptions
    );
  }
}

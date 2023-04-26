import { Observable } from 'rxjs';

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export abstract class BaseService<T> {
  abstract create(data: T): Observable<T>;
  abstract update(id: string, Course: T): Observable<T>;
  abstract delete(id: string): Observable<boolean>;
  abstract get(id: string): Observable<T>;
  abstract getAll(): Observable<T[]>;
  abstract getByName(id: string): Observable<T>;

}

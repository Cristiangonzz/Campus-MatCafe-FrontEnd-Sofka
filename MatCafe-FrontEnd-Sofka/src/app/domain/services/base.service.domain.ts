import { Observable } from "rxjs";

export abstract class BaseService<T> {
    abstract  create(Course: T): Observable<T>;
    abstract  update(id: string, Course: T): Observable<T>;
    abstract  delete(CourseId: string): Observable<boolean>;
    abstract  get(CourseId: string): Observable<T>;
    abstract  getAll(): Observable<T[]>;
}


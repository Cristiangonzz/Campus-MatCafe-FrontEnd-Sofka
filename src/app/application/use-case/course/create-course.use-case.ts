import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CourseEntity } from 'src/app/domain/entities/course.entity.domain';
import { CourseService } from 'src/app/domain/services/course.service.domain';

@Injectable({
  providedIn: 'root',
})
export class CreateCourseUseCase {
  constructor(private courseService: CourseService) {}

  execute(param: CourseEntity): Observable<CourseEntity> {
    return this.courseService.create(param);
  }
}

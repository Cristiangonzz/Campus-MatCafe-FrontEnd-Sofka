import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { CourseService } from 'src/app/domain/services/course.service.domain';
import { CourseEntity } from 'src/app/domain/entities/course.entity.domain';

@Injectable({
  providedIn: 'root',
})
export class UpdateCourseUseCase {
  constructor(private courseService: CourseService) {}

  execute(id: string, data: CourseEntity): Observable<CourseEntity> {
    return this.courseService.update(id, data);
  }
}

import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { CourseService } from 'src/app/domain/services/course.service.domain';

@Injectable({
  providedIn: 'root',
})
export class DeleteCourseUseCase {
  constructor(private courseService: CourseService) {}

  execute(data: string): Observable<boolean> {
    return this.courseService.delete(data);
  }
}

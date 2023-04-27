import { Injectable } from '@angular/core';
import { BehaviorSubject, asyncScheduler } from 'rxjs';
import { CourseEntity } from 'src/app/domain/entities/course.entity.domain';
import { CourseService } from 'src/app/domain/services/course.service.domain';

@Injectable({
  providedIn: 'root',
})
export class GetAllCourseUseCase {
  private status: CourseEntity[] = [];

  public statusEmmit: BehaviorSubject<CourseEntity[]> = new BehaviorSubject<
    CourseEntity[]
  >(this.status);

  constructor(private courseservice: CourseService) {}

  execute = () => {
    if (this.statusEmmit.observed && !this.statusEmmit.closed) {
      this.courseservice.getAll().subscribe({
        next: (value: CourseEntity[]) => {
          this.status = value;
        },
        complete: () => {
          this.statusEmmit.next(this.status);
        },
      });
    } else {
      asyncScheduler.schedule(this.execute, 100);
    }
  };
}

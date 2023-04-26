import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { DeleteCourseUseCase } from 'src/app/application/use-case/course/delete-course.use-case';
import { CourseService } from 'src/app/domain/services/course.service.domain';
import { courseUseCaseProviders } from 'src/app/infrastructure/delegate/delegate-course/delegate-course.infrastructure';

@Component({
  selector: 'app-delete-course',
  templateUrl: './delete-course.component.html',
  styleUrls: ['./delete-course.component.css'],
})
export class DeleteCourseComponent {
  delegateCourse = courseUseCaseProviders;

  constructor(
    private courseService: CourseService,
    private deleteCourseUseCase: DeleteCourseUseCase,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  deleteCourse() {
    const courseId = this.activatedRoute.snapshot.params['id'];
    this.deleteCourseUseCase.execute(courseId).subscribe({
      next: (data) => {
        console.log(data);
        // redirigir a la lista de cursos
        this.router.navigate(['/courses']);
      },
      error: (error) => {
        console.log(error);
      },
      complete: () => {
        console.log('complete');
      },
    });
  }
}

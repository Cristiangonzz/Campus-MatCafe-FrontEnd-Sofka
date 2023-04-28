import { ICalification } from '../interfaces/calification.interface.domain';

export class CalificationEntity implements ICalification {
  grade?: number | string;
  comment?: string;
  courseId: string;
  learnerId?: string;

  constructor(
    courseId: string,
    grade?: number,
    comment?: string,
    learnerId?: string
  ) {
    this.grade = grade;
    this.comment = comment;
    this.courseId = courseId;
    this.learnerId = learnerId;

  }
}

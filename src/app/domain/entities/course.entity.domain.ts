import { ICourse } from '../interfaces/course.interface.domain';

export class CourseEntity implements ICourse {
  title: string;
  description: string;
  duration: string;
  requirements: string;
  content: string[];
  adminId: string;
  id?: string

  constructor(
    title: string,
    description: string,
    duration: string,
    requirements: string,
    content: string[],
    adminId: string,
    id?: string
  ) {
    this.title = title;
    this.description = description;
    this.duration = duration;
    this.requirements = requirements;
    this.content = content;
    this.adminId = adminId;
  }
}

import { ICourse } from '../interfaces/course.interface.domain';

export class CourseEntity implements ICourse {
  title: string;
  description: string;
  duration: string;
  requirements: string;
  content: string[];
  adminId: string;

  constructor(
    title?: string,
    description?: string,
    duration?: string,
    requirements?: string,
    content?: string[],
    adminId?: string
  ) {
    this.title = title as string;
    this.description = description as string;
    this.duration = duration as string;
    this.requirements = requirements as string;
    this.content = content as string[];
    this.adminId = adminId as string;
  }
}

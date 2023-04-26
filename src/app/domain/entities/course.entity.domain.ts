import { ICourse } from '../interfaces/course.interface.domain';

export class CourseEntity implements ICourse {
  id: string;
  _id?: string;
  title: string;
  description: string;
  duration: string;
  requirements: string;
  content: string[];
  adminId: string;

  constructor(
    id?: string,

    title?: string,
    description?: string,
    duration?: string,
    requirements?: string,
    content?: string[],
    adminId?: string
  ) {
    this.id = id as string;
    this.title = title as string;
    this.description = description as string;
    this.duration = duration as string;
    this.requirements = requirements as string;
    this.content = content as string[];
    this.adminId = adminId as string;
  }
}

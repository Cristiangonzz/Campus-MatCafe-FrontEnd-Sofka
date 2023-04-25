import { ICourse } from './course.interface.domain';

export interface IRoute {
  title: string;
  description: string;
  duration: string;
  courses: ICourse[];
  adminId: string;
  id?: string

}

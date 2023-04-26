import { ICourse } from './course.interface.domain';

export interface IRoute {
  _id?: string;
  title?: string;
  description?: string;
  duration?: string;
  courses?: string[];
  adminId?: string;

}

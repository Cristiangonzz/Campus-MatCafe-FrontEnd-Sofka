import { ICourse } from './course.interface.domain';

export interface IRoute {
  id?: string;
  title?: string;
  description?: string;
  duration?: string;
  courses?: string[];
  adminId?: string;

}

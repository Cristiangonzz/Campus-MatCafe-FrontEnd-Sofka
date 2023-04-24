import { ICourse } from './course.interface.domain';
import { INotification } from './notification.interface.domain';
import { IRoute } from './route.interface.domain';
import { IUser } from './user.interface.domain';

export interface IAdmin extends IUser {
  course?: ICourse[];
  route?: IRoute[];
  notifications?: INotification[];
}

import { IAdmin } from '../interfaces/admin.interface';
import { ICourse } from '../interfaces/course.interface.domain';
import { IRoute } from '../interfaces/route.interface.domain';
import { NotificationEntity } from './notification.entity.domain';

export class AdminEntity implements IAdmin {
  course?: ICourse[];
  route?: IRoute[];
  notifications?: NotificationEntity[];
  email: string;
  firebaseId?: string;
  name: string;
  photoUrl?: string;
  rol: boolean;
  

  constructor(
    name: string,
    email: string,
    rol: boolean,
    firebaseId?: string,
    photoUrl?: string
  ) {
    this.name = name;
    this.email = email;
    this.firebaseId = firebaseId;
    this.photoUrl = photoUrl;
    this.rol = rol;
  }
}

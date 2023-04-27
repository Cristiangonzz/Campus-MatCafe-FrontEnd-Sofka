import { ICalification } from '../interfaces/calification.interface.domain';
import { ILearner } from '../interfaces/learner.interface.domain';
import { IRoute } from '../interfaces/route.interface.domain';

export class LearnerEntity implements ILearner {
  calification?: ICalification[];
  route?: IRoute[];
  email: string;
  firebaseId?: string;
  name: string;
  photoUrl?: string;
  rol: boolean;
  _id?: string;

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

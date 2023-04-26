import { ICalification } from './calification.interface.domain';
import { IRoute } from './route.interface.domain';
import { IUser } from './user.interface.domain';

export interface ILearner extends IUser {
  calification?: ICalification[];
  route?: IRoute[];
  
}

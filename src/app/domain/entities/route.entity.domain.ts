import { IRoute } from '../interfaces/route.interface.domain';

export class RouteEntity implements IRoute {
  _id: string;
  title: string;
  description: string;
  duration: string;
  courses: string[];
  adminId: string;

  constructor(
    _id?: string,
    title?: string,
    description?: string,
    duration?: string,
    courses?: string[],
    adminId?: string
  ) {
    this._id = _id as string;
    this.title = title as string;
    this.description = description as string;
    this.duration = duration as string;
    this.courses = courses as string[];
    this.adminId = adminId as string;
  }
}

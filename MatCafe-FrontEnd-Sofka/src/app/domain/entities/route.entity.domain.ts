import { ICourse } from "../interfaces/course.interface.domain";
import { IRoute } from "../interfaces/route.interface.domain";

export class RouteEntity implements IRoute {
    title: string;
    description: string;
    duration: string;
    courses: ICourse[];
    adminId: string;

    constructor(
        title: string,
        description: string,
        duration: string,
        courses: ICourse[],
        adminId: string,
      ) {
        this.title = title;
        this.description = description;
        this.duration = duration;
        this.courses = courses;
        this.adminId = adminId;
      }
}
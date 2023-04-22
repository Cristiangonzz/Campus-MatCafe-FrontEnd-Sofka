import { Observable } from "rxjs";
import { CourseEntity } from "../entities/course.entity.domain";
import { BaseService } from "./base.service.domain";


export abstract class CourseService extends BaseService<CourseEntity>{
}


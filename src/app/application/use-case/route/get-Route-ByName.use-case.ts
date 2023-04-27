import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { CourseEntity } from "src/app/domain/entities/course.entity.domain";
import { RouteEntity } from "src/app/domain/entities/route.entity.domain";
import { CourseService } from "src/app/domain/services/course.service.domain";
import { RouteService } from "src/app/domain/services/route.service.domain";

@Injectable({
    providedIn: 'root',
  })
  export class GetRouteByNameUseCase {
    constructor(private routeService: RouteService) {}
  
    execute(data: string): Observable<RouteEntity> {
      return this.routeService.getByName(data);
    }
  }
  
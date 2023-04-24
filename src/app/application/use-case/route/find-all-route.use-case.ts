import { BehaviorSubject, asyncScheduler } from 'rxjs';
import { Injectable } from '@angular/core';
import { RouteEntity } from 'src/app/domain/entities/route.entity.domain';
import { RouteService } from 'src/app/domain/services/route.service.domain';

@Injectable({
  providedIn: 'root',
})
export class GetAllRouteUseCase {
  private status: RouteEntity[] = [];

  public statusEmmit: BehaviorSubject<RouteEntity[]> = new BehaviorSubject<
    RouteEntity[]
  >(this.status);

  constructor(private routeservice: RouteService) {}

  execute = () => {
    if (this.statusEmmit.observed && !this.statusEmmit.closed) {
      this.routeservice.getAll().subscribe({
        next: (value: RouteEntity[]) => {
          this.status = value;
        },
        complete: () => {
          this.statusEmmit.next(this.status);
          console.log('complete');
          asyncScheduler.schedule(this.execute, 2000);
        },
      });
    } else {
      asyncScheduler.schedule(this.execute, 100);
    }
  };
}

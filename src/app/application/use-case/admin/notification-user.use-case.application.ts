import { Injectable } from '@angular/core';
import { BehaviorSubject, asyncScheduler } from 'rxjs';
import { AdminEntity } from 'src/app/domain/entities/admin.entity.domain';
import { INotification } from 'src/app/domain/interfaces/notification.interface.domain';
import { AdminService } from 'src/app/domain/services/admin.service.domain';

@Injectable({
  providedIn: 'root',
})
export class HasNotificationUseCase {
  private status: INotification[] = [] as INotification[];
  public statusRolEmmit: BehaviorSubject<INotification[]> = new BehaviorSubject<
    INotification[]
  >(this.status);
  constructor(private readonly adminService: AdminService) {}

  execute = () => {
    if (this.statusRolEmmit.observed && !this.statusRolEmmit.closed) {
      this.adminService.getAdminByEmail(localStorage.getItem("email") || "").subscribe({
        next: (value: AdminEntity) => {
          this.status = value.notifications as INotification[];
        },
        error: (err) => {
          console.log(err);
        },
        complete: () => {
          this.statusRolEmmit.next(this.status);
        },
      });
    }else {
      console.log("No se puede ejecutar");
      asyncScheduler.schedule(this.execute, 1000);
    }

  };
}


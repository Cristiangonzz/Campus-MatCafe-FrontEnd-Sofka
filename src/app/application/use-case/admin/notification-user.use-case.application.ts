import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { INotification } from "src/app/domain/interfaces/notification.interface.domain";

@Injectable({
    providedIn: 'root',
  })
  export class HasNotificationUseCase {
    private status: INotification[] = [] as INotification[];
    public statusRolEmmit: BehaviorSubject<INotification[]> = new BehaviorSubject<INotification[]>(
      this.status
    );
  
  
    execute():void {
      if (typeof localStorage.getItem('notificaciones') == "string" ) {
       const variable = localStorage.getItem('notificaciones') as string;
       console.log(variable);
        this.status = JSON.parse(variable) as INotification[];
        console.log(this.status);
        this.statusRolEmmit.next(this.status);
      }
     
    }
  }
  
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HasRolUseCase {
  private status: boolean = false;
  public statusRolEmmit: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(
    this.status
  );

  execute(): Observable<boolean> {
    if (localStorage.getItem('rol') == 'true') {
      this.status = true;
      this.statusRolEmmit.next(this.status);
      return of(true);
    }
    this.status = false;
    this.statusRolEmmit.next(this.status);
    return of(false);
  }
}

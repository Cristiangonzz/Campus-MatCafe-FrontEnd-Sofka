import { Injectable } from '@angular/core';
import { ILocalStorageUser } from 'src/app/domain/interfaces/local-storage-user.interface.domain';
import { INotification } from 'src/app/domain/interfaces/notification.interface.domain';
import { IUser } from 'src/app/domain/interfaces/user.interface.domain';

@Injectable({
  providedIn: 'root',
})
export class SetUserLocalStorageUseCase {
  execute(param: ILocalStorageUser): void {
    localStorage.setItem('email', param.email);

    localStorage.setItem('firebaseId', param.firebaseId as string);

    localStorage.setItem('name', param.name as string);

    localStorage.setItem('photoUrl', param.photoUrl as string);
    
    localStorage.setItem('notificaciones', JSON.stringify(param.notifiaction));

    if (!param.rol) {
      localStorage.setItem('rol', 'false');
    } else {
      localStorage.setItem('rol', 'true');
    }
  }
}

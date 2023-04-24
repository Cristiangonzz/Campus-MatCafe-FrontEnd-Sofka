import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { IUser } from 'src/app/domain/interfaces/user.interface.domain';

@Injectable({
  providedIn: 'root',
})
export class SetUserLocalStorageUseCase {
  execute(param: IUser): void {
    localStorage.setItem('email', param.email);

    localStorage.setItem('firebaseId', param.firebaseId as string);

    localStorage.setItem('name', param.name as string);

    localStorage.setItem('photoUrl', param.photoUrl as string);

    if (!param.rol) {
      localStorage.setItem('rol', 'false');
    } else {
      localStorage.setItem('rol', 'true');
    }
  }
}

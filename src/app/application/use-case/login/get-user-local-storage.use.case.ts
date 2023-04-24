import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { IUser } from 'src/app/domain/interfaces/user.interface.domain';

@Injectable({
  providedIn: 'root',
})
export class GetUserLocalStorageUseCase {
  execute(): Observable<IUser> {
    const email = localStorage.getItem('email');
    const firebaseId = localStorage.getItem('firebaseId');
    const name = localStorage.getItem('name');
    const photoUrl = localStorage.getItem('photoUrl');
    const rol = localStorage.getItem('rol');

    if (!email || !firebaseId || !name || !photoUrl || !rol)
      throw console.error('No existe User en Local Storage');
    const user: IUser = {
      email: email,
      firebaseId: firebaseId,
      name: name,
      photoUrl: photoUrl,
      rol: rol === 'true' ? true : false,
    };

    return of(user);
  }
}

import { INotification } from "./notification.interface.domain";

export interface ILocalStorageUser {

    email: string;
    firebaseId?: string;
    name?: string;
    photoUrl?: string;
    rol: boolean;
    notifiaction: INotification[]
  }
  
export interface IUser {
  _id?:string;
  email: string;
  firebaseId?: string;
  name?: string;
  photoUrl?: string;
  rol: boolean;
}

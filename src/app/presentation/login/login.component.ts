import { Component } from '@angular/core';
import { loginUseCaseProviders } from 'src/app/infrastructure/delegate/delegete-login/delegate-login.infrastructure';
import {
  Auth,
  GoogleAuthProvider,
  signInWithPopup,
  UserCredential,
} from '@angular/fire/auth';
import { adminUseCaseProviders } from 'src/app/infrastructure/delegate/delegate-admin/delegate-admin.infrastructure';
import { AdminService } from 'src/app/domain/services/admin.service.domain';
import { GetAdminAndLearnerByEmailUseCase } from 'src/app/application/use-case/admin/get-admin-and-learner-by-email.use-case.application';
import { ICreateUser } from 'src/app/domain/interfaces/create-user.interface';
import { IUser } from 'src/app/domain/interfaces/user.interface.domain';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  delegateLogin = loginUseCaseProviders;
  delegateAdmin = adminUseCaseProviders;
  user: IUser = {} as IUser;
  constructor(
    private auth: Auth,
    private readonly adminService: AdminService
  ) {}

  google() {
    signInWithPopup(this.auth, new GoogleAuthProvider())
      .then((result: UserCredential) => {
        console.log(result);
        this.delegateAdmin.getAdminAndLearnerByEmailUseCaseProvaider
          .useFactory(this.adminService)
          .execute(result.user.email as string)
          .subscribe((data) => {
            this.user.email = result.user.email as string;
            this.user.firebaseId = result.user.uid as string;
            this.user.name = result.user.displayName as string;
            this.user.photoUrl = result.user.photoURL as string;
            this.user.rol = data.rol;
            this.delegateLogin.setUserLocalStrotageUseCaseProvaider
              .useFactory()
              .execute(this.user);
            console.log(data);
          });
      })
      .catch((error) => {
        console.log('', error);
      });
  }
}

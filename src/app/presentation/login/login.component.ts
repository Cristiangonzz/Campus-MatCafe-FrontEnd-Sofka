import { Component } from '@angular/core';
import {
  Auth,
  GoogleAuthProvider,
  UserCredential,
  signInWithPopup,
} from '@angular/fire/auth';
import { Router } from '@angular/router';
import { AdminEntity } from 'src/app/domain/entities/admin.entity.domain';
import { IUpDateUser } from 'src/app/domain/interfaces/update-user.interface.domain';
import { IUser } from 'src/app/domain/interfaces/user.interface.domain';
import { AdminService } from 'src/app/domain/services/admin.service.domain';
import { adminUseCaseProviders } from 'src/app/infrastructure/delegate/delegate-admin/delegate-admin.infrastructure';
import { loginUseCaseProviders } from 'src/app/infrastructure/delegate/delegete-login/delegate-login.infrastructure';
import { SweetAlert } from '../shared/sweetAlert/sweet-alert.presentation';
import { ILocalStorageUser } from 'src/app/domain/interfaces/local-storage-user.interface.domain';
import { INotification } from 'src/app/domain/interfaces/notification.interface.domain';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  delegateLogin = loginUseCaseProviders;
  delegateAdmin = adminUseCaseProviders;

  sweet = new SweetAlert();
  user: ILocalStorageUser = {} as ILocalStorageUser;
  updateUser: IUpDateUser = {} as IUpDateUser;

  constructor(
    private auth: Auth,
    private readonly adminService: AdminService,
    private readonly router: Router
  ) {}

  google() {
    signInWithPopup(this.auth, new GoogleAuthProvider())
      .then((result: UserCredential) => {
        console.log(result);
        this.delegateAdmin.getAdminAndLearnerByEmailUseCaseProvider
          .useFactory(this.adminService)
          .execute(result.user.email as string)
          .subscribe((data: AdminEntity) => {
            this.user.email = result.user.email as string;
            this.user.firebaseId = result.user.uid;
            this.user.name = result.user.displayName as string;
            this.user.photoUrl = result.user.photoURL as string;
            this.user.rol = data.rol;
            this.user.notifiaction = data.notifications as INotification[];

            JSON.stringify(this.user.notifiaction);
            console.log('Notificacion al logearse', this.user.notifiaction);
            this.updateUser.firebaseId = result.user.uid;
            this.updateUser.photoUrl = result.user.photoURL as string;
            if (data.rol === true) {
              this.delegateAdmin.updateAdminUseCaseProvider
                .useFactory(this.adminService)
                .execute(data.email, this.updateUser)
                .subscribe({
                  next: () => {
                    this.sweet.toFire(
                      'User',
                      `Bienvenido ${this.user.name}`,
                      'success'
                    );
                    this.delegateAdmin.hasNotificationUseCaseProvider
                    .useFactory(this.adminService)
                    .execute();
                    this.delegateLogin.setUserLocalStrotageUseCaseProvider
                    .useFactory()
                    .execute(this.user);
                    this.router.navigate(['home']);
                  },
                  error: () => {
                    this.sweet.toFire(
                      'User',
                      `No se actualizo usuario`,
                      'error'
                    );
                  },
                });
            } else {
              this.delegateAdmin.updateLearnerUseCaseProvider
                .useFactory(this.adminService)
                .execute(data.email, this.updateUser)
                .subscribe({
                  next: () => {
                    this.sweet.toFire(
                      'User',
                      `Bienvenido ${this.user.name}`,
                      'success'
                    );
                      this.delegateLogin.setUserLocalStrotageUseCaseProvider
                      .useFactory()
                      .execute(this.user);
                    this.router.navigate(['home']);
                  },
                  error: () => {
                    this.sweet.toFire(
                      'User',
                      `No se actualizo usuario`,
                      'error'
                    );
                  },
                });
            }
          });
      })
      .catch(() => {
        this.sweet.toFire('User', `Error al Iniciar sesion `, 'error');
      });

    this.router.navigate(['home']);
  }
}

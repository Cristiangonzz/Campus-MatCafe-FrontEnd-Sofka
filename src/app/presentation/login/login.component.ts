import { Component, OnInit } from '@angular/core';
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
import { Router } from '@angular/router';
import { AdminEntity } from 'src/app/domain/entities/admin.entity.domain';
import { SweetAlert } from '../shared/sweetAlert/sweet-alert.presentation';
import { IUpDateUser } from 'src/app/domain/interfaces/update-user.interface.domain';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  delegateLogin = loginUseCaseProviders;
  delegateAdmin = adminUseCaseProviders;

  sweet = new SweetAlert();
  user: IUser = {} as IUser;
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
        this.delegateAdmin.getAdminAndLearnerByEmailUseCaseProvaider
          .useFactory(this.adminService)
          .execute(result.user.email as string)
          .subscribe((data: AdminEntity) => {
            this.user.email = result.user.email as string;
            this.user.firebaseId = result.user.uid as string;
            this.user.name = result.user.displayName as string;
            this.user.photoUrl = result.user.photoURL as string;
            this.user.rol = data.rol;
            this.updateUser.firebaseId = result.user.uid as string;
            this.updateUser.photoUrl = result.user.photoURL as string;
            console.log('Datos del get email', data);
            console.log(this.updateUser);
            if (data.rol === true) {
              console.log('es admin');
              this.delegateAdmin.updateAdminUseCaseProvaider
                .useFactory(this.adminService)
                .execute(data.email as string, this.updateUser)
                .subscribe({
                  next: (update: AdminEntity) => {
                    console.log('Admin Updateado', update);
                    this.sweet.toFire(
                      'User',
                      `Bienvenido ${this.user.name}`,
                      'success'
                    );
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
              console.log("es aprendiz")
              this.delegateAdmin.updateLearnerUseCaseProvaider
                .useFactory(this.adminService)
                .execute(data.email as string, this.updateUser)
                .subscribe({
                  next: () => {
                    this.sweet.toFire(
                      'User',
                      `Bienvenido ${this.user.name}`,
                      'success'
                    );
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
            this.delegateLogin.setUserLocalStrotageUseCaseProvaider
              .useFactory()
              .execute(this.user);
            this.router.navigate(['/admin']);
          });
      })
      .catch(() => {
        this.sweet.toFire('User', `Error al Iniciar sesion `, 'error');
      });
  }
}

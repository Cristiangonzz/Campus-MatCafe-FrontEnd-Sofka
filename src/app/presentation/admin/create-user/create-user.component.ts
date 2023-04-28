import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ICreateUser } from 'src/app/domain/interfaces/create-user.interface';
import { AdminService } from 'src/app/domain/services/admin.service.domain';
import { adminUseCaseProviders } from 'src/app/infrastructure/delegate/delegate-admin/delegate-admin.infrastructure';
import { SweetAlert } from '../../shared/sweetAlert/sweet-alert.presentation';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css'],
})
export class CreateUserComponent {
  delegeteUser = adminUseCaseProviders;
  sweet = new SweetAlert();

  FormRegister = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(5)]),
    email: new FormControl('', [Validators.required, Validators.email]),
    rol: new FormControl<boolean>(false, []),
  });

  user: ICreateUser = {} as ICreateUser;

  constructor(private adminService: AdminService, private router: Router) {}

  send() {
    this.user = this.FormRegister.getRawValue() as ICreateUser;

    this.delegeteUser.createUserUseCaseProvider
      .useFactory(this.adminService)
      .execute(this.user)
      .subscribe({
        next: () => {
          this.sweet.toFire('Completo', `Usuario Creado`, 'success');
          this.FormRegister.reset();
        },
        error: (error) => {
          this.sweet.toFire(
            'Incompleto',
            `Usuario Incorrecto ${JSON.stringify(error)}`,
            'error'
          );
        },
      });
  }
}

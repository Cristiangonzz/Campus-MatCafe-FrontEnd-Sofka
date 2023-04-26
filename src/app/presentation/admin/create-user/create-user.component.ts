import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { adminUseCaseProviders } from 'src/app/infrastructure/delegate/delegate-admin/delegate-admin.infrastructure';
import { AdminService } from 'src/app/domain/services/admin.service.domain';
import { Router } from '@angular/router';
import { ICreateUser } from 'src/app/domain/interfaces/create-user.interface';
import { Observable, of } from 'rxjs';
import { SweetAlert } from '../../shared/sweetAlert/sweet-alert.presentation';
import { LearnerEntity } from 'src/app/domain/entities/learner.entity.domain';
import { AdminEntity } from 'src/app/domain/entities/admin.entity.domain';

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

    this.delegeteUser.createUserUseCaseProvaider
      .useFactory(this.adminService)
      .execute(this.user)
      .subscribe({
        next: () => {
          this.sweet.toFire('Completo', `Usurio Creado`, 'success');
        },
        error: (error) => {
          this.sweet.toFire('Incompleto', `Usuario Incorrecto ${JSON.stringify(error)}`, 'error');
        },
      });
  }
}

import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { adminUseCaseProviders } from 'src/app/infrastructure/delegate/delegate-admin/delegate-admin.infrastructure';
import { AdminService } from 'src/app/domain/services/admin.service.domain';
import { Router } from '@angular/router';
import { ICreateUser } from 'src/app/domain/interfaces/create-user.interface';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css'],
})
export class CreateUserComponent {
  delegeteUser = adminUseCaseProviders;

  FormRegister = new FormGroup({
    name: new FormControl('', [Validators.required , Validators.minLength(5)]),
    email: new FormControl('', [Validators.required, Validators.email]),
    rol: new FormControl<boolean>(false, []),
  });

  user: ICreateUser = {} as ICreateUser;

  constructor(private adminService: AdminService, private router: Router) {}

  send() {
    this.user = this.FormRegister.getRawValue() as ICreateUser;

    this.delegeteUser.getAdminByEmailUseCaseProvaider
      .useFactory(this.adminService)
      .execute(this.user.email)
      .subscribe({
        next: (data) => {
          if (data == null) {
            this.delegeteUser.getLearnerByEmailUseCaseProvaider
              .useFactory(this.adminService)
              .execute(this.user.email)
              .subscribe({
                next: (data) => {
                  if (data == null) {
                    this.delegeteUser.createUserUseCaseProvaider
                      .useFactory(this.adminService)
                      .execute(this.user)
                      .subscribe({
                        next: (data) => {
                          console.log("Usario Creado correctamente",data);
                        },
                        error: (error) => {
                          throw new error('Error al crear el usuario');
                        }
                      });
                  }else{
                    alert('El usuario ya existe');
                  }
                },
              });
          }else{
            alert('El usuario ya existe');
          }
        },
      });
  }
}

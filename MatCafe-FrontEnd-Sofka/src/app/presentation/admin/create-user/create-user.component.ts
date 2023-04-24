import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AdminEntity } from 'src/app/domain/entities/admin.entity.domain';
import { adminUseCaseProviders } from 'src/app/infrastructure/delegate/delegate-admin/delegate-admin.infrastructure';
import { AdminService } from 'src/app/domain/services/admin.service.domain';
import { Router } from '@angular/router';
import { LearnerEntity } from 'src/app/domain/entities/learner.entity.domain';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css'],
})
export class CreateUserComponent {
  delegeteUser = adminUseCaseProviders;

  FormRegister = new FormGroup({
    name: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    rol: new FormControl<boolean>(false, []),
  });

  admin: AdminEntity = {} as AdminEntity;
  user: LearnerEntity = {} as LearnerEntity;

  constructor(private adminService: AdminService, private router: Router) {}

  send() {
    this.admin.name = this.FormRegister.get('name')?.value as string;
    this.admin.email = this.FormRegister.get('email')?.value as string;
    this.admin.rol = this.FormRegister.get('rol')?.value as boolean;
    console.log(this.admin);

    if (!this.admin.rol) {
      this.user.email = this.admin.email;
      this.user.name = this.admin.name;
      this.user.rol = this.admin.rol;
      if (!this.getEmail()){}
        this.delegeteUser.createUserUseCaseProvaider
          .useFactory(this.adminService)
          .execute(this.user)
          .subscribe({
            next: (data) => {
              console.log(data);
            },
            error: (error) => {
              console.log(error);
            },
            complete: () => {
              console.log('complete');
            },
          });
      return;
    }
    this.delegeteUser.createUserUseCaseProvaider
      .useFactory(this.adminService)
      .execute(this.admin)
      .subscribe({
        next: (data) => {
          console.log(data);
        },
        error: (error) => {
          console.log(error);
        },
        complete: () => {
          console.log('complete');
        },
      });
  }

  getEmail():boolean{
    let varaible = false;

    this.delegeteUser.getAdminByEmailUseCaseProvaider
      .useFactory(this.adminService)
        .execute(this.user.email)
          .subscribe({
            next: (data) => {
              console.log(data);
              varaible = true;
            },
            error: (error) => {
              console.log(error);
              varaible = false;
            },
            complete: () => {
              console.log('complete');
            },
          });



    this.delegeteUser.getLearnerByEmailUseCaseProvaider
      .useFactory(this.adminService)
        .execute(this.user.email)
          .subscribe({
            next: (data) => {
              console.log(data);
              varaible = true;
            },
            error: (error) => {
              console.log(error);
              varaible = false;
            },
            complete: () => {
              console.log('complete');
            },
          });

    return varaible;

  }
}

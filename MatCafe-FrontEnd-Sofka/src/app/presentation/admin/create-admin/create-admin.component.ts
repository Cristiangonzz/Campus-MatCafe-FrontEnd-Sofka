import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AdminEntity } from 'src/app/domain/entities/admin.entity.domain';
import { IAdmin } from '../../../domain/interfaces/admin.interface';
import { adminUseCaseProviders } from 'src/app/infrastructure/delegate/delegate-admin/delegate-admin.infrastructure';
import { AdminService } from 'src/app/domain/services/admin.service.domain';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-admin',
  templateUrl: './create-admin.component.html',
  styleUrls: ['./create-admin.component.css'],
})
export class CreateAdminComponent {
  delegeteAdmin = adminUseCaseProviders;

  FormRegister = new FormGroup({
    name: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    rol: new FormControl<boolean>(false, []),
  });

  admin: AdminEntity = {} as AdminEntity;
  activo = true;
  constructor(private adminService: AdminService, private router: Router) {}

  updateRol(event: Event) {
    const checkbox = event.target as HTMLInputElement;
    this.FormRegister.patchValue({
      rol: checkbox.checked,
    });
  }
  send() {
    this.admin.name = this.FormRegister.get('name')?.value as string;
    this.admin.email = this.FormRegister.get('email')?.value as string;
    this.admin.rol = this.FormRegister.get('rol')?.value as boolean;
    console.log(this.admin);
    this.delegeteAdmin.createAdminUseCaseProvaider
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
}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GetLearnerByEmailComponent } from './get-learner-by-email/get-learner-by-email.component';
import { GetAdminByEmailComponent } from './get-admin-by-email/get-admin-by-email.component';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { InfrastructureModule } from 'src/app/infrastructure/infrastructure.module';
import { CreateUserComponent } from './create-user/create-user.component';



@NgModule({
  declarations: [
    CreateUserComponent,
    GetLearnerByEmailComponent,
    GetAdminByEmailComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,

    InfrastructureModule,
    SharedModule, 
  
  ],
  exports: [
    CreateUserComponent
  ],
})
export class AdminModule { }

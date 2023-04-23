import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateAdminComponent } from './create-admin/create-admin.component';
import { CreateLearnerComponent } from './create-learner/create-learner.component';
import { GetLearnerByEmailComponent } from './get-learner-by-email/get-learner-by-email.component';
import { GetAdminByEmailComponent } from './get-admin-by-email/get-admin-by-email.component';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { InfrastructureModule } from 'src/app/infrastructure/infrastructure.module';



@NgModule({
  declarations: [
    CreateAdminComponent,
    CreateLearnerComponent,
    GetLearnerByEmailComponent,
    GetAdminByEmailComponent
  ],
  imports: [
    CommonModule,
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,

    InfrastructureModule,
    SharedModule, 
  //  RoutingLoginModule,
  ],
  exports: [
    CreateAdminComponent,
  ],
})
export class AdminModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { InfrastructureModule } from 'src/app/infrastructure/infrastructure.module';
import { CreateUserComponent } from './create-user/create-user.component';
import { RoutingAdminModule } from './routing-admin.module';



@NgModule({
  declarations: [
    CreateUserComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RoutingAdminModule,

    InfrastructureModule,
    SharedModule, 
  
  ],
  exports: [
  ],
})
export class AdminModule { }

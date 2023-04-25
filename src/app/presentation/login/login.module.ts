import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { InfrastructureModule } from 'src/app/infrastructure/infrastructure.module';
import { RoutingLoginModule } from './routing-login.module';



@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    RoutingLoginModule,
    InfrastructureModule,
  ],
  exports: [LoginComponent]
})
export class LoginModule { }

import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { InfrastructureModule } from 'src/app/infrastructure/infrastructure.module';
import { SharedModule } from '../shared/shared.module';
import { RoutingHomeModule } from './routing-home.module';
<<<<<<< HEAD
import { HomeComponent } from './home/home.component';
=======
import { NavbarComponent } from '../shared/navbar/navbar.component';
>>>>>>> Carlos

@NgModule({
  declarations: [
    HomeComponent,
  ],
  imports: [
    CommonModule,
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RoutingHomeModule,
    InfrastructureModule,
    SharedModule,
  ],
  exports: [],
})
export class HomeModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { InfrastructureModule } from 'src/app/infrastructure/infrastructure.module';



@NgModule({
  declarations: [
  
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
  
  ],
  exports: [

  ],
})
export class RouteModule { }

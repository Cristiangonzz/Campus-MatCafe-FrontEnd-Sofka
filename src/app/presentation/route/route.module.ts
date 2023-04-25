import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { InfrastructureModule } from 'src/app/infrastructure/infrastructure.module';
import { CreateRouteComponent } from './create-route/create-route.component';
import { GetAllRouteComponent } from './get-all-route/get-all-route.component';
import { GetRouteComponent } from './get-route/get-route.component';
import { UpdateRouteComponent } from './update-route/update-route.component';
import { RoutingRouteModule } from './routing-route.module';



@NgModule({
  declarations: [
    CreateRouteComponent,
    GetAllRouteComponent,
    GetRouteComponent,
    UpdateRouteComponent,
  ],
  imports: [
    CommonModule,
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RoutingRouteModule,
    InfrastructureModule,
    SharedModule, 
  
  ],
  exports: [],
})
export class RouteModule { }

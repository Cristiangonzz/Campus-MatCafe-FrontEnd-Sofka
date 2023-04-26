import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { InfrastructureModule } from 'src/app/infrastructure/infrastructure.module';
import { SuscribeRouteComponent } from './suscribe-route/suscribe-route.component';
import { SendWorkShopComponent } from './send-work-shop/send-work-shop.component';
import { RoutingLearnerModule } from './routing-route.module';



@NgModule({
  declarations: [
    SuscribeRouteComponent,
    SendWorkShopComponent,
  ],
  imports: [
    CommonModule,
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,

    InfrastructureModule,
    RoutingLearnerModule,
    SharedModule, 
  
  ],
  exports: [

  ],
})
export class LearnerModule { }

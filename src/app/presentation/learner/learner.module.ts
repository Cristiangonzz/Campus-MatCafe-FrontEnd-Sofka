import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { InfrastructureModule } from 'src/app/infrastructure/infrastructure.module';
import { SharedModule } from '../shared/shared.module';
import { RoutingLearnerModule } from './routing-route.module';
import { SuscribeRouteComponent } from './suscribe-route/suscribe-route.component';

@NgModule({
  declarations: [SuscribeRouteComponent],
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
  exports: [],
})
export class LearnerModule {}

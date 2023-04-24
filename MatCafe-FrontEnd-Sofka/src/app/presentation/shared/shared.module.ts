import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormComponent } from './form/form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InfrastructureModule } from 'src/app/infrastructure/infrastructure.module';



@NgModule({
  declarations: [
    FormComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    InfrastructureModule,
  ],
  exports: [
    FormComponent
  ]
})
export class SharedModule { }

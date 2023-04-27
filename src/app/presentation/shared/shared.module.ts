import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InfrastructureModule } from 'src/app/infrastructure/infrastructure.module';
import { FormComponent } from './form/form.component';

@NgModule({
  declarations: [FormComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    InfrastructureModule,
  ],
  exports: [FormComponent],
})
export class SharedModule {}

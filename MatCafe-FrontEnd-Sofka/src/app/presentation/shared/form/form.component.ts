import { Component, Inject, Input, inject } from '@angular/core';
import { ControlContainer, FormControl } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
   viewProviders: [
     {
       provide: ControlContainer,
       useFactory: () => 
       inject(ControlContainer , { skipSelf : true, host : true } )
     },
   ],

})
export class FormComponent {
  
  @Input() control: FormControl= new FormControl();
  @Input() label: string = ""
  @Input() type: string = ""
  @Input() inputId: string = ""
  @Input() placeHolder: string = "";
 

  errorMessages: Record<string, string> = {
    required: 'this field is required',
    email: 'this email is invalid',
    minlength: 'this field must have at least 8 characters',
  };
}

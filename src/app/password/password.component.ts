import { Component} from '@angular/core';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { PasswordValidators } from '../common/validators/passworld-validator';
import { FlaskService } from '../flask-service.service';

@Component
({
  selector: 'password',
  templateUrl: './password.component.html',
  styleUrls: ['./password.component.css']
})
export class PasswordComponent{
  form: FormGroup;
  constructor(fb: FormBuilder, private service: FlaskService) 
  {
    this.form = fb.group({
      oldPassword: ['', 
        Validators.required, 
        PasswordValidators.validOldPassword
      ],
      newPassword: ['', Validators.required],
      confirmPassword: ['', Validators.required]
    }, 
    {
      validators: PasswordValidators.passwordsMatch
    });
  }

  flasks: any[];
  error: any[];
  
  get oldPassword()
  {
    return this.form.get('oldPassword');
  }
  get newPassword()
  {
    return this.form.get('newPassword');
  }
  get confirmPassword()
  {
    return this.form.get('confirmPassword');
  }

  onSubmit(form)
  {
    console.log(form);
    this.service.UpdatePassword(form)
    .subscribe(flasks => 
      {
        this.flasks = flasks
      }, error =>
      {
        this.error = error;
      });
      console.log(this.flasks)
  }
}

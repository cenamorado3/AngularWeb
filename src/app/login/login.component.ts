import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { LoginService } from '../Services/login-service.service';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
displayLoginForm: boolean;
form: FormGroup;
  constructor(fb: FormBuilder, private service: LoginService) {
    this.form = fb.group({
      account: ['', Validators.required],
      password:['', Validators.required]
    })
   }

  ngOnInit() {
  }
  onSubmit(form)
  {
    this.service.ValidateUser(form.value).subscribe(msg =>
      {
        console.log(form.value)
        alert(msg['Response']);
      });
  }

  toggle()
  {
    this.displayLoginForm = !this.displayLoginForm;
  }
}

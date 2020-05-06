import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { LoginService } from '../Services/login-service.service';
import { TokenValidator } from '../common/TokenHandlers/TokenValidator';
import { JWTTokenGenerator } from '../common/TokenHandlers/JWTGenerator';

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

  // ngOnDestroy()
  // {
        //NEED TO CLOSE SUBSCRIPTION(s) TO PREVENT DATA LEAK
  // }
  onSubmit(form)
  {
    this.service.ValidateUser(form.value).subscribe(msg =>
      {
        //alert(msg['Response']);
      });

      TokenValidator.ValidateToken(this.service).then(onfullfilled => {
        console.log(JWTTokenGenerator.GenerateTokenFromPayload(JSON.stringify(form.value), onfullfilled['Token']));
      }).catch(onrejected =>{
        console.log(onrejected['Token']);
      });
  }

  toggle()
  {
    this.displayLoginForm = !this.displayLoginForm;
  }
}

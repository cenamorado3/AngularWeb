import {AbstractControl} from '@angular/forms'
import { FlaskService } from '../../flask-service.service';

export class PasswordValidators
{
    static service: any;
    static flasks: any;
    static error: any;
    static validOldPassword(control: AbstractControl)
    {
        return new Promise((resolve) =>
        {
            // let password = this.GetPassword()
            // console.log(password);
            if(control.value !== '2')
            {
                resolve({invalidOldPassword: true});
            }
            else
            {
                resolve(null);
            }
        });
    }
    static passwordsMatch(control: AbstractControl)
    {
        let newPassword = control.get('newPassword');
        let confirmPassword = control.get('confirmPassword');
        if(newPassword.value !== confirmPassword.value)
        {
            return {passwordsMatch: true};
        }

        return null;
    }

    static GetPassword()
    {
        this.service.GetPassword()
        .subscribe(flasks => 
          {
            this.flasks = flasks;
          }, error =>
          {
            this.error = error;
          });
        return this.flasks;
    }
}


//BREAK THESE UP INTO SEPERATE REQUEST
//GET THE THE CURRENT USER, MOCK THIS
//VALIDATE THE OLD PASSWORD AGAINST WHAT THE SERVER RETURNED
//RESOLVE THE PROMISE BY UPDATING THE PASSWORDS
//SPINKLE SALT WITH AN ENCRYPTION IF YOUR HEART SO DESIRES
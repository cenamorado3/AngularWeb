import {AbstractControl} from '@angular/forms'

export class PasswordValidators
{
    static validOldPassword(control: AbstractControl)
    {
        return new Promise((resolve) =>
        {
            if(control.value !== '1234')
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
}


//BREAK THESE UP INTO SEPERATE REQUEST
//GET THE THE CURRENT USER, MOCK THIS
//VALIDATE THE OLD PASSWORD AGAINST WHAT THE SERVER RETURNED
//RESOLVE THE PROMISE BY UPDATING THE PASSWORDS
//SPINKLE SALT WITH AN ENCRYPTION IF YOUR HEART SO DESIRES
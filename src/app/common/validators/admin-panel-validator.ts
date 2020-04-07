import {AbstractControl} from '@angular/forms'

export class AdminPanelValidator
{
    static GetDeleteRadio(control: AbstractControl)
    {
        return new Promise((resolve) =>
        {
            if(control.value === 'Create')
            {
                resolve({Create: true});
            }

            if(control.value === 'Update')
            {
                resolve({Update: true});
            }

            if(control.value === 'Delete')
            {
                resolve({Delete: true});
            }

            else
            {
                resolve({formType: false});
            }
        });
    }
    static GetRadioControl(control: AbstractControl)
    {
        let radio = control.get('formType');
        if(radio.value === 'Delete')
        {
            return {formType: 'Delete'};
        }

        return null;
    }
}


//BREAK THESE UP INTO SEPERATE REQUEST
//GET THE THE CURRENT USER, MOCK THIS
//VALIDATE THE OLD PASSWORD AGAINST WHAT THE SERVER RETURNED
//RESOLVE THE PROMISE BY UPDATING THE PASSWORDS
//SPINKLE SALT WITH AN ENCRYPTION IF YOUR HEART SO DESIRES
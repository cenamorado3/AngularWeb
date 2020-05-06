import {LoginService} from '../../Services/login-service.service';
import { isNullOrUndefined } from 'util';

export class TokenValidator
{
    
    static _Signature : string;
    static get Signature() : string {
        return this._Signature;
    }
    static set Signature(v : string) {
        this._Signature = v;
    }   
    
    static async ValidateToken(service)
    {
        this.GetSig(service);
        await this.sleep(100);
        return new Promise((resolve, reject) =>
        {

            if(this.ValidateSignature())
            {
                resolve({Token: this.Signature});
            }
            else
            {
                reject({Token: 'Invalid or expired.'});
            }
        })
    }
    
    static GetSig(service)
    {
        service.GetSignature().subscribe(sig => 
        {
            this.Signature = sig['Signature'];
        },  error =>
        {
            console.log('ERROR');
            this.Signature = null;
        });
        return this.Signature
    }
    static ValidateSignature()
    {
        if(!isNullOrUndefined(this.Signature))
        {
            return true;
        }
        
        else
        {
            return false;
        }
    }

    static sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
      }
}
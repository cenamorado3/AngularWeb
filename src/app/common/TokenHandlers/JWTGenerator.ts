import { stringify } from 'querystring';
import { KJUR } from 'jsrsasign';
import {TokenValidator} from './TokenValidator'
import { Token } from '@angular/compiler/src/ml_parser/lexer';

export class JWTTokenGenerator {
    static GenerateTokenFromPayload(json, sig) {
        return KJUR.jws.JWS.sign(null, { alg: "HS256" }, json, sig);//KJUR.jws.JWS.readSafeJSONString(json);
    }

}


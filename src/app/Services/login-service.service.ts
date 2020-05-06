import { Injectable } from '@angular/core';
import { RestService } from './rest.service';
import { HttpClient } from '@angular/common/http';
import { map, catchError, delay } from 'rxjs/operators';
import { JWTTokenGenerator } from '../common/TokenHandlers/JWTGenerator';
import {TokenValidator} from '../common/TokenHandlers/TokenValidator';

@Injectable({
  providedIn: 'root'
})
export class LoginService extends RestService{

  constructor(http: HttpClient) {
    super('http://127.0.0.1:5000/archive/login', http);
  }

  ValidateUser(payload)
  {
    return this.http.post(this.url, payload)
    .pipe(map((response: any) => response, catchError((response: any) => this.handleError(response))));
  }

  GetSignature()
  {
    return this.http.get(this.url + '/signing')
    .pipe(map((response: any) => response, catchError((response: any) => this.handleError(response))));
  }
}
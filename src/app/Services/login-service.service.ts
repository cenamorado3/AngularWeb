import { Injectable } from '@angular/core';
import { RestService } from './rest.service';
import { HttpClient } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';

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
}
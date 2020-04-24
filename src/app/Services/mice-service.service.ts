import { Injectable } from '@angular/core';
import { RestService } from './rest.service';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MiceService extends RestService{

  constructor(http: HttpClient) {
    super('http://127.0.0.1:5000/archive/mice', http);
  }
}
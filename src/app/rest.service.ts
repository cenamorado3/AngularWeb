import { NotFoundError } from './common/HttpErrorHandlers/NotFoundError';
import { BadInputError } from './common/HttpErrorHandlers/BadInputError';
import { AppError } from './common/HttpErrorHandlers/AppError';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
// import 'rxjs/add/operator/catch';
// import 'rxjs/add/operator/map';
// import 'rxjs/add/operator/toPromise';
// import 'rxjs/add/observable/throw';
import { map, catchError} from 'rxjs/operators';

@Injectable()
export class RestService {
  constructor(private url: string, private http: HttpClient) { }

  getAll() {
    return this.http.get(this.url)
    .pipe(map((response: any) => response, catchError((response:Response) => this.handleError(response))));
  }

  create(resource) {
    let header = new HttpHeaders({
      'Access-Control-Allow-Origin': 'http://127.0.0.1:5000/archive/form'
    });
    return this.http.post(this.url + 'archive/form', resource, {headers: header})
    .pipe(map((response: any) => response, catchError((response: any) => this.handleError(response))));
  }

  UpdatePassword(resource) {
    let header = new HttpHeaders({
      'Access-Control-Allow-Origin': 'http://127.0.0.1:5000/archive/password'
    });
    return this.http.put(this.url + 'archive/password', resource, {headers: header})
    .pipe(map((response: any) => response, catchError((response: any) => this.handleError(response))));
  }
  GetPassword() {
    let header = new HttpHeaders({
      'Access-Control-Allow-Origin': 'http://127.0.0.1:5000/archive/password'
    });
    return this.http.get(this.url + 'archive/password', {headers: header})
    .pipe(map((response: any) => response, catchError((response: any) => this.handleError(response))));
  }

  update(resource) {
    return this.http.patch(this.url + '/' + resource.id, JSON.stringify({ isRead: true }))
    .pipe(map((response: any) => response), catchError((response:Response) => this.handleError(response)));
  }

  delete(id) {
    return this.http.delete(this.url + '/' + id)
    .pipe(map((response: any) => response, catchError((response:Response) => this.handleError(response))));
  }

  private handleError(error: Response) {
    if (error.status === 400)
      return Observable.throw(new BadInputError(error));
  
    if (error.status === 404)
      return Observable.throw(new NotFoundError());
    
    return Observable.throw(new AppError(error));
  }
}

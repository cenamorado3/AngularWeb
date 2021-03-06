import { NotFoundError } from '../common/HttpErrorHandlers/NotFoundError';
import { BadInputError } from '../common/HttpErrorHandlers/BadInputError';
import { AppError } from '../common/HttpErrorHandlers/AppError';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
// import 'rxjs/add/operator/catch';
// import 'rxjs/add/operator/map';
// import 'rxjs/add/operator/toPromise';
// import 'rxjs/add/observable/throw';
import { map, catchError} from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export abstract class IRestService{

  create(resource): any
  {}
  delete(id: string, payload: any): any
  {}
  update(id:string, payload: any): any
  {}
  getAll(): any
  {}
}


@Injectable({
  providedIn: 'root'
})
export class RestService implements IRestService{
  constructor(public url: string, public http: HttpClient) {
   }

  getAll() {
    return this.http.get(this.url)
    .pipe(map((response: any) => response, catchError((response: any) => this.handleError(response))));
  }
  create(resource) {
    return this.http.post(this.url, resource)
    .pipe(map((response: any) => response, catchError((response: any) => this.handleError(response))));
  }

  update(id, payload) {
    return this.http.patch(this.url + '/' + id, payload)
    .pipe(map((response: any) => response), catchError((response: any) => this.handleError(response)));
  }

  delete(id, payload): any {
    return this.http.delete(this.url + '/' + id).pipe(map((response: any) => response), catchError((response: Response) => this.handleError(response)));
  }

  handleError(error: Response) {
    if (error.status === 400)
      return Observable.throw(new BadInputError(error));
  
    if (error.status === 404)
      return Observable.throw(new NotFoundError());
    
    return Observable.throw(new AppError(error));
  }



  //MOVE TO RESPECTIVE SERVICE
  UpdatePassword(resource) {
    let header = new HttpHeaders({
      'Access-Control-Allow-Origin': 'http://127.0.0.1:5000'
    });
    return this.http.put(this.url + 'archive/password', resource, {headers: header})
    .pipe(map((response: any) => response, catchError((response: any) => this.handleError(response))));
  }
  GetPassword() {
    let header = new HttpHeaders({
      'Access-Control-Allow-Origin': 'http://127.0.0.1:5000'
    });
    return this.http.get(this.url + 'archive/password', {headers: header})
    .pipe(map((response: any) => response, catchError((response: any) => this.handleError(response))));
  }

}

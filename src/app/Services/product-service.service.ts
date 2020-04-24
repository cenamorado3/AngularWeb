import { RestService, IRestService } from './rest.service';
import { HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class ProductService extends RestService implements IRestService{

  constructor(http: HttpClient) {
    super('http://127.0.0.1:5000/archive/keyboards', http);
  }
}

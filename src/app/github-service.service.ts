import { RestService } from './rest.service';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class GithubFollowersService extends RestService {

  constructor(http: HttpClient) {
    super('https://api.github.com/users/cenamorado3/followers', http);
  }
}

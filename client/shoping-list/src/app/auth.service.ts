import { Injectable } from '@angular/core';
import { map, filter, scan } from 'rxjs/operators';
import { Http, Response, RequestOptions, Headers } from '@angular/http';

import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map'
@Injectable()
export class AuthService {
  people: any;

  constructor(
    private http: Http,
  ) { }



  signUp(data) {
    let headers = new Headers()
    headers.append('content-Type', 'application/json');
    return this.http.post('http://localhost:3000/signup', data, { headers: headers }).pipe(
      map(res => res.json()));
  }

  login(data) {
    return this.http.post('http://localhost:3000/login',data).pipe(
      map(res => res.json()));
  }
 

}


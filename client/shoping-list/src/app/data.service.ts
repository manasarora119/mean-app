import { Injectable } from '@angular/core';
import { map, filter, scan } from 'rxjs/operators';
import { Http, Response, RequestOptions, Headers } from '@angular/http';

import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map'
@Injectable()
export class DataService {
  people: any;

  constructor(
    private http: Http,
  ) { }

  getItems() {
    // this.http.get('people.json').subscribe((res:Response) => this.people = res.json());


    return this.http.get('http://localhost:3000/api/items').pipe(
      map(res => res.json()));


  }
  addItem(newItem) {
    let headers = new Headers()
    headers.append('content-Type', 'application/json');

    return this.http.post('http://localhost:3000/api/item', newItem, { headers: headers }).pipe(
      map(res => res.json()));
  }
  deleteItem(id) {

    return this.http.delete('http://localhost:3000/api/item/' + id).pipe(
      map(res => res.json()));
  }
  editItem(newItem) {
    let headers = new Headers()
    headers.append('content-Type', 'application/json');

    return this.http.put('http://localhost:3000/api/item/' + newItem._id, newItem, { headers: headers }).pipe(
      map(res => res.json()));

  }

}


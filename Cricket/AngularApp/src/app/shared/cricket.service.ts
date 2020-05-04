import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

import { Cricket } from './cricket.model';

@Injectable()
export class CricketService {
  selectedCricket: Cricket;
  crickets: Cricket[];
  readonly baseURL = 'http://localhost:3000/crickets';

  constructor(private http: HttpClient) { }

  postCricket(emp: Cricket) {
    return this.http.post(this.baseURL, emp);
  }

  getCricketList() {
    return this.http.get(this.baseURL);
  }

  putCricket(emp: Cricket) {
    return this.http.put(this.baseURL + `/${emp._id}`, emp);
  }

  deleteCricket(_id: string) {
    return this.http.delete(this.baseURL + `/${_id}`);
  }

}

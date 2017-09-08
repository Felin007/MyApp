/**
 * Created by Felin on 2017/9/5.
 */

import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';


@Injectable()
export class AppService {
  private headers = new Headers({'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*'});

  constructor(private http: Http) { }

  getDate(): Promise<void> {
    // const url = `/api/orderSvc/9e4b9bfe64664c77b05e5a449188cfe4`;
    const url = `/api/userlist`;
    return this.http.get(url, {headers: this.headers})
      .toPromise()
      .then(response => response.json())
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}

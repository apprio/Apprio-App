import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';


let apiUrl = 'http://52.54.81.207/c/tribbles/api/';
const httpOptions = {
};
@Injectable()
export class ApiProvider {

  constructor(public http: Http) {
    console.log('Hello ApiProvider Provider');
  }

  private extractData(res: Response) {
    let body = res;
    return body || { };
  }

  register(data): Observable<any> {
    return this.http.post(apiUrl+'browser', data, httpOptions);
  }

  getUser(id): Observable<any> {
    return this.http.post(apiUrl+'browser'+id, httpOptions);
  }

}

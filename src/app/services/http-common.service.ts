import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class HttpCommonService {

  constructor(public http: HttpClient) { }

  get(url: string): Observable<any> {
    return this.http.get(url);
  }

  post(url: string, data:any): Observable<any> {
    return this.http.post(url, data);
  }

  delete(url: string, option?:any): Observable<any> {
    if (!!option === true) {
      return this.http.delete(url, option);
    } else {
      return this.http.delete(url);
    }

  }

  setPayload(retObj:any) {
    return retObj || {};
  }
}

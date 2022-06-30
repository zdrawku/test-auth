import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const API_ENDPOINT = 'https://cce-test.icon.ua.coface.com:443/web/api/bi/v1';

@Injectable({
  providedIn: 'root'
})
export class DataSource3Service {
  constructor(private http: HttpClient) { }

  public getCountries(): Observable<any> {
    const options = {
      headers: {
        api_key: '<api_key>',
      }
    };
    return this.http.get(`${API_ENDPOINT}/countries`, options);
  }
}

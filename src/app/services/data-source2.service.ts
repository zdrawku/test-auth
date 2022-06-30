import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataSource2Service {
  constructor(private http: HttpClient) { }

  public getTable1(): Observable<any> {
    const options = {
      headers: {
        Authorization: '',
      }
    };
    return this.http.get(`https://excel2json.io/api/share/caf8b771-6361-47a0-4354-08da496bf5f2`, options);
  }
}

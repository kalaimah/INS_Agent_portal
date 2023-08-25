import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CgformServiceTsService {
    constructor(private http: HttpClient) { }

    sendData(data: any): Observable<any> {
      const url = 'http://localhost:4200/cg-form'; // replace with your server URL
      return this.http.post<any>(url, data);
    }
  }


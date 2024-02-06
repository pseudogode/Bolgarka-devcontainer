import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TestHttpClientService {
  apiUrl = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  getTestData(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/testData`);
  }
}

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { retry, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InitService {
  progress = 0;
  total = 3; // Set the total number of initialization steps

  constructor(private http: HttpClient) { }
   
  init() {
    const url = `http://localhost:8080/WebTechnikonProject/resources/initialization`;
    const headers = new HttpHeaders()
      .set('Content-Type', 'application/json')
      .set('crossDomain', 'true');
    return this.http.get(url, { headers: headers })
      .pipe(
        retry(1),
      );
  }
}

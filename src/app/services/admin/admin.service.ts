import { Injectable } from '@angular/core';
import { HttpClient, HttpHandler, HttpHeaders, HttpParams } from '@angular/common/http';
import { throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http: HttpClient) { }

  getAll() {
    const url = `http://localhost:8080/WebTechnikonProject/resources/admin/onGoingRepairs`;
    const username = localStorage.getItem('username');
    const password = localStorage.getItem('password');
    const headers = new HttpHeaders()
      .set('Content-Type', 'application/json')
      .set('crossDomain', 'true')
      .set('Authorization', 'Basic ' + btoa(username + ':' + password));
    return this.http.get(url, { headers: headers })
      .pipe(
        retry(1),
        catchError(error => throwError(() => 'Something is wrong...'))
      );
  }

  getAllPendingRepairs() {
    const url = `http://localhost:8080/WebTechnikonProject/resources/admin/pendingRepairs`;
    const username = localStorage.getItem('username');
    const password = localStorage.getItem('password');
    const headers = new HttpHeaders()
      .set('Content-Type', 'application/json')
      .set('crossDomain', 'true')
      .set('Authorization', 'Basic ' + btoa(username + ':' + password));
    return this.http.get(url, { headers: headers })
      .pipe(
        retry(1),
        catchError(error => throwError(() => 'Something is wrong...'))
      );
  }


}

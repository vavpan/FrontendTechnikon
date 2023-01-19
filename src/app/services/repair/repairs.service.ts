import { Injectable } from '@angular/core';
import { HttpClient, HttpHandler, HttpHeaders, HttpParams } from '@angular/common/http';
import { throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class RepairService {

  constructor(private http: HttpClient) { }


  get(repairId: number) {
    const url = `http://localhost:8080/WebTechnikonProject/resources/repairResource/repair/${repairId}`;
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

  getBySubmissionDate(submissionDate: string) {
    const url = `http://localhost:8080/WebTechnikonProject/resources/repairResource/repairs/submissionDate/${submissionDate}`;
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

  getByOwnerId(id: number) {
    const url = `http://localhost:8080/WebTechnikonProject/resources/repairResource/repairs/owner/${id}`;
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


  getAll() {
    const url = `http://localhost:8080/WebTechnikonProject/resources/repairResource/repairs`;
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

  post(data: any) {
    const url = `http://localhost:8080/WebTechnikonProject/resources/repairResource/repair`;
    const username = localStorage.getItem('username');
    const password = localStorage.getItem('password');
    const headers = new HttpHeaders()
      .set('Content-Type', 'application/json')
      .set('crossDomain', 'true')
      .set('Authorization', 'Basic ' + btoa(username + ':' + password));
    return this.http.post(url, JSON.stringify(data), { headers: headers })
      .pipe(
        retry(1),
        catchError(error => throwError(() => 'Something is wrong...'))
      );
  }

  put(id: number, data: any) {
    const url = `http://localhost:8080/WebTechnikonProject/resources/repairResource/repair/${id}`;
    const username = localStorage.getItem('username');
    const password = localStorage.getItem('password');
    const headers = new HttpHeaders()
      .set('Content-Type', 'application/json')
      .set('crossDomain', 'true')
      .set('Authorization', 'Basic ' + btoa(username + ':' + password));


    return this.http.put(url, data, { headers: headers })
      .pipe(
        retry(1),
        catchError(error => throwError(() => 'Something is wrong...'))
      );
  }


  putRepairType(id: number, data: any) {
    const url = `http://localhost:8080/WebTechnikonProject/resources/repairResource/repairType/${id}`;
    const username = localStorage.getItem('username');
    const password = localStorage.getItem('password');
    const headers = new HttpHeaders()
      .set('Content-Type', 'text/plain')
      .set('crossDomain', 'true')
      .set('Authorization', 'Basic ' + btoa(username + ':' + password));


    return this.http.put(url, data, { headers: headers })
      .pipe(
        retry(1),
        catchError(error => throwError(() => 'Something is wrong...'))
      );
  }


  putRepairDescription(id: number, data: any) {
    const url = `http://localhost:8080/WebTechnikonProject/resources/repairResource/repairDescription/${id}`;
    const username = localStorage.getItem('username');
    const password = localStorage.getItem('password');
    const headers = new HttpHeaders()
      .set('Content-Type', 'text/plain')
      .set('crossDomain', 'true')
      .set('Authorization', 'Basic ' + btoa(username + ':' + password));


    return this.http.put(url, data, { headers: headers })
      .pipe(
        retry(1),
        catchError(error => throwError(() => 'Something is wrong...'))
      );
  }

  putSubmissionDate(id: number, data: any) {
    const url = `http://localhost:8080/WebTechnikonProject/resources/repairResource/submissionDate/${id}`;
    const username = localStorage.getItem('username');
    const password = localStorage.getItem('password');
    const headers = new HttpHeaders()
      .set('Content-Type', 'text/plain')
      .set('crossDomain', 'true')
      .set('Authorization', 'Basic ' + btoa(username + ':' + password));


    return this.http.put(url, data, { headers: headers })
      .pipe(
        retry(1),
        catchError(error => throwError(() => 'Something is wrong...'))
      );
  }


  delete(repairId: number) {
    const url = `http://localhost:8080/WebTechnikonProject/resources/repairResource/repair/${repairId}`;
    const username = localStorage.getItem('username');
    const password = localStorage.getItem('password');
    const headers = new HttpHeaders()
      .set('Content-Type', 'application/json')
      .set('crossDomain', 'true')
      .set('Authorization', 'Basic ' + btoa(username + ':' + password));

    return this.http.delete(url, { headers: headers })
      .pipe(
        retry(1),
        catchError(error => throwError(() => 'Something is wrong...'))
      );
  }
}








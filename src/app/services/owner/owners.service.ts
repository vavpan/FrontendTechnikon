import { Injectable } from '@angular/core';
import { HttpClient, HttpHandler, HttpHeaders, HttpParams } from '@angular/common/http';
import { throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class OwnersService {

  constructor(private http: HttpClient) {

  }


  get(ownerId: number) {
    const url = `http://localhost:8080/WebTechnikonProject/resources/ownerResource/owner/${ownerId}`;
    const headers = new HttpHeaders()
      .set('Content-Type', 'application/json')
      .set('crossDomain', 'true');
    return this.http.get(url, { headers: headers })
      .pipe(
        retry(1),
        catchError(error => throwError(() => 'Something is wrong...'))
      );
  }

  getAll() {
    const url = `http://localhost:8080/WebTechnikonProject/resources/ownerResource/owners`;
    const headers = new HttpHeaders()
      .set('Content-Type', 'application/json')
      .set('crossDomain', 'true');
    return this.http.get(url, { headers: headers })
      .pipe(
        retry(1),
        catchError(error => throwError(() => 'Something is wrong...'))
      );
  }

  post(data: any) {

    const url = 'http://localhost:8080/WebTechnikonProject/resources/ownerResource/owner';

    const headers = new HttpHeaders()
      .set('Content-Type', 'application/json')
      .set('crossDomain', 'true');

    return this.http.post(url, JSON.stringify(data), { headers: headers })
      .pipe(
        retry(1),
        catchError(error => throwError(() => 'Something is wrong...'))
      );

  }

  put(id: number, data: any) {
    const url = `http://localhost:8080/WebTechnikonProject/resources/ownerResource/owner/${id}`;
    const headers = new HttpHeaders()
      .set('Content-Type', 'application/json')
      .set('crossDomain', 'true');
    return this.http.put(url, data, { headers: headers })
      .pipe(
        retry(1),
        catchError(error => throwError(() => 'Something is wrong...'))
      );
  }
   

  


  delete(ownerId: number) {
    const url = `http://localhost:8080/WebTechnikonProject/resources/ownerResource/owner/${ownerId}`;

    const headers = new HttpHeaders()
      .set('Content-Type', 'application/json')
      .set('crossDomain', 'true');

    return this.http.delete(url, { headers: headers })
      .pipe(
        retry(1),
        catchError(error => throwError(() => 'Something is wrong...'))
      );
  }



}

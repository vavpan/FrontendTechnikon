import { Injectable } from '@angular/core';
import { HttpClient, HttpHandler, HttpHeaders, HttpParams } from '@angular/common/http';
import { throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PropertyService {

  constructor(private http: HttpClient) {

  }

  get(repairId: number) {
    const url = `http://localhost:8080/WebTechnikonProject/resources/propertyResource/property/${repairId}`;
    const headers = new HttpHeaders()
      .set('Content-Type', 'application/json')
      .set('crossDomain', 'true');
    return this.http.get(url, { headers: headers })
      .pipe(
        retry(1),
        catchError(error => throwError(() => 'Something is wrong...'))
      );
  }

  getByVat(vat: number) {
    const url = `http://localhost:8080/WebTechnikonProject/resources/propertyResource/properties/ownerVat/${vat}`;
    const headers = new HttpHeaders()
      .set('Content-Type', 'application/json')
      .set('crossDomain', 'true');
    return this.http.get(url, { headers: headers })
      .pipe(
        retry(1),
        catchError(error => throwError(() => 'Something is wrong...'))
      );
  }

  getByE9(e9 : number) {
    const url = `http://localhost:8080/WebTechnikonProject/resources/propertyResource/property/e9/${e9}`;
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
    const url = `http://localhost:8080/WebTechnikonProject/resources/propertyResource/properties`;
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
    const url = 'http://localhost:8080/WebTechnikonProject/resources/propertyResource/property';

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
    const url = 'http://localhost:8080/WebTechnikonProject/resources/propertyResource/property/${id}';

    const headers = new HttpHeaders()
      .set('Content-Type', 'application/json')
      .set('crossDomain', 'true');

    return this.http.put(url, data, { headers: headers })
      .pipe(
        retry(1),
        catchError(error => throwError(() => 'Something is wrong...'))
      );
  }

  delete(propertyId: number) {
    const url = `http://localhost:8080/WebTechnikonProject/resources/propertyResource/property/${propertyId}`;

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
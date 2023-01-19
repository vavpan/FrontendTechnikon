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


  getByVat(vat: number) {
    const url = `http://localhost:8080/WebTechnikonProject/resources/ownerResource/owner/vat/${vat}`;
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

  getByEmail(email: string) {
    const url = `http://localhost:8080/WebTechnikonProject/resources/ownerResource/owner/email/${email}`;
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
    const url = `http://localhost:8080/WebTechnikonProject/resources/ownerResource/owners`;
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

    const url = `http://localhost:8080/WebTechnikonProject/resources/ownerResource/owner`;
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
    const url = `http://localhost:8080/WebTechnikonProject/resources/ownerResource/owner/${id}`;
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


  putVat(id: number, data: any) {
    const url = `http://localhost:8080/WebTechnikonProject/resources/ownerResource/updateVat/${id}`;
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


  putName(id: number, data: any) {
    const url = `http://localhost:8080/WebTechnikonProject/resources/ownerResource/updateName/${id}`;
    const username = localStorage.getItem('username');
    const password = localStorage.getItem('password');
    const headers = new HttpHeaders()
      .set('Content-Type', 'text/plain')
      .set('crossDomain', 'true')
      .set('Authorization', 'Basic ' + btoa(username + ':' + password));
    return this.http.put(url, data.toString(), { headers: headers })
      .pipe(
        retry(1),
        catchError(error => throwError(() => 'Something is wrong...'))
      );
  }

  putAddress(id: number, data: any) {
    const url = `http://localhost:8080/WebTechnikonProject/resources/ownerResource/updateAddress/${id}`;
    const username = localStorage.getItem('username');
    const password = localStorage.getItem('password');
    const headers = new HttpHeaders()
      .set('Content-Type', 'text/plain')
      .set('crossDomain', 'true')
      .set('Authorization', 'Basic ' + btoa(username + ':' + password));
    return this.http.put(url, data.toString(), { headers: headers })
      .pipe(
        retry(1),
        catchError(error => throwError(() => 'Something is wrong...'))
      );
  }


  putEmail(id: number, data: any) {
    const url = `http://localhost:8080/WebTechnikonProject/resources/ownerResource/updateEmail/${id}`;
    const username = localStorage.getItem('username');
    const password = localStorage.getItem('password');
    const headers = new HttpHeaders()
      .set('Content-Type', 'text/plain')
      .set('crossDomain', 'true')
      .set('Authorization', 'Basic ' + btoa(username + ':' + password));
    return this.http.put(url, data.toString(), { headers: headers })
      .pipe(
        retry(1),
        catchError(error => throwError(() => 'Something is wrong...'))
      );
  }

  putUsername(id: number, data: any) {
    const url = `http://localhost:8080/WebTechnikonProject/resources/ownerResource/updateUsername/${id}`;
    const username = localStorage.getItem('username');
    const password = localStorage.getItem('password');
    const headers = new HttpHeaders()
      .set('Content-Type', 'text/plain')
      .set('crossDomain', 'true')
      .set('Authorization', 'Basic ' + btoa(username + ':' + password));
    return this.http.put(url, data.toString(), { headers: headers })
      .pipe(
        retry(1),
        catchError(error => throwError(() => 'Something is wrong...'))
      );
  }



  putSurname(id: number, data: any) {
    const url = `http://localhost:8080/WebTechnikonProject/resources/ownerResource/updateSurname/${id}`;
    const username = localStorage.getItem('username');
    const password = localStorage.getItem('password');
    const headers = new HttpHeaders()
      .set('Content-Type', 'text/plain')
      .set('crossDomain', 'true')
      .set('Authorization', 'Basic ' + btoa(username + ':' + password));
    return this.http.put(url, data.toString(), { headers: headers })
      .pipe(
        retry(1),
        catchError(error => throwError(() => 'Something is wrong...'))
      );
  }

  putPassword(id: number, data: any) {
    const url = `http://localhost:8080/WebTechnikonProject/resources/ownerResource/updatePassword/${id}`;
    const username = localStorage.getItem('username');
    const password = localStorage.getItem('password');
    const headers = new HttpHeaders()
      .set('Content-Type', 'text/plain')
      .set('crossDomain', 'true')
      .set('Authorization', 'Basic ' + btoa(username + ':' + password));
    return this.http.put(url, data.toString(), { headers: headers })
      .pipe(
        retry(1),
        catchError(error => throwError(() => 'Something is wrong...'))
      );
  }


  putPhoneNumber(id: number, data: any) {
    const url = `http://localhost:8080/WebTechnikonProject/resources/ownerResource/updatePhoneNumber/${id}`;
    const username = localStorage.getItem('username');
    const password = localStorage.getItem('password');
    const headers = new HttpHeaders()
      .set('Content-Type', 'text/plain')
      .set('crossDomain', 'true')
      .set('Authorization', 'Basic ' + btoa(username + ':' + password));
    return this.http.put(url, data.toString(), { headers: headers })
      .pipe(
        retry(1),
        catchError(error => throwError(() => 'Something is wrong...'))
      );
  }









  delete(ownerId: number) {
    const url = `http://localhost:8080/WebTechnikonProject/resources/ownerResource/owner/${ownerId}`;
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



  // USER DETAILS IN HOMEPAGE 

  getByPropertiesByVat(vat: number) {
    const url = `http://localhost:8080/WebTechnikonProject/resources/propertyResource/properties/ownerVat/${vat}`;
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

  getByOwnerId(ownerId: number) {
    const url = `http://localhost:8080/WebTechnikonProject/resources/repairResource/repairs/owner/${ownerId}`;
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

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private baseUrl = 'http://localhost:8080/WebTechnikonProject/resources/loginResource/login';

  currentUser!: string;
  role!: string;
  id!: number;
  vat!: number;

  constructor(private http: HttpClient) { }

  login(username: string, password: string): Observable<boolean> {
    const headers = new HttpHeaders({
      Authorization: 'Basic ' + btoa(username + ':' + password)
    });
    return this.http.post<any>(this.baseUrl, {}, { headers }).pipe(
      map(response => {
        if (response) {
          localStorage.setItem("username", username);
          localStorage.setItem("password", password);
          localStorage.setItem("role", response.role); //set the user role in local storage
          localStorage.setItem("id", response.id);
          localStorage.setItem("vat", response.vat);

          this.currentUser = username;
          this.role = response.role; 
          this.id = response.id;
          this.vat = response.vat;
          console.log(this.id);
          return true;
        } else {
          return false;
        }
      }), catchError(err => {
        console.log(err);
        return of(false);
      }));
  }

  isAuthenticated(): boolean {
    if (localStorage.getItem('username') && localStorage.getItem('password') && localStorage.getItem('role')) {
      return true;
    }
    return false;
  }

  logout() {
    localStorage.clear();
  }

  getUsername(): string {
    return this.currentUser;
}

isAdmin(): boolean {
  return localStorage.getItem('role') === 'ADMIN';
}

isUser(): boolean {
  return localStorage.getItem('role') === 'USER';
}


}

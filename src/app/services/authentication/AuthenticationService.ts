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

  constructor(private http: HttpClient) { }

  login(username: string, password: string): Observable<boolean> {
    const headers = new HttpHeaders({
      Authorization: 'Basic ' + btoa(username + ':' + password)
    });
    return this.http.post<any>(this.baseUrl, {}, { headers }).pipe(
      map(response => {
        if (response) {
          localStorage.setItem("authenticated", "true");
          this.currentUser = username;
          this.role = response.role; //set the user role
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
    if (localStorage.getItem('username') && localStorage.getItem('password')) {
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

}

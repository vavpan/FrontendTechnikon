import { AuthenticationService } from 'src/app/services/authentication/AuthenticationService';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private currentUserSubject = new BehaviorSubject<string>('');
  public currentUser = this.currentUserSubject.asObservable();

  constructor(private service: AuthenticationService) { }

  setCurrentUser(user: string) {
      this.currentUserSubject.next(user);
  }

  isAuthenticated(): boolean {
    return this.service.isAuthenticated();
  }

}
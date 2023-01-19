import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from './services/authentication/AuthenticationService';
import { UserService } from './services/user/user-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'frontTechnikon';

  constructor(public authenticationService: AuthenticationService, private router: Router) {}

  ngOnInit() {
    if (this.authenticationService.isAuthenticated() && localStorage.getItem('role') === 'ADMIN') {
      this.router.navigate(['/administrator-homepage']);
    }
  }

  logout() {
    localStorage.removeItem('authenticated');
    localStorage.removeItem('username');
    this.router.navigate(['/login']);
  }
}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from './services/authentication/AuthenticationService';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'frontTechnikon';


  constructor(private authenticationService: AuthenticationService, private router: Router) {


  }

  ngOnInit(): void {
   
  }

  logout() {
    localStorage.removeItem('authenticated');
    localStorage.removeItem('username');
    this.router.navigate(['/login']);
  }
}

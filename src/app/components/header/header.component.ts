import { UserService } from './../../services/user/user-service.service';
import { AuthenticationService } from './../../services/authentication/AuthenticationService';
import { Component, Input, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
  
})
export class HeaderComponent implements OnInit {
  currentUser!: string;

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit() {
    this.userService.currentUser.subscribe(user => this.currentUser = user);

    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd && event.urlAfterRedirects === '/login') {
        this.currentUser = '';
      }
    });
  }
}
import { UserService } from './../../services/user/user-service.service';
import { AuthenticationService } from './../../services/authentication/AuthenticationService';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
  
})
export class HeaderComponent implements OnInit {
  currentUser!: string;

  constructor(private UserService: UserService) { }

  ngOnInit() {
      this.UserService.currentUser.subscribe(user => this.currentUser = user);
  }
}
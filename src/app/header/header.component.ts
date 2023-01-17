import { AuthenticationService } from './../services/authentication/AuthenticationService';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
})
export class HeaderComponent implements OnInit {
  @Input() currentUser!: string;

  constructor() { }

  ngOnInit(): void {
  }
}
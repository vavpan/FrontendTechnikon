import { OwnersService } from './../../services/owners.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ownerpost',
  templateUrl: './ownerpost.component.html',
  styleUrls: ['./ownerpost.component.scss']
})

export class OwnerpostComponent implements OnInit {

  response: any;

  constructor(private service: OwnersService) { }

  ngOnInit(): void {
  }


  postOwner() {

    const data =
    {
      "vat": 1,
      "name": "assws",
      "surname": "Dan Jukes",
      "address": "Dan Jukes",
      "phoneNumber": "sss",
      "email": "sss",
      "username": "sss",
      "password": "sss"
    }

    this.service.post(data).subscribe({
      next: data => this.response = data
    });

  }


}

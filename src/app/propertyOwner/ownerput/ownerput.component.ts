import { Component, OnInit } from '@angular/core';
import { OwnersService } from 'src/app/services/owner/owners.service'; 

@Component({
  selector: 'app-ownerput',
  templateUrl: './ownerput.component.html',
  styleUrls: ['./ownerput.component.scss']
})
export class OwnerputComponent implements OnInit {

  response: any;

  constructor(private service: OwnersService) { }

  ngOnInit(): void {
  }

  putOwner() {

    const data =
    {
      "vat": 1,
      "name": "THIS IS A PUT TEST",
      "surname": "Dan Jukes",
      "address": "Dan Jukes",
      "phoneNumber": "sss",
      "email": "sss",
      "username": "sss",
      "password": "sss"
    }

    this.service.put(data).subscribe({
      next: data => this.response = data
    });

  }

}

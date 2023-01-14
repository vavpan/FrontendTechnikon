import { OwnersService } from 'src/app/services/owner/owners.service'; 
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ownerpost',
  templateUrl: './ownerpost.component.html',
  styleUrls: ['./ownerpost.component.scss']
})

export class OwnerpostComponent implements OnInit {

  vat!: number;
  name!: string;
  surname!: string;
  address!: string;
  phoneNumber!: string;
  email!: string;
  username!: string;
  password!: string;
  response: any;

  constructor(private service: OwnersService) { }

  ngOnInit(): void {
  }


  postOwner() {
    const data = {
      vat: this.vat,
      name: this.name,
      surname: this.surname,
      address: this.address,
      phoneNumber: this.phoneNumber,
      email: this.email,
      username: this.username,
      password: this.password
    }
    this.service.post(data).subscribe({
      next: data => this.response = data
    });
  }
}
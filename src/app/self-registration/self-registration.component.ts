import { OwnersService } from './../services/owner/owners.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-self-registration',
  templateUrl: './self-registration.component.html',
  styleUrls: ['./self-registration.component.scss']
})
export class SelfRegistrationComponent implements OnInit{
  
  vat!: number;
  name!: string;
  surname!: string;
  address!: string;
  phoneNumber!: string;
  email!: string;
  username!: string;
  password!: string;
  role!: string;
  response: any;

  constructor(private service: OwnersService){}
  
  ngOnInit(): void {
  }

  registerOwner(){
    const data = {
      vat: this.vat,
      name: this.name,
      surname: this.surname,
      address: this.address,
      phoneNumber: this.phoneNumber,
      email: this.email,
      username: this.username,
      password: this.password,
      role: this.role
    }
    this.service.post(data).subscribe({
      next: data => this.response = data
    });
}



}

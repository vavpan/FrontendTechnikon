import { OwnersComponent } from './../ownersget/owners.component';
import { Component, OnInit } from '@angular/core';
import { OwnersService } from 'src/app/services/owner/owners.service';


@Component({
  selector: 'app-ownerput',
  templateUrl: './ownerput.component.html',
  styleUrls: ['./ownerput.component.scss']
})
export class OwnerputComponent implements OnInit {

  ownersComponent: OwnersComponent = new OwnersComponent(this.service);

  ownerId!: number;
  vat!: number;
  name!: string;
  surname!: string;
  address!: string;
  phoneNumber!: string;
  email!: string;
  username!: string;
  password!: string;
  response: any;
  message!: string;



  constructor(private service: OwnersService) { }

  ngOnInit(): void {
  }

  putOwner(id: number) {
    const data = {
      id: id,
      vat: this.vat,
      name: this.name,
      surname: this.surname,
      address: this.address,
      phoneNumber: this.phoneNumber,
      email: this.email,
      username: this.username,
      password: this.password
    }
    this.service.put(id, data).subscribe({
      next: data => {
        this.response = data;
        this.message = 'Owner updated successfully';
      },
      error: error => {
        this.message = 'Error updating owner: ' + error.message;
      }
    });
  }
}





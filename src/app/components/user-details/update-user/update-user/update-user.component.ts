import { OwnersService } from 'src/app/services/owner/owners.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.scss']
})
export class UpdateUserComponent implements OnInit {

  loading = false;
  message: string = '';
  response: any;
  ownerId: any;
  vat!: number;
  name!: string;
  surname!: string;
  address!: string;
  phoneNumber!: string;
  email!: string;
  username!: string;
  password!: string;


  constructor(private service: OwnersService) { }

  ngOnInit(): void {
    this.ownerId = localStorage.getItem("id");
    this.updateUser();
  }

  updateUser() {
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
    this.service.put(this.ownerId,data).subscribe(
      data => {
        console.log("Update request is successful ", data);
        this.message = 'Updated successfully';

      },
      error => {
        console.log("Error", error);
        this.message = 'Error updating: ' + error.message;
      }
    );
  }

}
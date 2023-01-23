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


  }



  updateVat() {
    const data = this.vat
    this.service.putVat(this.ownerId, data).subscribe(
      data => {
        console.log("Vat update request is successful ", data);
        this.message = 'Vat updated successfully';
      },
      error => {
        console.log("Error", error);
        this.message = 'Error updating vat: ' + error.message;
      }
    );
  }

  updateName() {
    const data = { name: this.name }
    this.service.putName(this.ownerId, data.name).subscribe(
      data => {
        console.log("Name update request is successful ", data);
        this.message = 'Name updated successfully';
      },
      error => {
        console.log("Error", error);
        this.message = 'Error updating name: ' + error.error;
      }
    );
  }


  updateSurname() {
    const data = { surname: this.surname }
    this.service.putSurname(this.ownerId, data.surname).subscribe(
      data => {
        console.log("surname update request is successful ", data);
        this.message = 'surname updated successfully';
      },
      error => {
        console.log("Error", error);
        this.message = 'Error updating surname: ' + error.error;
      }
    );
  }

  updateAddress() {
    const data = { address: this.address }
    this.service.putAddress(this.ownerId, data.address).subscribe(
      data => {
        console.log("address update request is successful ", data);
        this.message = 'address updated successfully';
      },
      error => {
        console.log("Error", error);
        this.message = 'Error updating address: ' + error.error;
      }
    );
  }

  uppdatePhoneNumber() {
    const data = { phoneNumber: this.phoneNumber }
    this.service.putPhoneNumber(this.ownerId, data.phoneNumber).subscribe(
      data => {
        console.log("phoneNumber update request is successful ", data);
        this.message = 'phoneNumber updated successfully';
      },
      error => {
        console.log("Error", error);
        this.message = 'Error updating phoneNumber: ' + error.error;
      }
    );
  }

  updateEmail() {
    const data = { email: this.email }
    this.service.putEmail(this.ownerId, data.email).subscribe(
      data => {
        console.log("email update request is successful ", data);
        this.message = 'email updated successfully';
      },
      error => {
        console.log("Error", error);
        this.message = 'Error updating email: ' + error.error;
      }
    );
  }

  updateUsername() {
    const data = { username: this.username }
    this.service.putUsername(this.ownerId, data.username).subscribe(
      data => {
        console.log("username update request is successful ", data);
        this.message = 'username updated username';
      },
      error => {
        console.log("username", error);
        this.message = 'Error updating username: ' + error.error;
      }
    );
  }

 


  updatePassword() {
    const data = { password: this.password }
    this.service.putPassword(this.ownerId, data.password).subscribe(
      data => {
        console.log("password update request is successful ", data);
        this.message = 'password updated password';
      },
      error => {
        console.log("password", error);
        this.message = 'Error updating password: ' + error.error;
      }
    );
  }

}
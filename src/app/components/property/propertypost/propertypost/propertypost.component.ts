import { PropertyService } from './../../../../services/property/properties.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-propertypost',
  templateUrl: './propertypost.component.html',
  styleUrls: ['./propertypost.component.scss']
})
export class PropertypostComponent implements OnInit {

  e9!: number;
  address!: string;
  yearOfConstruction!: string;
  propertyType!: string;
  response: any;
  responseMessage!: string;

  exist!: boolean;

  constructor(private service: PropertyService) {
  }

  ngOnInit(): void {

  }

  postProperty() {
    const data = {
      e9: this.e9,
      address: this.address,
      yearOfConstruction: this.yearOfConstruction,
      propertyType: this.propertyType
    }
    this.service.post(data).subscribe({
      next: data => {
        this.response = data;
        this.responseMessage = "The property has been added successfully";
      },
      error: error => {
        this.responseMessage = "Failed to add property " + error;
      }
    });
  }

  async checkIfE9Exists(): Promise<boolean> {
    let exist = false;
    await this.service.getAndCheckE9(this.e9).toPromise().then(
      data => {
        if (data) {
          this.responseMessage = "E9 already exists in the database. Please enter a different E9 number.";
          exist = true;
        } else {
          exist = false;
        }
      }).catch(err => {
        if (err.status === 404) {
          exist = false;
        } else {
          this.responseMessage = "Something went wrong. Please try again later.";
          console.error(err);
        }
      });
    return exist;
  }

  async onPostProperty() {
    if (!await this.checkIfE9Exists()) {
      this.postProperty();
    }
  }

}


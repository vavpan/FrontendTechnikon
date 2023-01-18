import { PropertyService } from './../../../../services/property/properties.service';
import { Component, OnInit } from '@angular/core';

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

  constructor(private service: PropertyService) {

  }

  ngOnInit(): void {

  }


  postProperty(){
    const data ={
      e9: this.e9,
      address: this.address,
      yearOfConstruction: this.yearOfConstruction,
      propertyType: this.propertyType
    }
    this.service.post(data).subscribe({
      next: data => {
        this.response = data;
        this.responseMessage = "Post request was successful";
      },
      error: error => {
        this.responseMessage = "Post request failed: " + error;
      }
    });
  }

}

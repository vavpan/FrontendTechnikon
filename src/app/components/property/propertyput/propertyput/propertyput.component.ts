import { PropertyService } from './../../../../services/property/properties.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-propertyput',
  templateUrl: './propertyput.component.html',
  styleUrls: ['./propertyput.component.scss']
})
export class PropertyputComponent implements OnInit {

  propertyId!: number;
  e9!: number;
  address!: string;
  yearOfConstruction!: string;
  propertyType!: string;
  response: any;
  message!: string;

  constructor(private service: PropertyService) {

  }

  ngOnInit(): void {

  }

  putProperty(id: number) {

    const data = {
      id: id,
      e9: this.e9,
      address: this.address,
      yearOfConstruction: this.yearOfConstruction,
      propertyType: this.propertyType
    }
   this.service.put(id,data).subscribe({
    next: data => {
      this.response = data;
      this.message = 'Property updated successfully';
    },
    error: error => {
      this.message = 'Error updating property: ' + error.message;
    }
  });
    
   

  }

}

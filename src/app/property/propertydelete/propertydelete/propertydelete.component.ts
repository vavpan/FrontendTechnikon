import { PropertyService } from './../../../services/property/properties.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-propertydelete',
  templateUrl: './propertydelete.component.html',
  styleUrls: ['./propertydelete.component.scss']
})

export class PropertydeleteComponent implements OnInit {

  message: string = '';
  response: any;
  propertyId!: number;

  constructor(private service: PropertyService) {

  }

  ngOnInit(): void {

  }

  deleteProperty() {
    this.service.delete(this.propertyId).subscribe(
      data => {
        console.log("DELETE request is successful ", data);
        this.message = 'Deleted successfully';
      },
      error => {
        console.log("Error", error);
        this.message = 'Error deleting: ' + error.message;
      }
    );
  }

}

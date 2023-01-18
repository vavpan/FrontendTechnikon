import { PropertyService } from './../../../services/property/properties.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-my-property',
  templateUrl: './update-my-property.component.html',
  styleUrls: ['./update-my-property.component.scss']
})
export class UpdateMyPropertyComponent implements OnInit{
  propertyId!: number;
  e9!: number;
  address!: string;
  yearOfConstruction!: string;
  propertyType!: string;
  response: any;
  message!: string;

  constructor(private route: ActivatedRoute, private router: Router, private service: PropertyService) {}
  
  ngOnInit(): void {
    this.propertyId = this.route.snapshot.params['id']
  }

  onUpdateProperty(id: number) {
    this.propertyId = id
    this.router.navigate(['/update-property', id]);
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
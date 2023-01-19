import { PropertyService } from './../../services/property/properties.service';
import { OwnersService } from 'src/app/services/owner/owners.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-user-property-details',
  templateUrl: './user-property-details.component.html',
  styleUrls: ['./user-property-details.component.scss']
})
export class UserPropertyDetailsComponent implements OnInit {


  response: any;
  loading = false;
  message = '';
  propertyData: any[] = [];
  vat!: any;

  propertyId!: number;
  e9!: number;
  address!: string;
  yearOfConstruction!: string;
  propertyType!: string;

  constructor(private service: OwnersService, private propertyService: PropertyService,private router: Router) {
    this.vat = localStorage.getItem("vat");
    this.getOwnerDetails();
  }

  ngOnInit(): void {

  }


  getOwnerDetails() {
    this.loading = true;
    this.service.getByPropertiesByVat(this.vat).subscribe({
      next: data => {
        this.response = data;
        this.loading = false;
        this.propertyData = this.response.data ? [this.response.data] : this.response;
      },
      error: er => this.message = "Error" + er.message

    });
  }

  deleteProperty(id: number) {
    this.propertyService.delete(id).subscribe(
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

  onUpdateProperty(id: number) {
    this.router.navigate(['/update-property', id]);
  }
}



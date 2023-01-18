import { PropertyService } from 'src/app/services/property/properties.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-property-search',
  templateUrl: './property-search.component.html',
  styleUrls: ['./property-search.component.scss']
})
export class PropertySearchComponent implements OnInit {

  response: any;
  loading = false;
  message = '';
  propertyData: any[] = [];
  ownerVat!: number;
  propertyId!: number;


  constructor(private service: PropertyService) { 

  }


  ngOnInit(): void {
  }



  searchProperty() {
    this.loading = true;

    if (this.propertyId) {
        this.service.get(this.propertyId).subscribe({
            next: data => {
                this.response = data;
                this.loading = false;
                console.log(this.response);
                this.propertyData = this.response.data ? [this.response.data] : this.response;
                console.log(this.propertyData);
            },
            error: er => this.message = "Error" + er.message,
            complete: () => this.message = "Completed..."
        });
    } else if (this.ownerVat) {
        this.service.getByVat(this.ownerVat).subscribe({
            next: data => {
                this.response = data;
                this.loading = false;
                console.log(this.response);
                this.propertyData = this.response.data ? [this.response.data] : this.response;
                console.log(this.propertyData);
            },
            error: er => this.message = "Error" + er.message,
            complete: () => this.message = "Completed..."
        }); 
    } else {
        this.message = 'Please enter a property ID or VAT to search.';
    }
}


  }

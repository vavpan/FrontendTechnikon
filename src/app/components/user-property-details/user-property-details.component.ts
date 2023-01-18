import { OwnersService } from 'src/app/services/owner/owners.service';
import { Component, OnInit } from '@angular/core';

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

  constructor(private service: OwnersService) {
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
      error: er => this.message = "Error" + er.message,
      complete: () => this.message = "Completed..."
    });
  }


}

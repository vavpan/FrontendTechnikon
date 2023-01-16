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
  vat!: number;
  e9!: number;


  constructor(private service: PropertyService) { }

  ngOnInit(): void {
  }



  searchProperty(vat: number, e9: number) {

    this.loading = true;
    if (vat) {
      this.service.getByVat(vat).subscribe({
        next: data => {
          this.response = data;
          this.loading = false;
          this.propertyData = [this.response.data];
          this.vat = 0;
          this.e9 = 0;
        },
        error: er => this.message = "Error" + er.message,
        complete: () => this.message = "Completed..."
      });
    } else if (e9) {
      this.service.getByE9(e9).subscribe({
        next: data => {
          this.response = data;
          this.loading = false;
          this.propertyData = [this.response.data];
          this.vat = 0;
          this.e9 = 0;
        },
        error: er => this.message = "Error" + er.message,
        complete: () => this.message = "Completed..."
      });
    }

  }

}

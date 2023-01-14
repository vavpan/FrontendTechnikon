import { Component, OnInit } from '@angular/core';
import { PropertyService } from 'src/app/services/property/properties.service';

@Component({
  selector: 'app-property',
  templateUrl: './property.component.html',
  styleUrls: ['./property.component.scss']
})

export class PropertyComponent implements OnInit{
 
  response: any;
  loading = false;
  message = '';
  propertyData: any[] = [];
  propertyId!: number;

constructor(private service: PropertyService){

}

  ngOnInit(): void {

  }

  makeRequest() {
    this.loading = true;
    this.service.get(this.propertyId).subscribe({
      next: data => {
        this.response = data;
        this.loading = false;
        this.propertyData = [this.response.data];
      },
      error: er => this.message = "Error" + er.message,
      complete: () => this.message = "Completed..."
    });

  }

  makeRequestGetAll() {
    this.loading = true;
    this.service.getAll().subscribe({
      next: data => {
        this.response = data;
        this.loading = false;
        this.propertyData = this.response.data;
      },
      error: er => this.message = "Error" + er.message,
      complete: () => this.message = "Completed..."
    });
  }


}

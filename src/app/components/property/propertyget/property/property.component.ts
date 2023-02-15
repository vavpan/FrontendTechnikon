import { Component, OnInit } from '@angular/core';
import { PropertyService } from 'src/app/services/property/properties.service';

@Component({
  selector: 'app-property',
  templateUrl: './property.component.html',
  styleUrls: ['./property.component.scss']
})

export class PropertyComponent implements OnInit {

  response: any;
  loading = false;
  message = '';
  propertyData: any[] = [];
  propertyId!: number;

  constructor(private service: PropertyService) {

  }

  ngOnInit(): void {

  }

  makeRequest() {

    if (isNaN(this.propertyId)) {
      this.message = "Please enter a valid integer.";
      this.propertyData = [];
      return;
    }

    this.loading = true;
    this.service.get(this.propertyId).subscribe({
      next: data => {
        this.response = data;
        this.loading = false;
        this.message != null;
        this.message = ' ';
        if (this.response.data) {
          this.propertyData = [this.response.data];
        } else {
          this.message = "Record with id " + this.propertyId + " does not exist.";
          this.propertyData = [];
        }
      },
      error: er => this.message = "Error" + er.message,
      complete: () => {
        if (!this.message) this.message = "Completed...";
      }
    });

  }

  makeRequestGetAll() {
    this.loading = true;
    this.service.getAll().subscribe({
      next: data => {
        this.response = data;
        this.loading = false;
        this.propertyData = this.response;
      },
      error: er => this.message = "Error" + er.message,
      complete: () => this.message = "Completed..."
    });
  }


}

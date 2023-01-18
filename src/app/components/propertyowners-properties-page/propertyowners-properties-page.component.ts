import { PropertyService } from 'src/app/services/property/properties.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-propertyowners-properties-page',
  templateUrl: './propertyowners-properties-page.component.html',
  styleUrls: ['./propertyowners-properties-page.component.scss']
})
export class PropertyownersPropertiesPageComponent implements OnInit{

  response: any;
  loading = false;
  message = '';
  repairData: any[] = [];

  constructor(private service: PropertyService){}

  ngOnInit(): void {
  
  }


  getAll(){
    this.loading = true;
    this.service.getAll().subscribe({
      next: data => {
        this.response = data;
        this.loading = false;
        this.repairData = this.response;
      },
      error: er => this.message = "Error" + er.message,
      complete: () => this.message = "Completed..."
    });
   }


}

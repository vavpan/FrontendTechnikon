import { OwnersService } from 'src/app/services/owner/owners.service'; 
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-owners',
  templateUrl: './owners.component.html',
  styleUrls: ['./owners.component.scss']
})



export class OwnersComponent implements OnInit {

  response: any;
  loading = false;
  message = '';
  ownerData: any[] = [];
  ownerId!: number;

  constructor(private service: OwnersService) {

  }

  ngOnInit(): void {
  }


  makeRequest() {
    this.loading = true;
    this.service.get(this.ownerId).subscribe({
      next: data => {
        this.response = data;
        this.loading = false;
        this.ownerData = [this.response.data];
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
        this.ownerData = this.response;
      },
      error: er => this.message = "Error" + er.message,
      complete: () => this.message = "Completed..."
    });
  }
  
  
  
  
  


}

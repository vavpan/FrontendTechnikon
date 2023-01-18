import { OwnersService } from 'src/app/services/owner/owners.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent implements OnInit {


  response: any;
  loading = false;
  message = '';
  ownerData: any[] = [];
  ownerId: any;


  constructor(private service: OwnersService) {

  }

  ngOnInit(): void {
    this.ownerId = localStorage.getItem("id");
    this.getOwnerDetails();

  }

  getOwnerDetails() {
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


}

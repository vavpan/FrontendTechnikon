import { OwnersService } from 'src/app/services/owner/owners.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-repair-details',
  templateUrl: './user-repair-details.component.html',
  styleUrls: ['./user-repair-details.component.scss']
})
export class UserRepairDetailsComponent implements OnInit {


  response: any;
  loading = false;
  message = '';
  repairData: any[] = [];
  id!: any;

  constructor(private service: OwnersService) {
     this.id = localStorage.getItem("id");
     this.getOwnerDetails();
  }

  ngOnInit(): void {

  }


  getOwnerDetails() {
    this.loading = true;
    this.service.getByOwnerId(this.id).subscribe({
      next: data => {
        this.response = data;
        this.loading = false;
        this.repairData = this.response.data ? [this.response.data] : this.response;
      },
      error: er => this.message = "Error" + er.message,
      complete: () => this.message = "Completed..."
    });
  }


}

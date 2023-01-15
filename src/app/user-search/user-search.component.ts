import { Component, OnInit } from '@angular/core';
import { OwnersService } from '../services/owner/owners.service';

@Component({
  selector: 'app-user-search',
  templateUrl: './user-search.component.html',
  styleUrls: ['./user-search.component.scss']
})
export class UserSearchComponent implements OnInit {

  response: any;
  loading = false;
  message = '';
  ownerData: any[] = [];
  vat!: number;
  email!: string;


  constructor(private service: OwnersService) {

  }

  ngOnInit(): void {

  }

  searchOwner(vat: number, email: string) {
    this.loading = true;
    if (vat) {
      this.service.getByVat(vat).subscribe({
        next: data => {
          this.response = data;
          this.loading = false;
          this.ownerData = [this.response.data];
          this.vat = 0;
          this.email = '';
        },
        error: er => this.message = "Error" + er.message,
        complete: () => this.message = "Completed..."
      });
    } else if (email) {
      this.service.getByEmail(email).subscribe({
        next: data => {
          this.response = data;
          this.loading = false;
          this.ownerData = [this.response.data];
          this.vat = 0;
          this.email = '';
        },
        error: er => this.message = "Error" + er.message,
        complete: () => this.message = "Completed..."
      });
    }
  }

}

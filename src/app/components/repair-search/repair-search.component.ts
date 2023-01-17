import { RepairService } from './../../services/repair/repairs.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-repair-search',
  templateUrl: './repair-search.component.html',
  styleUrls: ['./repair-search.component.scss']
})
export class RepairSearchComponent implements OnInit {

  response: any;
  loading = false;
  message = '';
  repairData: any[] = [];
  submissionDate!: string;
  ownerId!: number;

  constructor(private service: RepairService) {
    this.repairData = []

   }

  ngOnInit(): void {
  }

  searchRepair(submissionDate: string, ownerId: number) {

    this.loading = true;
    if (submissionDate) {
      this.service.getBySubmissionDate(submissionDate).subscribe({
        next: data => {
          this.response = data;
          this.loading = false;
          this.repairData = [this.response.data];
          this.submissionDate = ' ';
          this.ownerId = 0;
        },
        error: er => this.message = "Error" + er.message,
        complete: () => this.message = "Completed..."
      });
    } else if (ownerId) {
      this.service.getByOwnerId(ownerId).subscribe({
        next: data => {
          this.response = data;
          this.loading = false;
          this.repairData = [this.response.data];
          this.submissionDate = ' ';
          this.ownerId = 0;
        },
        error: er => this.message = "Error" + er.message,
        complete: () => this.message = "Completed..."
      });
    }




  }

}

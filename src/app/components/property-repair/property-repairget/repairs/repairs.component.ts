import { RepairService } from './../../../../services/repair/repairs.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-repairs',
  templateUrl: './repairs.component.html',
  styleUrls: ['./repairs.component.scss']
})
export class RepairsComponent implements OnInit {

  response: any;
  loading = false;
  message = '';
  repairData: any[] = [];
  repairId!: number;

  constructor(private service: RepairService) {

  }

  ngOnInit(): void {

  }


  makeRequest() {

    if (isNaN(this.repairId)) {
      this.message = " Please enter a valid integer.";
      this.repairData = [];
      return;
    }

    this.loading = true;
    this.service.get(this.repairId).subscribe({
      next: data => {
        this.response = data;
        this.loading = false;
        this.message != null;
        this.message = ' ';
        if(this.response.data){
          this.repairData = [this.response.data];
        } else {
            this.message = " Record with id " + this.repairId + " does not exist";
            this.repairData = [];
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
        this.repairData = this.response;
      },
      error: er => this.message = "Error" + er.message,
      complete: () => this.message = "Completed..."
    });
  }


}

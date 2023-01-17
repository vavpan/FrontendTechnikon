import { RepairService } from './../../../../services/repair/repairs.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-repairpost',
  templateUrl: './repairpost.component.html',
  styleUrls: ['./repairpost.component.scss']
})
export class RepairpostComponent implements OnInit {
  
  repairType!: string;
  repairDescription!: string;
  submissionDate!: string;
  workDescription!: string;
  startDate!: string;
  endDate!: string;
  cost!: number;
  acceptance!: boolean;
  repairStatus!: string;
  actualStartDate!: string;
  actualEndDate!: string;

  response: any;


  constructor(private service: RepairService) {

  }

  ngOnInit(): void {

  }

  postRepair() {
    const data = {

      repairType: this.repairType,
      repairDescription: this.repairDescription,
      submissionDate: this.submissionDate,
      workDescription: this.workDescription,
      startDate: this.startDate,
      endDate: this.endDate,
      cost: this.cost,
      acceptance: this.acceptance,
      repairStatus: this.repairStatus,
      actualStartDate: this.actualStartDate,
      actualEndDate: this.actualEndDate
    }
    this.service.post(data).subscribe({
      next: data => this.response = data
    })
  }

}

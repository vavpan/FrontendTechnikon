import { RepairService } from './../../../services/repair/repairs.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-repairput',
  templateUrl: './repairput.component.html',
  styleUrls: ['./repairput.component.scss']
})
export class RepairputComponent implements OnInit {
  
  repairId!: number;
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
  message!: string;


  constructor(private service: RepairService) { }


  ngOnInit(): void {

  }


  putRepair(id: number) {
    const data = {
      id: id,
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
      actualEndDate: this.actualEndDate,

    }
    this.service.put(id, data).subscribe({
      next: data => {
        this.response = data;
        this.message = 'Repair updated successfully';
      },
      error: error => {
        this.message = 'Error updating repair: ' + error.message;
      }
    });
  }

}

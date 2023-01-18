import { RepairService } from './../../../services/repair/repairs.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-my-repair',
  templateUrl: './update-my-repair.component.html',
  styleUrls: ['./update-my-repair.component.scss']
})
export class UpdateMyRepairComponent implements OnInit {

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

  constructor(private route: ActivatedRoute, private router: Router, private service: RepairService) { }

  ngOnInit(): void {
    this.repairId = this.route.snapshot.params['id']
  }

  onUpdateRepair(id: number) {
    this.repairId = id
    this.router.navigate(['/update-repair', id]);
  }

  putRepair(id: number) {

    const data = {
      id: id,
      repairType: this.repairType,
      repairDescription: this.repairDescription,
      submissionDate: this.submissionDate,
      workDescription: this.workDescription,

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

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

  updateRepairType() {

    const data = { repairType: this.repairType }

    this.service.putRepairType(this.repairId, data.repairType).subscribe(
      data => {
        console.log("repairType update request is successful ", data);
        this.message = 'repairType updated successfully';
      },
      error => {
        console.log("Error", error);
        this.message = 'Error updating vat: ' + error.message;
      }
    );
  }

  updateRepairDescription() {

    const data = { repairDescription: this.repairDescription }

    this.service.putRepairDescription(this.repairId, data.repairDescription).subscribe(
      data => {
        console.log("repairDescription update request is successful ", data);
        this.message = 'repairDescription updated successfully';
      },
      error => {
        console.log("Error", error);
        this.message = 'Error updating vat: ' + error.message;
      }
    );
  }

  updateSubmissionDate() {

    const data = { submissionDate : this.submissionDate }

    this.service.putSubmissionDate(this.repairId, data.submissionDate).subscribe(
      data => {
        console.log("repairType update request is successful ", data);
        this.message = 'repairType updated successfully';
      },
      error => {
        console.log("Error", error);
        this.message = 'Error updating vat: ' + error.message;
      }
    );
  }



}

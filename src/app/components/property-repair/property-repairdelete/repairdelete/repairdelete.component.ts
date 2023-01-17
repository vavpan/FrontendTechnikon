import { RepairService } from './../../../../services/repair/repairs.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-repairdelete',
  templateUrl: './repairdelete.component.html',
  styleUrls: ['./repairdelete.component.scss']
})
export class RepairdeleteComponent implements OnInit {

  message: string = '';
  response: any;
  repairId!: number;

  constructor(private service: RepairService) {

  }

  ngOnInit(): void {

  }

  deleteRepair() {
    this.service.delete(this.repairId).subscribe(
      data => {
        console.log("DELETE request is successful ", data);
        this.message = 'Deleted successfully';
      },
      error => {
        console.log("Error", error);
        this.message = 'Error deleting: ' + error.message;
      }
    );
  }

}

import { RepairService } from './../../services/repair/repairs.service';
import { OwnersService } from 'src/app/services/owner/owners.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

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

  constructor(private service: OwnersService, private repairService: RepairService,private router: Router) {
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

  deleteRepair(id: number) {
    this.repairService.delete(id).subscribe(
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

  onUpdateRepair(id: number) {
    this.router.navigate(['/update-repair', id]);
  }


}

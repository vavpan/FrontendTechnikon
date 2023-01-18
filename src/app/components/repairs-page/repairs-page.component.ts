import { AdminService } from './../../services/admin/admin.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-repairs-page',
  templateUrl: './repairs-page.component.html',
  styleUrls: ['./repairs-page.component.scss']
})
export class RepairsPageComponent implements OnInit{
  
  response: any;
  loading = false;
  message = '';
  repairData: any[] = [];



  constructor(private service: AdminService){}

  ngOnInit(): void {
  
  }


  getAll(){
    this.loading = true;
    this.service.getAllPendingRepairs().subscribe({
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

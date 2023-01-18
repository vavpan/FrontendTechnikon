import { AdminService } from './../../services/admin/admin.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admistrator-homepage',
  templateUrl: './admistrator-homepage.component.html',
  styleUrls: ['./admistrator-homepage.component.scss']
})
export class AdmistratorHomepageComponent implements OnInit{
  
  response: any;
  loading = false;
  message = '';
  repairData: any[] = [];


  constructor(private service: AdminService){}
  
  ngOnInit(): void {
    this.getAll();
  }


 getAll(){
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

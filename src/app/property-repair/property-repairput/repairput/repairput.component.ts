import { RepairService } from './../../../services/repair/repairs.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-repairput',
  templateUrl: './repairput.component.html',
  styleUrls: ['./repairput.component.scss']
})
export class RepairputComponent implements OnInit {

  response: any;

  constructor(private service: RepairService) { }


  ngOnInit(): void {

  }


  putRepair() {
     const data ={

     }


     this.service.put(data).subscribe({
      next: data => this.response = data
     })
  }

}

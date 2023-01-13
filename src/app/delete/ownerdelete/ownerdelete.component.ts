import { Component, OnInit } from '@angular/core';
import { OwnersService } from './../../services/owners.service';

@Component({
  selector: 'app-ownerdelete',
  templateUrl: './ownerdelete.component.html',
  styleUrls: ['./ownerdelete.component.scss']
})
export class OwnerdeleteComponent implements OnInit {

  response: any;
  ownerId!: number;

  constructor(private service: OwnersService) { }

  ngOnInit(): void {
  }

  deleteOwner() {
    this.service.delete(this.ownerId).subscribe(
      data => {
        console.log("DELETE request is successful ", data);
        // you can add here some messages to user that the owner is deleted
      },
      error => {
        console.log("Error", error);
      }
    );
  }


}

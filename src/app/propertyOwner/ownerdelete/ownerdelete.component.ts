import { Component, OnInit } from '@angular/core';
import { OwnersService } from 'src/app/services/owner/owners.service'; 

@Component({
  selector: 'app-ownerdelete',
  templateUrl: './ownerdelete.component.html',
  styleUrls: ['./ownerdelete.component.scss']
})
export class OwnerdeleteComponent implements OnInit {

  message: string = '';
  response: any;
  ownerId!: number;

  constructor(private service: OwnersService) { }

  ngOnInit(): void {
  }

  deleteOwner() {
    this.service.delete(this.ownerId).subscribe(
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

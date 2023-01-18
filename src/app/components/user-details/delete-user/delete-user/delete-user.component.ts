import { OwnersService } from 'src/app/services/owner/owners.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-delete-user',
  templateUrl: './delete-user.component.html',
  styleUrls: ['./delete-user.component.scss']
})
export class DeleteUserComponent implements OnInit {

  loading = false;
  message: string = '';
  response: any;
  ownerId: any;

  constructor(private service: OwnersService) { }

  ngOnInit(): void {
    this.ownerId = localStorage.getItem("id");
    this.deleteOwner();
  }

  deleteOwner() {
    this.loading = true;
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
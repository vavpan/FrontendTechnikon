import { PropertyService } from './../../../services/property/properties.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-propertydelete',
  templateUrl: './propertydelete.component.html',
  styleUrls: ['./propertydelete.component.scss']
})

export class PropertydeleteComponent implements OnInit {


  response: any;
  propertyId!: number;

 constructor(private service: PropertyService){

 }

 ngOnInit(): void {
   
 }
    
 deleteOwner() {
  this.service.delete(this.propertyId).subscribe(
    data => {
      console.log("DELETE request is successful ", data);
   
    },
    error => {
      console.log("Error", error);
    }
  );
}

}

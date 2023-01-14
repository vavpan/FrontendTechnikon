import { PropertyService } from './../../../services/property/properties.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-propertyput',
  templateUrl: './propertyput.component.html',
  styleUrls: ['./propertyput.component.scss']
})
export class PropertyputComponent implements OnInit{


response: any;

constructor(private service: PropertyService){

}

ngOnInit(): void {
  
}

putProperty(){

const data = {

}

this.service.put(data).subscribe({
  next: data => this.response = data
})

}




}

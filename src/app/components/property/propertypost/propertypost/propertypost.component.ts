import { PropertyService } from './../../../../services/property/properties.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-propertypost',
  templateUrl: './propertypost.component.html',
  styleUrls: ['./propertypost.component.scss']
})
export class PropertypostComponent implements OnInit {
  postForm!: FormGroup;
  response: any;
  responseMessage!: string;
  formError: boolean = false;

  constructor(private fb: FormBuilder, private service: PropertyService) {
    this.createForm();
  }

  ngOnInit(): void {

  }

  createForm() {
    this.postForm = this.fb.group({
      e9: ['', Validators.required],
      address: ['', Validators.required],
      yearOfConstruction: ['', Validators.required],
      propertyType: ['', Validators.required]
    });
  }

  postProperty() {
    if (this.postForm.valid) {
      const data = {
        e9: this.postForm.value.e9,
        address: this.postForm.value.address,
        yearOfConstruction: this.postForm.value.yearOfConstruction,
        propertyType: this.postForm.value.propertyType
      }
      this.service.post(data).subscribe({
        next: data => {
          this.response = data;
          this.responseMessage = "Post request was successful";
        },
        error: error => {
          this.formError = true;
        }
      });
    } 
  }
  
}
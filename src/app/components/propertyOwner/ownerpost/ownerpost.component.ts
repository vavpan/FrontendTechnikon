import { OwnersService } from 'src/app/services/owner/owners.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-ownerpost',
  templateUrl: './ownerpost.component.html',
  styleUrls: ['./ownerpost.component.scss']
})

export class OwnerpostComponent implements OnInit {

  postForm!: FormGroup;
  response: any;
  responseMessage!: string;
  formError: boolean = false;

  constructor(private fb: FormBuilder, private service: OwnersService) {
    this.createForm();
  }

  ngOnInit(): void {
    this.formError = false;
  }

  createForm() {
    this.postForm = this.fb.group({
      vat: ['', Validators.required],
      name: ['', Validators.required],
      surname: ['', Validators.required],
      address: ['', Validators.required],
      phoneNumber: ['', Validators.required],
      email: ['', Validators.required],
      username: ['', Validators.required],
      password: ['', Validators.required],
      role: ['', Validators.required]
    });
  }

  postOwner() {
    if (this.postForm.valid) {
      const data = {
        vat: this.postForm.value.vat,
        name: this.postForm.value.name,
        surname: this.postForm.value.surname,
        address: this.postForm.value.address,
        phoneNumber: this.postForm.value.phoneNumber,
        email: this.postForm.value.email,
        username: this.postForm.value.username,
        password: this.postForm.value.password,
        role: this.postForm.value.role
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
    } else {
      this.postForm.markAllAsTouched();
    }
  }
}
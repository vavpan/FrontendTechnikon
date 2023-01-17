import { AuthenticationService } from 'src/app/services/authentication/AuthenticationService';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})


export class LoginComponent implements OnInit{

  loginForm: FormGroup = this.fb.group({
    username: this.fb.control('', Validators.required),
    password: this.fb.control('', Validators.required)
  }
);


  loginUserData = {}
  constructor(private fb: FormBuilder, private router: Router, private authenticationService: AuthenticationService){

  }   

  ngOnInit(): void {
  }


  onSubmit() {
    if (this.loginForm.valid) {
      let credentials = this.getCredentials();
      // Check if username and password are present in local storage
      if (localStorage.getItem('username') === credentials.username && localStorage.getItem('password') === credentials.password) {
        this.router.navigate(['home']);
      } else {
        this.authenticationService.login(credentials.username, credentials.password)
          .subscribe(response => {
            if (response) {
              localStorage.setItem('username', credentials.username);
              localStorage.setItem('password', credentials.password);
              this.router.navigate(['home']);
            } else {
              alert("Wrong credentials");
            }
          }, error => {
            console.log(error);
            alert("An error occurred, please try again later.");
          });
      }
    }
  }

  private getCredentials(): any {
    return {
      username: this.loginForm.get('username')?.value,
      password: this.loginForm.get('password')?.value
    }
  }
 
}

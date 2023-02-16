import { UserService } from './../../services/user/user-service.service';
import { AuthenticationService } from 'src/app/services/authentication/AuthenticationService';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { InitService } from 'src/app/services/init/init.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})


export class LoginComponent implements OnInit {

  showInitButton: boolean = true;
  showErrorMessage = false;

  loginForm: FormGroup = this.fb.group({
    username: this.fb.control('', Validators.required),
    password: this.fb.control('', Validators.required)
  }
  );


  loginUserData = {}

  constructor(private fb: FormBuilder, private router: Router, private authenticationService: AuthenticationService, private userService: UserService, private initService: InitService) {

  }

  ngOnInit(): void {
  }


  onSubmit() {

    if (!this.loginForm.get('username')?.value || !this.loginForm.get('password')?.value) {
      alert("Please fill in all fields in order to login.");
      return;
    }

    if (this.loginForm.valid) {
      let credentials = this.getCredentials();
      this.authenticationService.login(credentials.username, credentials.password)
        .subscribe(response => {
          if (response) {
            this.userService.setCurrentUser(credentials.username);
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

  private getCredentials(): any {
    return {
      username: this.loginForm.get('username')?.value,
      password: this.loginForm.get('password')?.value

    }
  }


  init() {
    console.log('Initializing...');
    this.showInitButton = false;
    this.showErrorMessage = false;
    this.initService.init().subscribe(
      () => {
        console.log('Initialization completed.');
      },
      (error) => {
        console.log('An error occurred during initialization:', error);
        this.showErrorMessage = true;
        this.showInitButton = true;
      },
    );
  }
  

}








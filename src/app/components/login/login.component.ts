import { UserService } from './../../services/user/user-service.service';
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
  constructor(private fb: FormBuilder, private router: Router, private authenticationService: AuthenticationService, private userService: UserService){

  }   

  ngOnInit(): void {
  }


  onSubmit() {
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
 
}

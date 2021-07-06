import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private router: Router) { }

  name: string = "";
  email: string = "";
  password: string = "";
  confirmPassword: string = "";

  ngOnInit(): void {
  }

  handleSignup() : void {
    if(this.name == ' ' || this.name == null || this.email == ' ' || this.email == null || this.password == ' ' || this.password == null || this.confirmPassword == ' ' || this.confirmPassword == null){
     alert("Please provide all the data");
    }else if(this.password !== this.confirmPassword){
      alert("The password and confirm password do not match");
    } else if(!this.name.match("[A-Za-z\\s]{1,}[\\.]{0,1}[A-Za-z\\s]{0,}$")) {
      alert("Name is invalid");
    } else if(!/\S+@\S+\.\S+/.test(this.email)) {
      alert("Email address is invalid");
    } else if(!this.password.match("(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&+=])(?=\\S+$).{8,}")) {
      alert("Password must be strong. Password must be at least 8 characters long and include capital and small letters and special characters");
    } else {
      this.router.navigate(["login"]);
    }
  }

}

import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthenticationService } from 'src/services/authentication.service';
import { Constanturl } from 'src/config/url.config';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  environmentValue:string="Production";
  loggedInFail:boolean;
  loggedInTrue:boolean;
  constructor(private authenticationServices:AuthenticationService) { }
  
  ngOnInit() {
  }

  submitLoginForm(loginForm:NgForm){
    this.authenticationServices.signIn(loginForm.value)
    .subscribe(
      response=>{
        console.log("logged in success")
        console.log(response);
        this.loggedInTrue=true;
      },
      error=>{
        console.log("logged in failed"+error)
        this.loggedInFail=true;
      }
    );
  }

}

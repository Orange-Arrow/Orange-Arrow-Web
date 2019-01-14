import { AuthService } from './../services/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  constructor(private authService : AuthService) { }
  public logged;
  ngOnInit() {
    //triggers either the login or logout div to be displayed via the *ngIf directive in html file
    this.logged = false; //this.logged = this.authService.checkLoggedIn();
  }
  email = "";
  password = "";
  login(){
    console.log(this.email + " " + this.password);    
    /*Moved to authService
    firebase.auth().signInWithEmailAndPassword(this.email, this.password).catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      
      window.alert("Error: " + errorMessage);
      // ...
    });*/
    
    //Uncomment when db connection works
    //this.authService.login(this.email,this.password);
  }
  logout(){
    //Uncomment when db connection works
    //firebase.auth().signOut();    
  }
}
